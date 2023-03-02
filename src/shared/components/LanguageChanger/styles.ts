import styled from "styled-components";
import { ScreenSizes } from "../../helpers/themes";

export const StyledLanguageChangerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  @media screen and (min-width: ${ScreenSizes.LAPTOP_S}px) {
    font-size: 20px;
  };
`;

export const StyledLanguageChangerSelect = styled.select`
  background: none;
  border: none;
`;