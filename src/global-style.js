import { createGlobalStyle } from "styled-components";

import "./assets/css/font.css";
import "antd/dist/antd.css";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;

        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
    }

    html, body, #root {
        font-family: 'Roboto-ragular', "Noto Sans KR", sans-serif;
        width: 100%;
        height: 100%;

        color: #111111;
        background-color: #f2f2f2;
    }

    h2, h3, h4, h5 {
        color: #1d1d1f;
        margin: 0;
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

    .section {
        overflow: hidden;
    }

    .section-content {
    }

    .main-title {
        font-family: "TmonMonsori";
        font-size: 12.2rem;
        line-height: 11.8rem;
    }
`;

export default GlobalStyle;
