import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased !important;
        background: #e5e5e5;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
        border: 0;
    }
`;
