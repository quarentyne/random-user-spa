import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { SideMenu } from "../components/SideMenu/SideMenu";
import { StyledLayoutContainer } from "./styles";

export const Layout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleSideMenuVisibility = () => setIsVisible(!isVisible);

  return(
    <>
      <Header onBurgerClick={toggleSideMenuVisibility}/>
      <SideMenu isVisible={isVisible}/>
      <StyledLayoutContainer>
        <Outlet />
      </StyledLayoutContainer>
    </>
  );
};