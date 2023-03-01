import styled from "styled-components";
import { ScreenSizes } from "../../shared/helpers/themes";


export const StyledUsersWrapper = styled.div`
  width: 96%;
  margin: 0 auto;
`;

export const StyledUsersList = styled.ul`
  display: grid;  
  justify-items: center;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;

 
  @media screen and (min-width: ${ScreenSizes.LAPTOP_S}px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 20px;
  };
`;