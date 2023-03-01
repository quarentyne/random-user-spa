import styled from "styled-components";
import { ScreenSizes } from "../../helpers/themes";

export const StyledSideMenuWrapper = styled.div`
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(230,230,230,0.85) 35%);
  padding: 10px 15px 15px 20px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
  height: 100vh;  
  width: 250px;
  
  @media screen and (min-width: ${ScreenSizes.LAPTOP_S}px) {
    width: 350px;  
  }
`;

