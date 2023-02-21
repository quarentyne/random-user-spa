import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API_URL } from "../../../api/constants";
import { httpGet, TFormatResponse } from "../../../shared/helpers/httpClient";

interface IGetUsersParams{
  amount: number,
  page: number,
};

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async function ({amount, page}: IGetUsersParams) {
    const response: TFormatResponse = await httpGet(BASE_API_URL, {results: amount, page}); 
    return response.data;
  }
);