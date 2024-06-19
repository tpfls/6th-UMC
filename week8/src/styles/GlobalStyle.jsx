import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    #root {
        width: 100%;
        height: 100%;
    }

    html, body {
        margin: 0;
        padding: 0;
        background-color: #232649;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;