import styled from "styled-components";
import { ScreenSizes } from "../helpers/themes";

export const StyledLayoutContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 75px);

  @media screen and (min-width: ${ScreenSizes.LAPTOP_S}px) {
    padding-left: 300px;
  };
`;