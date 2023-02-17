import { StyledSideMenuWrapper } from "./styles";
import logo from "../../../assets/svg/logo.svg";
import { LanguageChanger } from "../LanguageChanger/LanguageChanger";
import { NavigationList } from "../NavigationList/NavigationList";

export const SideMenu = () => {
  return(
    <StyledSideMenuWrapper>
      <img src={logo} alt="logo" width="75px"/>
      <NavigationList />
      <LanguageChanger />
    </StyledSideMenuWrapper>
  );
};