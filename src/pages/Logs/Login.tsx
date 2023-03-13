import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { authorize } from "../../modules/Login/features/reducer";
import { loginStatusSelector } from "../../modules/Login/features/selector";
import { LanguageChanger } from "../../shared/components/LanguageChanger/LanguageChanger";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import {  StyledLogButton, StyledLoginBlock, StyledLoginLanguageBlock, StyledLoginWrapper } from "./styles";

export const Login = () => {
  const navigate = useNavigate();
  const {isAuthorized} = useAppSelector(loginStatusSelector);
  const {t} = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(()=>{
    if(isAuthorized) {
      navigate("/home", {replace: true});
    };
  }, [isAuthorized, navigate]); 

  const login = () => {
    localStorage.setItem("login", "true");
    dispatch(authorize());
  };

  return(
    <StyledLoginWrapper>
      <StyledLoginBlock>
        <StyledLogButton type="submit" onClick={login}>{t(`sideMenu.login`)}</StyledLogButton>
        <StyledLoginLanguageBlock>
          <LanguageChanger />
        </StyledLoginLanguageBlock>
      </StyledLoginBlock>
    </StyledLoginWrapper>

  );
};