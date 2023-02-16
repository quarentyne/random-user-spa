import { configureStore } from '@reduxjs/toolkit'
import  loginStatusSlice  from '../modules/LoginStatus/features/reducer';
import usersSlice from "../modules/Users/features/reducer";

export const store = configureStore({
  reducer: {
    loginStatus: loginStatusSlice,
    users: usersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;