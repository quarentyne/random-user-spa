import { configureStore } from '@reduxjs/toolkit'
import  loginStatusSlice  from '../modules/LoginStatus/features/reducer';
import usersSlice from "../modules/Users/features/reducer";
import userInfoSlice from "../modules/UserInfo/features/reducer";

export const store = configureStore({
  reducer: {
    loginStatus: loginStatusSlice,
    users: usersSlice,
    userInfo: userInfoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;