import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Login } from '../pages/Logs/Login';
import { Logout } from '../pages/Logs/Logout';
import { Notfound } from '../pages/Notfound/Notfound';
import { UserInformation } from '../pages/UserInformation/UserInformation';
import { Users } from '../pages/Users/Users';
import { Layout } from '../shared/Layout/Layout';
import { ProtectedRoute } from './ProtectedRoute';

export const RouterConfig = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" replace />}/>
      <Route element={<Layout /> }>
        <Route path="login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="logout" element={<Logout />} />
          <Route path='home' element={<Home />}/>
          <Route path='users' element={<Users />}/>
          <Route path='user-info' element={<UserInformation />}/>
        </Route>        
      </Route>
      <Route path="*" element={<Notfound />}/>
    </Routes>
  );
};