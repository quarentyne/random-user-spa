import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, LOGIN_STATUS_SLICE_NAME } from "./models";

const loginStatusSlice = createSlice({
  name: LOGIN_STATUS_SLICE_NAME,
  initialState,
  reducers: {
    checkAuthorizationStatus: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        state.isAuthorized = true;
      }
    },
    authorize: (state) => {
      state.isAuthorized = !state.isAuthorized;
    },
  },
});

export const { authorize, checkAuthorizationStatus } = loginStatusSlice.actions;
export default loginStatusSlice.reducer;
