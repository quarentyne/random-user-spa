import styled from "styled-components";
import { ScreenSizes } from "../helpers/themes";

export const StyledLayoutContainer = styled.div`
  margin: 20px 0 20px 250px;
  position: relative;
  width: 100%;
  height: calc(100vh - 40px);

  @media screen and (min-width: ${ScreenSizes.LAPTOP_S}px) {
    margin: 20px 0 20px 350px;
  };
`;