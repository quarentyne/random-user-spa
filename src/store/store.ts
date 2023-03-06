import { configureStore } from '@reduxjs/toolkit'
import usersSlice from "../modules/Users/features/reducer";
import userInfoSlice from "../modules/UserInfo/features/reducer";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    userInfo: userInfoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;