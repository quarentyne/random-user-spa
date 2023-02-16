import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IServerResponseSuccess, IUsersState } from "./models";

const initialState: IUsersState = {
  users: [],
  isLoading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state) => {
      state.isLoading = true;
    },
    setUsers: (state, action: PayloadAction<IServerResponseSuccess>) => {
      state.isLoading = false;
      state.users = [...state.users, ...action.payload.results];
    },
  },
});

export const {getUsers, setUsers} = usersSlice.actions;
export default usersSlice.reducer;