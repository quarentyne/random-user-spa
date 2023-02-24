import { Route, Routes, Navigate } from 'react-router-dom';
import { loginStatusSelector } from '../modules/LoginStatus/features/selector';
import { Home } from '../pages/Home/Home';
import { Login } from '../pages/Logs/Login';
import { Logout } from '../pages/Logs/Logout';
import { UserInfo } from '../pages/UserInfo/UserInfo';
import { Users } from '../pages/Users/Users';
import { useAppSelector } from '../shared/hooks/useAppSelector';
import { Layout } from '../shared/Layout/Layout';

export const RouterConfig = () => {
  const {isAuthorized} = useAppSelector(loginStatusSelector);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={isAuthorized ? <Layout /> : <Navigate replace to="/login" />}>
        <Route path="logout" element={<Logout />} />
        <Route path='home' element={<Home />}/>
        <Route path='users' element={<Users />}/>
        <Route path='user-info' element={<UserInfo />}/>
      </Route>
    </Routes>
  );
};