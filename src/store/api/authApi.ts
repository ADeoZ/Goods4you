import { Login, User } from "@/models";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithFreshToken } from "./utils/baseQuery";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithFreshToken,
  endpoints: (builder) => ({
    login: builder.mutation<User, Login>({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
    }),
    getCurrentUser: builder.query<Omit<User, "token">, void>({
      query: () => `me`,
    }),
  }),
});

export const { useLoginMutation, useLazyGetCurrentUserQuery } = authApi;
