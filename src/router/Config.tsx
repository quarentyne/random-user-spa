import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Login } from '../pages/Login/Login';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />}/>
      <Route path="login" element={<Login />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
};