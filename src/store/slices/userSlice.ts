import { User } from "@/models";
import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../api";
import { STORAGE_KEY_TOKEN, removeFromLocalStorage, saveToLocalStorage } from "../utils/localStorageWorkers";
import { RootState } from "..";

const initialState: User & { isAuth: boolean } = {
  id: "",
  token: "",
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => {
      console.log("logout");
      removeFromLocalStorage(STORAGE_KEY_TOKEN);
      return initialState;
    },
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
        state.id = payload.id;
        state.token = payload.token;
        state.isAuth = true;
        saveToLocalStorage(STORAGE_KEY_TOKEN, payload.token);
      })
      .addMatcher(authApi.endpoints.getCurrentUser.matchFulfilled, (state, { payload }) => {
        state.id = payload.id;
        state.isAuth = true;
      }),
});

export const getUser = (state: RootState) => state.user;

export const { logout } = userSlice.actions;
