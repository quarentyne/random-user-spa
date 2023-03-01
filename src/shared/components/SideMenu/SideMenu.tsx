import { useState } from "react";
import { StyledBurgerCloseButton, StyledBurgerOpenButton, StyledSideMenuHeader, StyledSideMenuWrapper } from "./styles";
import logo from "../../../assets/svg/logo.svg";
import closeButton from "../../../assets/svg/close.svg";
import burgerButton from "../../../assets/svg/burger-menu.svg";
import { LanguageChanger } from "../LanguageChanger/LanguageChanger";
import { NavigationList } from "../NavigationList/NavigationList";

export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideMenu = () => setIsOpen(!isOpen);

  return(
    <>
      <StyledSideMenuWrapper isOpen={isOpen}>
        <StyledSideMenuHeader>
          <img src={logo} alt="logo" width="75px"/>
          <StyledBurgerCloseButton onClick={toggleSideMenu} src={closeButton} alt="close" width="35px"/>
        </StyledSideMenuHeader>
        <NavigationList />
        <LanguageChanger />
      </StyledSideMenuWrapper>
      <StyledBurgerOpenButton isOpen={isOpen} onClick={toggleSideMenu} src={burgerButton} alt="open side menu" width="35px"/>
    </>
  );
};