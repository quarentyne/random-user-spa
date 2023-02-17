import { StyledSideMenuWrapper } from "./styles";
import logo from "../../../assets/svg/logo.svg";
import { LanguageChanger } from "../LanguageChanger/LanguageChanger";

export const SideMenu = () => {
  return(
    <StyledSideMenuWrapper>
      <img src={logo} alt="logo" width="75px"/>
      <p>menu</p>
      <LanguageChanger />
    </StyledSideMenuWrapper>
  );
};