import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
@import-normalize; /* bring in normalize.css styles */

body {
  background-color: #546e96;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul {
  margin: 0px;
  padding: 0px;
  list-style: none;
}
`

export default GlobalStyled;