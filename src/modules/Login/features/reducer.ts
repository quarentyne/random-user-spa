import { createSlice } from "@reduxjs/toolkit";
import { ILoginStatus, sliceName } from "./models";

const initialState: ILoginStatus = {
  isAuthorized: localStorage.getItem("login") ? true : false,
};

const loginStatusSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    authorize: (state) => {
      state.isAuthorized = !state.isAuthorized;
      localStorage.setItem("login", state.isAuthorized ? "true" : "");
    },
  },
});

export const { authorize } = loginStatusSlice.actions;
export default loginStatusSlice.reducer;