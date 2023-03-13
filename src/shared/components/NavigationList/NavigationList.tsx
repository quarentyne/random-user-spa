import React from "react";
import { useTranslation } from "react-i18next";
import { StyledNavigationItem, StyledNavigationLink, StyledNavigationList } from "./styles";
import home from "../../../assets/svg/home.svg";
import user from "../../../assets/svg/user.svg";
import users from "../../../assets/svg/users.svg";
import logout from "../../../assets/svg/logout.svg";
import { ROUTES_PATHS } from "../../constants/routes";

export const NavigationList = () => {
  const {t} = useTranslation();
  
  return(
    <StyledNavigationList>
      <StyledNavigationItem>
        <StyledNavigationLink to={ROUTES_PATHS.HOME}>
          <img src={home} alt="home" width="30px"/>
          <span>
            {t(`sideMenu.home`)}
          </span>          
        </StyledNavigationLink>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <StyledNavigationLink to={ROUTES_PATHS.USERS}>
          <img src={users} alt="users" width="30px"/>
          <span>
            {t(`sideMenu.users`)}
          </span>          
        </StyledNavigationLink>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <StyledNavigationLink to={ROUTES_PATHS.USER_INFO}>
          <img src={user} alt="user" width="30px"/>
          <span>
            {t(`sideMenu.userInfo`)}
          </span>          
        </StyledNavigationLink>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <StyledNavigationLink to={ROUTES_PATHS.LOGOUT}>
          <img src={logout} alt="logout" width="30px"/>
          <span>
            {t(`sideMenu.logout`)}
          </span>
        </StyledNavigationLink>
      </StyledNavigationItem>
    </StyledNavigationList>
  );
};