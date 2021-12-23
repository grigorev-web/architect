import { createGlobalStyle } from 'styled-components';
import SegoUI from './../Fonts/SegoeUI.ttf'
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    @font-face {
        font-family: 'SegoeUI';
        src: local('SegoeUI'),
        url(${SegoUI}) format('truetype');
        font-weight: 500;
    }
  }
`;
 
export default GlobalStyle;