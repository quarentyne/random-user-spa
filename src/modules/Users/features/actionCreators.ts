import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API_URL } from "../../../api/constants";
import { httpGet, TFormatResponse } from "../../../shared/helpers/httpClient";
import { IGetUsersParams, USERS_SLICE_NAME } from "./models";

export const getUsers = createAsyncThunk(
  `${USERS_SLICE_NAME}/getUsers`,
  async function ({requiredAmount, page}: IGetUsersParams) {
    const response: TFormatResponse = await httpGet(BASE_API_URL, {results: requiredAmount, page}); 
    return response.data;
  }
);