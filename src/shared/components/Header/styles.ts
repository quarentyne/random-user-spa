import styled from "styled-components";
import { ScreenSizes } from "../../constants/themes";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0; 
  background-color: white;
  width: 100vw;
  z-index: 15;
  display: flex;
  height: 75px;
  align-items: center;
  padding: 0 25px;
  justify-content: space-between;
  @media screen and (min-width: ${ScreenSizes.LAPTOP_S}px) {
    background-color: transparent;
  }
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