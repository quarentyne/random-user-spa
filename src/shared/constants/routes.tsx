// import { ReactNode } from 'react';
import { RouteObject } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { Login } from '../../pages/Logs/Login';
import { Logout } from '../../pages/Logs/Logout';
import { Notfound } from '../../pages/Notfound/Notfound';
import { UserInformation } from '../../pages/UserInformation/UserInformation';
import { Users } from '../../pages/Users/Users';
import { ProtectedRoute } from '../../router/ProtectedRoute';
import { Layout } from '../Layout/Layout';

export enum ROUTES_PATHS {
  BASE = "/",
  HOME = "/home",
  USERS = "/users",
  USER_INFO = "/user-info",
  LOGIN = "/login",
  LOGOUT = "logout",
  NOT_FOUND = "*",
};

export const routerConfig: RouteObject[] = [
  {
    path: ROUTES_PATHS.NOT_FOUND,
    element: <Notfound />
  },
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES_PATHS.LOGIN,
        element: <Login />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: ROUTES_PATHS.HOME,
            element: <Home />,
          },
          {
            path: ROUTES_PATHS.USERS,
            element: <Users />
          },
          {
            path: ROUTES_PATHS.USER_INFO,
            element: <UserInformation />
          },
          {
            path: ROUTES_PATHS.LOGOUT,
            element: <Logout />,
          },
        ],
      },
    ],
  },  
];
