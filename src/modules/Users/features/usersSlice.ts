import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUsers } from "./actionCreators";
import { IGetUsersResponse, USERS_SLICE_NAME, initialState } from "./models";

const usersSlice = createSlice({
  name: USERS_SLICE_NAME,
  initialState,
  reducers:{},
  extraReducers: builder => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;      
      state.error = null;
    });
    builder.addCase(getUsers.fulfilled, (state, action: PayloadAction<IGetUsersResponse>) => {
      state.isLoading = false;
      state.users = [...state.users, ...action.payload.results];
      state.currentPage = state.currentPage + 1;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;   
      state.error = action.error.message;
    })
  },
});

export default usersSlice.reducer;