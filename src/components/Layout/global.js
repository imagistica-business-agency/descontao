import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', Sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  }

  a {
    color: inherit;
    font-weight: 700;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  h1, h2, h3 {
    font-weight: 900;
    font-style: italic;
  }

  h1 {
    margin-bottom: 2rem;

  }

  h2 {
    font-size: 3.125rem;
    margin-bottom: 2rem;

  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`

export default GlobalStyles
