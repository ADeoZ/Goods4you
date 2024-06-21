import { CartList, CartListResponse, CartProduct } from "@/models";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithFreshToken } from "./utils/baseQuery";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: baseQueryWithFreshToken,
  endpoints: (builder) => ({
    getCartsByUser: builder.query<CartList, string>({
      query: (userId: string) => `carts/user/${userId}`,
      keepUnusedDataFor: 300,
      transformResponse: (response: CartListResponse) => response.carts[0],
    }),
    updateCart: builder.mutation<
      CartList,
      Pick<CartList, "id"> & { products: Pick<CartProduct, "id" | "quantity">[] }
    >({
      query: ({ id, products }) => ({
        url: `carts/${id}`,
        method: "PUT",
        body: { merge: true, products },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data: updatedCart } = await queryFulfilled;
          dispatch(
            cartApi.util.updateQueryData("getCartsByUser", updatedCart.userId, (draft) => {
              Object.assign(draft, updatedCart);
            })
          );
        } catch (e) {
          console.error(e);
        }
      },
    }),
  }),
});

export const { useGetCartsByUserQuery, useUpdateCartMutation } = cartApi;
