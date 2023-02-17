import { Navigate } from "react-router-dom";
import { loginStatusSelector } from "../../modules/LoginStatus/features/selector";
import { useAppSelector } from "../../shared/hooks/useAppSelector";


export const Home = () => {
  const {isAuthorized} = useAppSelector(loginStatusSelector);
  if(!isAuthorized){
    return <Navigate to="/login" replace />;
  }

  return(
    <div>Home Page</div>
  );
};