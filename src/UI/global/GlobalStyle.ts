import { createGlobalStyle } from 'styled-components';
import NunitoSemiBold from './../Fonts/Nunito-SemiBold.ttf'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: #495057;
    @font-face {
        font-family: 'NunitoSemiBold';
        src: local('NunitoSemiBold'),
        url(${NunitoSemiBold}) format('truetype');
    }
  }
  p{
    color:#545454;
  }
`;
 
export default GlobalStyle;