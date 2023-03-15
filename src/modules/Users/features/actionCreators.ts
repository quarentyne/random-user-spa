import { createAsyncThunk } from "@reduxjs/toolkit";
import { UsersAPI } from "../../../api/UsersAPI";
import { IGetUsersParamsDTO, IGetUsersResponse, USERS_SLICE_NAME } from "./models";

export const getUsers = createAsyncThunk<IGetUsersResponse, IGetUsersParamsDTO>(
  `${USERS_SLICE_NAME}/getUsers`,
  async function (data: IGetUsersParamsDTO) {
    const response = await UsersAPI.getUsers({...data});
    return response.data;
  }
);