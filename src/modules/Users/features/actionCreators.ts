import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApiError } from "../../../api/constants";
import { UsersAPI } from "../../../api/UsersAPI";
import { IGetUsersParamsDTO, IGetUsersResponse, USERS_SLICE_NAME } from "./models";

export const getUsers = createAsyncThunk<IGetUsersResponse, IGetUsersParamsDTO, {serializedErrorType: IApiError}>(
  `${USERS_SLICE_NAME}/getUsers`,
  async function (data: IGetUsersParamsDTO) {
    const response = await UsersAPI.getUsers(data);
    return response.data;
  }
);
