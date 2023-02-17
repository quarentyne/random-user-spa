import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigationList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledNavigationLink = styled(NavLink)`
  color: black;
  font-size: 25px;
  &:not(:last-child){
    margin-bottom: 20px;
  }
  :hover {
    color: $black;
    opacity: 0.8;
  }
  &.active {
    color: $grey;
  }
`;