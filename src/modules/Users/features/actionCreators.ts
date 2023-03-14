import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API_URL } from "../../../api/constants";
import { httpGet, TFormatResponse } from "../../../shared/helpers/httpClient";
import { IGetUsersParams, sliceName, actionsTypes } from "./models";

export const getUsers = createAsyncThunk(
  `${sliceName}${actionsTypes.GET_USERS}`,
  async function ({requiredAmount, page}: IGetUsersParams) {
    const response: TFormatResponse = await httpGet(BASE_API_URL, {results: requiredAmount, page}); 
    return response.data;
  }
);