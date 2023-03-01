import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ScreenSizes } from "../../helpers/themes";

export const StyledNavigationList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledNavigationLink = styled(NavLink)`
  color: black;
  font-size: 20px;
  text-align: center;

  &:not(:last-child){
    margin-bottom: 15px;
  }
  :hover {
    color: $black;
    opacity: 0.8;
  }
  &.active {
    color: grey;
  }
  
  @media screen and (min-width: ${ScreenSizes.LAPTOP_S}px) {
    font-size: 25px;
    &:not(:last-child){
      margin-bottom: 20px;
    };
  };
`;