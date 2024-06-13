import { CartList } from "@/models/cart";
import { CartListResponse } from "@/models/response";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/carts/" }),
  endpoints: (builder) => ({
    getCartsByUser: builder.query<CartList, string>({
      query: (userId: string) => `user/${userId}`,
      transformResponse: (response: CartListResponse) => response.carts[0],
    }),
  }),
});

export const { useGetCartsByUserQuery } = cartApi;
