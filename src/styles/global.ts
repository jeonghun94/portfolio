import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`

    ${reset}
    
    @font-face { 
        font-family: 'NEXON Lv2 Gothic';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }
    
      @font-face {
        font-family: 'NEXON Lv2 Gothic Bold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic Bold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }
    
      @font-face {
        font-family: 'NEXON Lv2 Gothic Light';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic Light.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }

      html {
        font-family: "NEXON Lv2 Gothic";
        height: -webkit-fill-available;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      * {
      box-sizing: border-box;
    }

`;
