import { configureStore } from '@reduxjs/toolkit'
import  loginStatusSlice  from '../modules/LoginStatus/features/reducer';

export const store = configureStore({
  reducer: {
    loginStatus: loginStatusSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;