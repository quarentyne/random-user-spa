import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, IUserInfo, USER_INFO_SLICE_NAME } from "./models";

const userInfoSlice = createSlice({
  name: USER_INFO_SLICE_NAME,
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<IUserInfo>) => {
      state.user = action.payload;
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;