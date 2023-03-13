import styled from "styled-components";
import { ScreenSizes } from "../../shared/constants/themes";

export const StyledHomeContainer = styled.div`
  height: 90vh;
  border: 1px solid #ecf0f2;
  border-radius: 20px;
  width: 90%;
  margin: 12vh auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 25px;
  text-align: center;
  @media screen and (min-width: ${ScreenSizes.LAPTOP_S}px) {
    margin: 5vh auto;
  }
`;