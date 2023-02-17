import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IServerResponse, IUsersState } from "./models";

const initialState: IUsersState = {
  users: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state) => {
      state.isLoading = true;
    },
    setUsers: (state, action: PayloadAction<IServerResponse>) => {
      state.isLoading = false;
      state.error = action.payload.error ? action.payload.error : null;
      state.users = [...state.users, ...action.payload.results];
    },
  },
});

export const {getUsers, setUsers} = usersSlice.actions;
export default usersSlice.reducer;