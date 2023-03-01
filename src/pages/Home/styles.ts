import styled from "styled-components";
import { ScreenSizes } from "../../shared/helpers/themes";

export const StyledHomeContainer = styled.div`
  margin: 0 auto;
  height: 100vh;
  margin-top: -20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 3px #555;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 45px;
  >p{
    padding: 20px;
    font-size: 24px;
    text-align: center;
  }

  @media screen and (min-width: ${ScreenSizes.TABLET}px) {
    margin-top: 0;
    width: 90%;
    height: 100%;
  }
`;