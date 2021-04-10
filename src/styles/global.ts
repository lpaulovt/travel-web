import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Circular Std";
  src:url('/fonts/CircularStd-Black.ttf');
  font-weight: 900;
  font-style: normal;
}
@font-face {
  font-family: "Circular Std";
  src:url('fonts/CircularStd-Bold.ttf');
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "Circular Std Book";
  src:url('fonts/CircularStd-Book.ttf');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Circular Std";
  src:url('fonts/CircularStd-Medium.ttf');
  font-weight: 500;
  font-style: normal;
}


  :root {
    --background: #000;
    --white: #FFF;
    --blue: #4096FE;
    --gray: #414141;

    --container: 100rem;

    --small: 1.5rem;
    --medium: 3rem;
    --large:5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    background-color: var(--background);
    color: var(--white);
  }

  body {
    font-family: "Circular Std";
  }

  p {
    font-size: 2rem;
    line-height: var(--medium);
  }

  a {
    color: var(--blue);
  }
`

export default GlobalStyles
