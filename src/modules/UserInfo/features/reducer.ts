import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserInfoState } from "./models";

const initialState: IUserInfoState = {
  user: null,
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    removeUserInfo: (state) => {
      state.user = null;
    },
  },
});

export const { setUserInfo, removeUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;