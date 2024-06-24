import { Product, ProductsListResponse } from "@/models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products/" }),
  endpoints: (builder) => ({
    getProductsWithFilter: builder.query<
      ProductsListResponse,
      { search: string; skip: number; limit: number }
    >({
      query: ({ search, skip, limit }) => `search?q=${search}&skip=${skip}&limit=${limit}`,
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
    getProductById: builder.query<Product, string>({ query: (id: string) => `${id}` }),
  }),
});

export const { useGetProductsWithFilterQuery, useGetProductByIdQuery } = productsApi;
