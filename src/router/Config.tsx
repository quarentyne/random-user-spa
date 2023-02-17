import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Login } from '../pages/Logs/Login';
import { Logout } from '../pages/Logs/Logout';
import { Layout } from '../shared/Layout/Layout';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />}/>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path='home' element={<Home />}/>
      </Route>
    </Routes>
  );
};