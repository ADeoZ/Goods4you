import { CartList, CartListResponse } from "@/models";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithFreshToken } from "./utils/baseQuery";

const userId = import.meta.env.VITE_USER_ID;

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: baseQueryWithFreshToken,
  keepUnusedDataFor: 300,
  endpoints: (builder) => ({
    getCartsByUser: builder.query<CartList, void>({
      query: () => `carts/user/${userId}`,
      transformResponse: (response: CartListResponse) => response.carts[0],
    }),
  }),
});

export const { useGetCartsByUserQuery } = cartApi;
