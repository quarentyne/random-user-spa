import React from "react";
import { useTranslation } from "react-i18next";
import { StyledNavigationItem, StyledNavigationLink, StyledNavigationList } from "./styles";
import home from "../../../assets/svg/home.svg";
import user from "../../../assets/svg/user.svg";
import users from "../../../assets/svg/users.svg";
import logout from "../../../assets/svg/logout.svg";

export const NavigationList = () => {
  const {t} = useTranslation();
  
  return(
    <StyledNavigationList>
      <StyledNavigationItem>
        <StyledNavigationLink to="/home">
          <img src={home} alt="home" width="30px"/>
          <span>
            {t(`sideMenu.home`)}
          </span>          
        </StyledNavigationLink>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <StyledNavigationLink to="/users">
          <img src={users} alt="users" width="30px"/>
          <span>
            {t(`sideMenu.users`)}
          </span>          
        </StyledNavigationLink>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <StyledNavigationLink to="/user-info">
          <img src={user} alt="user" width="30px"/>
          <span>
            {t(`sideMenu.userInfo`)}
          </span>          
        </StyledNavigationLink>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <StyledNavigationLink to="/logout">
          <img src={logout} alt="logout" width="30px"/>
          <span>
            {t(`sideMenu.logout`)}
          </span>
        </StyledNavigationLink>
      </StyledNavigationItem>
    </StyledNavigationList>
  );
};