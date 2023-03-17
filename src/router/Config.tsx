import { Route, Routes } from 'react-router-dom';
import { routes} from '../shared/constants/routes';
import { Layout } from '../shared/Layout/Layout';

export const RouterConfig = () => {
  return (    
    <Routes>      
      <Route element={<Layout />}>
        {routes.map(({path, component}, key) => <Route 
          path={path} 
          element={component}
          key={key} />)}
      </Route>
    </Routes>
  );
};