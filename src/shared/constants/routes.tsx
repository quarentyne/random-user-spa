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
  element: React.ReactNode;
  isProtected: boolean;
}

export const routes: IRoute[] = [
  {
    path: ROUTES_PATHS.BASE,
    isProtected: false,
    element: <Navigate to={ROUTES_PATHS.HOME} replace/>,
  },
  {
    path: ROUTES_PATHS.NOT_FOUND,
    element: <Notfound />,
    isProtected: false,
  },
  {
    path: ROUTES_PATHS.HOME,
    element: <Home />,
    isProtected: true,
  },
  {
    path: ROUTES_PATHS.USERS,
    element: <Users />,
    isProtected: true,
  },
  {
    path: ROUTES_PATHS.USER_INFO,
    element: <UserInformation />,
    isProtected: true,
  },
  {
    path: ROUTES_PATHS.LOGIN,
    element: <Login />,
    isProtected: false,
  },
];