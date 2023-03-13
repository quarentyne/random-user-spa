import styled from "styled-components";
import { ScreenSizes } from "../../shared/constants/themes";


export const StyledUsersWrapper = styled.div`
  margin: 12vh auto;
  width: 96%;

  @media screen and (min-width: ${ScreenSizes.LAPTOP_S}px) {
    margin-top: 1vh;
  }
`;

export const StyledUsersList = styled.ul`
  display: grid;  
  justify-items: center;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;

  @media screen and (min-width: ${ScreenSizes.LAPTOP_L}px) {
    grid-template-columns: 1fr 1fr;
  };
 
  @media screen and (min-width: ${ScreenSizes.LAPTOP_EXTRA}px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 20px;
  };
`;