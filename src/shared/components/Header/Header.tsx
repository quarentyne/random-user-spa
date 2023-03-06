import { StyledBurgerButton, StyledHeader, StyledLogoWrapper } from "./styles";
import logo from "../../../assets/svg/logo.svg"
import burgerButton from "../../../assets/svg/burger-menu.svg";

interface IMenuToggler{
  onBurgerClick: () => void;
};

export const Header = ({onBurgerClick}: IMenuToggler) => {
  return(
    <StyledHeader>
      <StyledLogoWrapper>
        <img alt="logotype" src={logo} width="75px"/>
      </StyledLogoWrapper>
      <StyledBurgerButton>
        <img alt="burger button" src={burgerButton} width="35px" onClick={onBurgerClick}/>
      </StyledBurgerButton>
    </StyledHeader>
  );
};