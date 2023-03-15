import { AxiosResponse } from "axios";
import { IGetUsersParamsDTO, IGetUsersResponse } from "../modules/Users/features/models";
import { httpGet } from "../shared/helpers/httpClient";
import { BASE_API_URL } from "./constants";

export class UsersAPI {
  static getUsers({requiredAmount, page}: IGetUsersParamsDTO): Promise<AxiosResponse<IGetUsersResponse>> {
    return httpGet<IGetUsersResponse>(BASE_API_URL, {results: requiredAmount, page});
  };
};