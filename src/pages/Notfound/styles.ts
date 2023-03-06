import { Link } from "react-router-dom";
import styled from "styled-components";
import { ScreenSizes } from "../../shared/helpers/themes";

export const StyledErrorWrapper = styled.div`
  height: 100%;
  position: fixed;
  width: 100%;
  text-align: center;
  padding-top: 5%;
`;

export const StyledErrorTitle = styled.h1`
  font-size: 150px;
  font-family: "Arial";
  font-weight: 900;
  text-shadow: 4px 4px 0 #fff,6px 6px 0 #11142d;
  line-height: 210px;
  color: #fc4b6c;
  margin-bottom: 0.5rem;
  @media screen and (min-width: ${ScreenSizes.MOBILE}px) { 
    font-size: 210px;
  };
`;

export const StyledErrorSubtitle = styled.h3`
  text-transform: uppercase;
  font-size: 1rem;
  margin-bottom: 2.5rem;
  color: #11142d;
  @media screen and (min-width: ${ScreenSizes.MOBILE}px) { 
    font-size: 1.3125rem;
  };
`;

export const StyledErrorButton = styled(Link)`
  transition: all 0.1s ease-out;
  background-color: #fc4b6c;
  border-color: #fc4b6c;
  cursor: pointer;
  vertical-align: middle;
  color: #fff;
  border-radius: 60px;
  padding: 7px 18px;
  &:hover{
    background-color: #fc6682;
    border-color: #fc5d7b;
  };
`;