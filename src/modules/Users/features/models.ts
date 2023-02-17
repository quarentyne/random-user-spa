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
    city: string;
    state: string;
    country: string;
  };
};

export interface IUsersState {
  users: IUser[];
  isLoading: boolean;
  error: string | null;
};

export interface IServerResponse {
  results: IUser[];
  error?: string;
};