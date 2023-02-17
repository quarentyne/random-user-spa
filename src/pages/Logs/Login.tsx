import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { authorize } from "../../modules/LoginStatus/features/reducer";
import { loginStatusSelector } from "../../modules/LoginStatus/features/selector";
import { LanguageChanger } from "../../shared/components/LanguageChanger/LanguageChanger";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import {  StyledLogButton, StyledLoginBlock, StyledLoginLanguageBlock } from "./styles";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {isAuthorized} = useAppSelector(loginStatusSelector);
  const {t} = useTranslation();

  if(isAuthorized){
    navigate("/home", {replace: true});
  };

  const login = () => {
    dispatch(authorize());
    navigate("/home", {replace: true});
  };

  return(
    <StyledLoginBlock>
      <StyledLogButton type="submit" onClick={login}>{t(`sideMenu.login`)}</StyledLogButton>
      <StyledLoginLanguageBlock>
        <LanguageChanger />
      </StyledLoginLanguageBlock>
    </StyledLoginBlock>
  );
};