import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ScreenSizes } from "../../constants/themes";

interface INavigationList{
  isAuthorized: boolean | null;
}

export const StyledNavigationList = styled.ul<INavigationList>`
  display: flex;  
  align-items: center;
  flex-direction: column;
  pointer-events: ${props => props.isAuthorized ? "auto" : "none"};
`;

export const StyledNavigationItem = styled.li`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  &:not(:last-child){
    margin-bottom: 15px;
  };
`;

export const StyledNavigationLink = styled(NavLink)`
  color: black;
  font-size: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding-left: 10px;
  >span{
    margin-left: 10px;
  }

  &:not(:last-child){
    margin-bottom: 15px;
  }
  :hover {
    background-color: #F5F5F5;
  }
  &.active {
    background-color: #1A9BFC;
    color: white;
  }
  
  @media screen and (min-width: ${ScreenSizes.LAPTOP_S}px) {
    font-size: 20px;
    &:not(:last-child){
      margin-bottom: 20px;
    };
  };
`;