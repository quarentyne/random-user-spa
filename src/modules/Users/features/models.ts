export interface IUser {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  gender: string;
  dob: {
    date: string;
  };
  registered: { 
    date: string;
  };
  phone: string;
  location: {
    street: {
      number: number;
      name: string;
    };
    state: string,
    city: string;
    country: string;
  };
  login:{
    username: string;
  };
};

export interface IUsersState {
  users: IUser[];
  isLoading: boolean;
};

export interface IServerResponse {
  results: IUser[];
};