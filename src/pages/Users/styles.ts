import styled from "styled-components";
import { ScreenSizes } from "../../shared/constants/themes";


export const StyledUsersWrapper = styled.div`
  margin: 12vh auto;
  height: 100vh;
  width: 96%;

  @media screen and (min-width: ${ScreenSizes.LAPTOP_S}px) {
    margin-top: 5vh;
  }
`;

export const StyledUsersList = styled.ul`
  display: grid;  
  justify-items: center;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;

  @media screen and (min-width: ${ScreenSizes.LAPTOP_L}px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 30px;
  };
`;