import { LanguageChanger } from "../LanguageChanger/LanguageChanger";
import { NavigationList } from "../NavigationList/NavigationList";
import { StyledSideMenuWrapper } from "./styles";

interface ISideMenu{
  isVisible: boolean;
}

export const SideMenu = ({ isVisible }: ISideMenu) => {

  return(
    <StyledSideMenuWrapper isVisible={isVisible}>
      <NavigationList />
      <LanguageChanger />
    </StyledSideMenuWrapper>
  );
};