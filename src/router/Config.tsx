import { Navigate, Route, Routes } from 'react-router-dom';
import { loginStatusSelector } from '../modules/Login/features/selector';
import { protectedRoutes, publicRoutes, ROUTES_PATHS } from '../shared/constants/routes';
import { useAppSelector } from '../shared/hooks/useAppSelector';
import { Layout } from '../shared/Layout/Layout';

export const RouterConfig = () => {
  const {isAuthorized} = useAppSelector(loginStatusSelector);

  return (    
    <Routes>
      <Route element={<Layout />}>
        {publicRoutes.map(({path, component}, key) => <Route 
        path={path} 
        element={component}
        key={key} />)}
        {protectedRoutes.map(({path, component}, key) => <Route 
        path={path} 
        element={isAuthorized 
            ? component 
            : <Navigate to={ROUTES_PATHS.LOGIN} replace/>
          }
        key={key} />)}
      </Route>
    </Routes>
  );
};