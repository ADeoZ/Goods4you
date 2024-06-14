import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { cartApi } from "./api/cartApi";
import { productsApi } from "./api/productsApi";
import cartReducer from "./slices/cartSlice";
import faqReducer from "./slices/faqSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    faq: faqReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, cartApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = useSelector.withTypes<RootState>();
