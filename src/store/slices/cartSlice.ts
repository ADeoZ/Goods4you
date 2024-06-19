import { CartList } from "@/models";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { cartApi } from "../api/cartApi";
import { RootState } from "../store";

const initialState: { data: CartList; isLoading: boolean; error?: FetchBaseQueryError } = {
  data: { id: "", products: [], totalQuantity: 0, total: 0, discountedTotal: 0 },
  isLoading: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<string>) => {
      console.log("add", payload);
    },
    decreaseQuantity: (state, { payload }: PayloadAction<string>) => {
      console.log("decrease", payload);
    },
    increaseQuantity: (state, { payload }: PayloadAction<string>) => {
      console.log("increase", payload);
    },
    deleteItem: (state, { payload }: PayloadAction<string>) => {
      console.log("delete", payload);
    },
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(cartApi.endpoints.getCartsByUser.matchPending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(cartApi.endpoints.getCartsByUser.matchRejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addMatcher(cartApi.endpoints.getCartsByUser.matchFulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload;
      }),
});

export const getCart = (state: RootState) => state.cart;
export const getProducts = (state: RootState) => state.cart.data.products;

export const { addItem, decreaseQuantity, increaseQuantity, deleteItem } = cartSlice.actions;
