// import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { StyledHomeContainer } from "./styles";
import worldMap from "../../assets/img/worldMap.png";
// import { useAppSelector } from "../../shared/hooks/useAppSelector";
// import { loginStatusSelector } from "../../modules/Login/features/selector";
// import { ROUTES_PATHS } from "../../shared/constants/routes";

export const Home = () => {
  const {t} = useTranslation();
  // const { isAuthorized } = useAppSelector(loginStatusSelector);
  
  // if(!isAuthorized){
  //   return <Navigate to={ROUTES_PATHS.LOGIN} replace/>
  // };

  return(
    <StyledHomeContainer>
      <p>{t(`home.welcome`)}</p>
      <img src={worldMap} alt="AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IN, IR, MX, NL, NO, NZ, RS, TR, UA, US"/>
      <p>{t(`home.about`)}</p>
      <p>{t(`home.howToUse`)}</p>
    </StyledHomeContainer>
  );
};