import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 16px Poppins, sans-serif;
  }

  input,
  button,
  body {
    font-family: Poppins, sans-serif;
  }
`
