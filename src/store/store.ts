import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { authApi, productsApi, cartApi } from "./api";
import { STORAGE_KEY_TOKEN, loadFromLocalStorage } from "./utils/localStorageWorkers";
import { userSlice, faqSlice } from "./slices";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [userSlice.name]: userSlice.reducer,
    [faqSlice.name]: faqSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, productsApi.middleware, cartApi.middleware),
  preloadedState: {
    user: { ...userSlice.getInitialState(), token: loadFromLocalStorage(STORAGE_KEY_TOKEN) },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = useSelector.withTypes<RootState>();
