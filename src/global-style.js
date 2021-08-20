import { createGlobalStyle } from "styled-components";

import "./assets/css/font.css";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;

        margin: 0;
        padding: 0;
    }

    html, body, #root {
        font-family: 'Roboto-ragular', "Noto Sans KR", sans-serif;
        width: 100%;
        height: 100%;

        color: #111111;
    }

      /* Scroll */
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    ::-webkit-scrollbar-track {
        background: rgba(204, 204, 204, 0.4);
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.2);
        opacity: 0.7;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 0, 0, 0.2);
    }
`;

export default GlobalStyle;
