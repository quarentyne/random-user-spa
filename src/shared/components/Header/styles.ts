import styled from "styled-components";
import { ScreenSizes } from "../../constants/themes";

export const StyledHeader = styled.header`
  display: flex;
  height: 75px;
  align-items: center;
  padding: 0 25px;
  justify-content: space-between;
`;

export const StyledBurgerButton = styled.button`
  @media screen and (min-width: ${ScreenSizes.LAPTOP_S}px) {
    display: none;
  };

  display: block;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const StyledLogoWrapper = styled.div`
  z-index: 20;
`;