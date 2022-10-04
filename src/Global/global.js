import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body{
    margin: 0 auto;
    max-width: 1080px;
    width: 100%;
    border: 2px solid green;
  }
`