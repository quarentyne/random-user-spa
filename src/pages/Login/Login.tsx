import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { authorize } from "../../modules/Login/features/loginStatusSlice";
import { loginStatusSelector } from "../../modules/Login/features/selector";
import { ROUTES_PATHS } from "../../shared/constants/routes";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { StyledLogButton, StyledLogBlock } from "./styles";

export const Login = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const {isAuthorized} = useAppSelector(loginStatusSelector);

  const handleAuthorize = () => {
    dispatch(authorize());
    localStorage.setItem("login", isAuthorized ? "true" : "");
    if(!isAuthorized){
      navigate(ROUTES_PATHS.HOME, {replace: true});
    };
  };

  return(
    <StyledLogBlock>
      <StyledLogButton type="submit" onClick={handleAuthorize}>{t(`sideMenu.${isAuthorized ? "logout" : "login"}`)}</StyledLogButton>
    </StyledLogBlock>
  );
};