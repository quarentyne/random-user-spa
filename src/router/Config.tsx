import { useRoutes } from 'react-router-dom';
import { routerConfig } from '../shared/constants/routes';

export const RouterConfig = () => {
  const router = useRoutes(routerConfig);

  return (
    <>{router}</>  
  );
};