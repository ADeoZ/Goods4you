import { Product, ProductsListResponse } from "@/models";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithFreshToken } from "./utils/baseQuery";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: baseQueryWithFreshToken,
  endpoints: (builder) => ({
    getProductsWithFilter: builder.query<
      ProductsListResponse,
      { search: string; skip: number; limit: number }
    >({
      query: ({ search, skip, limit }) => `products/search?q=${search}&skip=${skip}&limit=${limit}`,
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        if (newItems.skip > 0) {
          currentCache.products.push(...newItems.products);
          currentCache.skip = newItems.skip;
          return currentCache;
        }
        return newItems;
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg?.search !== previousArg?.search || currentArg?.skip !== previousArg?.skip;
      },
    }),
    getProductById: builder.query<Product, string>({ query: (id: string) => `products/${id}` }),
  }),
});

export const { useGetProductsWithFilterQuery, useGetProductByIdQuery } = productsApi;
