interface ILoginStatusState {
  isAuthorized: boolean;
};

export const initialState: ILoginStatusState = {
  isAuthorized: localStorage.getItem("login") ? true : false,
};

export const LOGIN_STATUS_SLICE_NAME = "loginStatus";