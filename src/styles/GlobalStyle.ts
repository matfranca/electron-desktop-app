import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    color: #E1E1E6;
  }

  body, input, button {
    font: 400 Roboto, sans-serif;
  }

  strong, h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 30px 15px;
  }

  .react-resizeble {
    position: relative;
  }
`
