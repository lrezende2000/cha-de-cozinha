import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #696F1A;
    --color-secondary: #FFFFE9;
    --color-bright-white: #FFFCF2;
    --color-white: #FFFFFF;
    --color-bright-black: #252422;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html, body {
    height: 100%;
    width: 100%;
  }
`;