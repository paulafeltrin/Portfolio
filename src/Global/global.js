import {createGlobalStyle} from 'styled-components';
import Img from '../Assests/old-paper.png'

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
    background-image: url(${Img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
`