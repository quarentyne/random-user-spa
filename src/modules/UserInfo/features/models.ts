interface IUserLocation {
  street: {
    number: number;
    name: string;
  };
  state: string,
  city: string;
  country: string;
};

export interface IUserInfo {
  fullName: string;
  avatar: string;
  birthDate: string;
  sex: string;
  address: IUserLocation;
  phoneNumber: string;
  registrationDate: string;
};

interface IUserInfoState {
  user: IUserInfo | null;
};

export const initialState: IUserInfoState = {
  user: null,
};

export const USER_INFO_SLICE_NAME = "userInfo";