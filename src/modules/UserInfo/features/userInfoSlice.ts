import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserInfoState, USER_INFO_SLICE_NAME } from "./models";

const initialState: IUserInfoState = {
  user: null,
};

const userInfoSlice = createSlice({
  name: USER_INFO_SLICE_NAME,
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;