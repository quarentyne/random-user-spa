interface IUserLocation {
  street: {
    number: number;
    name: string;
  };
  state: string,
  city: string;
  country: string;
};

interface IUserPicture {
  large: string;
  medium: string;
  thumbnail: string;
};

export interface IUser {
  name: {
    first: string;
    last: string;
  };
  picture: IUserPicture;
  gender: string;
  dob: {
    date: string;
  };
  registered: { 
    date: string;
  };
  phone: string;
  location: IUserLocation;
  login:{
    username: string;
  };
};

interface IUsersState {
  users: IUser[];
  isLoading: boolean;
  currentPage: number;
  error: string | null;
};

export const initialState: IUsersState = {
  users: [],
  isLoading: false,
  currentPage: 1,
  error: null,
};

export interface IGetUsersResponse {
  results: IUser[];
};

export interface IGetUsersParamsDTO{
  requiredAmount: number,
  page: number,
};

export const USERS_SLICE_NAME = "users";