import { Navigate } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { Login } from '../../pages/Login/Login';
import { Notfound } from '../../pages/Notfound/Notfound';
import { UserInformation } from '../../pages/UserInformation/UserInformation';
import { Users } from '../../pages/Users/Users';

export enum ROUTES_PATHS {
  BASE = "/",
  HOME = "/home",
  USERS = "/users",
  USER_INFO = "/user-info",
  LOGIN = "/login",
  NOT_FOUND = "*",
};

interface IRoute {
  path: string;
  component: React.ReactNode;
};

export const routes: IRoute[] = [  
  {
    path: ROUTES_PATHS.HOME,
    component: <Home />,
  },
  {
    path: ROUTES_PATHS.USERS,
    component: <Users />,
  },
  {
    path: ROUTES_PATHS.USER_INFO,
    component: <UserInformation />,
  },
  {
    path: ROUTES_PATHS.LOGIN,
    component: <Login />,
  },
  {
    path: ROUTES_PATHS.BASE,
    component: <Navigate to={ROUTES_PATHS.HOME} replace/>,
  },
  {
    path: ROUTES_PATHS.NOT_FOUND,
    component: <Notfound />,
  },
];