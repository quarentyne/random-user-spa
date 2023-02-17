import React from "react";
import { useTranslation } from "react-i18next";
import { loginStatusSelector } from "../../../modules/LoginStatus/features/selector";
import { useAppSelector } from "../../hooks/useAppSelector";
import { StyledNavigationLink, StyledNavigationList } from "./styles";

export const NavigationList = () => {
  const {t} = useTranslation();
  const {isAuthorized} = useAppSelector(loginStatusSelector);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if(!isAuthorized){
      e.preventDefault();
    }
  }
  return(
    <StyledNavigationList>
      <StyledNavigationLink onClick={handleClick} to="/home">
        {t(`sideMenu.home`)}
      </StyledNavigationLink>
      <StyledNavigationLink onClick={handleClick} to="/users">
        {t(`sideMenu.users`)}
      </StyledNavigationLink>
      <StyledNavigationLink onClick={handleClick} to="/user-info">
        {t(`sideMenu.userInfo`)}
      </StyledNavigationLink>
      <StyledNavigationLink onClick={handleClick} to="/logout">
        {t(`sideMenu.logout`)}
      </StyledNavigationLink>
    </StyledNavigationList>
  );
};