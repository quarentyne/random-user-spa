import styled, { createGlobalStyle } from "styled-components";
import "./assets/fonts/Gilroy-Medium.ttf";
import { ScreenSizes } from "./shared/helpers/themes";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  html{    
    box-sizing: border-box;
    font-family: Gilroy;
    font-weight: 500;
    font-size: 15px;
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(194,217,252,1) 34%, rgba(0,212,255,1) 100%) no-repeat fixed;
    color: #292D45;
    @media screen and (min-width: ${ScreenSizes.TABLET}px){    
    font-size: 20px;    
    position: sticky;
    height: 100%;
  };

  ul[class],
  ol[class] {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figcaption,
  figure,
  blockquote,
  dl dd {
    margin: 0;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a {
    text-decoration: none;
  }
`;

export const MainContainer = styled.div`
  display: flex;
`;