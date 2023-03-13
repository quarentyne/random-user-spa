import { Navigate, Outlet } from "react-router-dom";
import { loginStatusSelector } from "../modules/Login/features/selector";
import { useAppSelector } from "../shared/hooks/useAppSelector";

export const ProtectedRoute = () => {
  const {isAuthorized} = useAppSelector(loginStatusSelector);
  if(!isAuthorized){
    return <Navigate to="/login" replace />;
  };

  return <Outlet />;
};