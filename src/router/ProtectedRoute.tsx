import { Navigate, Outlet } from "react-router-dom";
import { loginStatusSelector } from "../modules/Login/features/selector";
import { ROUTES_PATHS } from "../shared/constants/routes";
import { useAppSelector } from "../shared/hooks/useAppSelector";

export const ProtectedRoute = () => {
  const {isAuthorized} = useAppSelector(loginStatusSelector);
  if(!isAuthorized){
    return <Navigate to={ROUTES_PATHS.LOGIN} replace />;
  };

  return <Outlet />;
};