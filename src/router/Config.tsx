// import { useRoutes } from 'react-router-dom';
import { Navigate, Route, Routes } from 'react-router-dom';
import { loginStatusSelector } from '../modules/Login/features/selector';
import { routes, ROUTES_PATHS } from '../shared/constants/routes';
import { useAppSelector } from '../shared/hooks/useAppSelector';
import { Layout } from '../shared/Layout/Layout';

export const RouterConfig = () => {
  const {isAuthorized} = useAppSelector(loginStatusSelector);

  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({path, element, isProtected}, key) => <Route 
          path={path} 
          element={isProtected 
            ? isAuthorized ? element : <Navigate to={ROUTES_PATHS.LOGOUT} replace /> 
            : element} 
          key={key} />)}
      </Route>
    </Routes>
  );
};