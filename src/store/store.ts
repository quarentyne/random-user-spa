import { configureStore } from '@reduxjs/toolkit'
import usersSlice from "../modules/Users/features/usersSlice";
import userInfoSlice from "../modules/UserInfo/features/userInfoSlice";
import loginStatusSlice from "../modules/Login/features/loginStatusSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    userInfo: userInfoSlice,
    loginStatus: loginStatusSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
