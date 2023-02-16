import { BASE_API_URL } from "../../../api/constants";
import { httpGet, TFormatResponse } from "../../../shared/helpers/httpClient";
import { AppDispatch } from "../../../store/store";
import { getUsers, setUsers } from "./reducer";


export const fetchUsers = (amount: number, page?: number) => async (dispatch: AppDispatch) => {
  dispatch(getUsers());
  const response: TFormatResponse = await httpGet(BASE_API_URL, {results: amount, page});
  dispatch(setUsers(response.data));
}