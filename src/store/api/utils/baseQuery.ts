import { logout } from "@/store/slices/userSlice";
import { STORAGE_KEY_TOKEN, loadFromLocalStorage } from "@/store/utils/localStorageWorkers";
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseQueryWithToken = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers) => {
    const token = loadFromLocalStorage(STORAGE_KEY_TOKEN);
    if (token) headers.set("Authorization", `Bearer ${token}`);

    return headers;
  },
});

export const baseQueryWithFreshToken: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  const result = await baseQueryWithToken(args, api, extraOptions);
  if (result.error && (result.error.status === 401 || result.error.status === 403)) {
    api.dispatch(logout());
  }
  return result;
};
