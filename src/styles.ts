import { createGlobalStyle } from "styled-components";
import "./assets/fonts/Gilroy-Medium.ttf";

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
    font-size: 20px;
    color: #292D45;
  }

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