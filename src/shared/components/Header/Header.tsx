import {
  StyledBurgerButton,
  StyledBurgerImage,
  StyledHeader,
  StyledLogoImage,
  StyledLogoWrapper,
} from "./styles";
import logo from "../../../assets/svg/logo.svg";
import burgerButton from "../../../assets/svg/burger-menu.svg";

interface IMenuToggler {
  onBurgerClick: () => void;
}

export const Header = ({ onBurgerClick }: IMenuToggler) => {
  return (
    <StyledHeader>
      <StyledLogoWrapper>
        <StyledLogoImage alt="logotype" src={logo} />
      </StyledLogoWrapper>
      <StyledBurgerButton>
        <StyledBurgerImage
          alt="burger button"
          src={burgerButton}
          onClick={onBurgerClick}
        />
      </StyledBurgerButton>
    </StyledHeader>
  );
};
