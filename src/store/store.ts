import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import { cartApi } from "./api/cartApi";
import faqReducer from "./slices/faqSlice";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    faq: faqReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, cartApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = useSelector.withTypes<RootState>();
