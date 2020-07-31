import { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

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
    color: #333;
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
    line-height: 1.1;
  }

  h1 {
    margin-bottom: 2rem;

  }

  h2 {
    font-size: 3.125rem;
    margin-bottom: 3rem;

    ${media.lessThan('small')`
      font-size: 2.6rem;
    `}
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  button {
    background: #DE3B4A;
    color: white;
    font-weight: 900;
    padding: 18px;
    border: none;
    border-radius: 0;
    box-shadow: none;
    transition: 0.3s;
    cursor: pointer;

    :hover {
      background: #FD5D6C;
    }
  }
`

export default GlobalStyles
