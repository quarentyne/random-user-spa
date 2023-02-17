import { Route, Routes, 
  // Navigate 
} from 'react-router-dom';
import { Layout } from '../shared/Layout/Layout';
// import { Home } from '../pages/Home/Home';
// import { Login } from '../pages/Login/Login';

export const RouterConfig = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate replace to="/login" />}/>
      <Route path="login" element={<Login />} />
      <Route path="home" element={<Home />} /> */}
      <Route path="/" element={<Layout />}/>
    </Routes>
  );
};