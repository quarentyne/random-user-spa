import { createSlice } from "@reduxjs/toolkit";
import { ILoginStatus } from "./models";

const initialState: ILoginStatus = {
  isAuthorized: localStorage.getItem("login") ? true : false,
};

const loginStatusSlice = createSlice({
  name: "loginStatus",
  initialState,
  reducers: {
    authorize: (state) => {
      state.isAuthorized = !state.isAuthorized
    },
  },
});

export const { authorize } = loginStatusSlice.actions;
export default loginStatusSlice.reducer;