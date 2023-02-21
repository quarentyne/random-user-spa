import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUsers } from "./actionCreators";
import { IServerResponse, IUsersState } from "./models";

const initialState: IUsersState = {
  users: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers:{},
  extraReducers: builder => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action: PayloadAction<IServerResponse>) => {
      state.isLoading = false;
      state.users = [...state.users, ...action.payload.results];
    });
  },
});

export default usersSlice.reducer;