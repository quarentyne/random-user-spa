interface ILoginStatusState {
  isAuthorized: boolean | null;
}

export const initialState: ILoginStatusState = {
  isAuthorized: null,
};

export const LOGIN_STATUS_SLICE_NAME = "loginStatus";
