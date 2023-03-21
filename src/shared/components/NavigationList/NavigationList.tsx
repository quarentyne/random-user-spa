import React from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  StyledLinkImage,
  StyledNavigationItem,
  StyledNavigationLink,
  StyledNavigationList,
} from "./styles";
import home from "../../../assets/svg/home.svg";
import user from "../../../assets/svg/user.svg";
import users from "../../../assets/svg/users.svg";
import logout from "../../../assets/svg/logout.svg";
import { ROUTES_PATHS } from "../../constants/routes";
import { useAppSelector } from "../../hooks/useAppSelector";
import { loginStatusSelector } from "../../../modules/Login/features/selector";
import { authorize } from "../../../modules/Login/features/loginStatusSlice";

export const NavigationList = () => {
  const { t } = useTranslation();
  const { isAuthorized } = useAppSelector(loginStatusSelector);
  const dispatch = useDispatch();

  const handleAuthorize = () => {
    dispatch(authorize());
    localStorage.setItem("login", "");
  };

  return (
    <StyledNavigationList isAuthorized={isAuthorized}>
      <StyledNavigationItem>
        <StyledNavigationLink to={ROUTES_PATHS.HOME}>
          <StyledLinkImage src={home} alt="home" />
          <span>{t(`sideMenu.home`)}</span>
        </StyledNavigationLink>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <StyledNavigationLink to={ROUTES_PATHS.USERS}>
          <StyledLinkImage src={users} alt="users" />
          <span>{t(`sideMenu.users`)}</span>
        </StyledNavigationLink>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <StyledNavigationLink to={ROUTES_PATHS.USER_INFO}>
          <StyledLinkImage src={user} alt="user" />
          <span>{t(`sideMenu.userInfo`)}</span>
        </StyledNavigationLink>
      </StyledNavigationItem>
      <StyledNavigationItem onClick={isAuthorized ? handleAuthorize : () => {}}>
        <StyledNavigationLink to={ROUTES_PATHS.LOGIN}>
          <StyledLinkImage src={logout} alt="logout" />
          <span>
            {t(`${isAuthorized ? "sideMenu.logout" : "sideMenu.login"}`)}
          </span>
        </StyledNavigationLink>
      </StyledNavigationItem>
    </StyledNavigationList>
  );
};
