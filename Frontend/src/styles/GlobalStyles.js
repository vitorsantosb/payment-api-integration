import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        outline: none;
    }

    html {
      font-size: 62.5%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: 'Roboto', sans-serif;
    }

    body {
      font-family: 'Oswald', sans-serif;
      font-size: ${props => props.theme.fontSize};
      background-color: #f8f8f8;
    }
`;

export default GlobalStyles;