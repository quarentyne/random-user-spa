import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { LanguageChanger } from "../../shared/components/LanguageChanger/LanguageChanger";
import {  StyledLogButton, StyledLoginBlock, StyledLoginLanguageBlock, StyledLoginWrapper } from "./styles";

export const Login = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();

  useEffect(()=>{
    if(sessionStorage.getItem("login") === "true"){
      navigate("/home", {replace: true});
    };
  }, [navigate]); 

  const login = () => {
    sessionStorage.setItem("login", "true");
    navigate("/home", {replace: true});
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