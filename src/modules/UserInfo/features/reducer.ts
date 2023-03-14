import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserInfoState, sliceName } from "./models";

const initialState: IUserInfoState = {
  user: null,
};

const userInfoSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;