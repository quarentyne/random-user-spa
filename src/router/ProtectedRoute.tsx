import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const isAuthorized = sessionStorage.getItem("login");
  if(isAuthorized === "false" || !isAuthorized){
    return <Navigate to="/login" replace />;
  };

  return <Outlet />;
};