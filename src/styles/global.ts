import { css, theme } from 'twin.macro'
import { fontStyles } from './fonts'

const globalStyles = css`
  ${fontStyles}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  #root {
    isolation: isolate;
    min-height: 100%;
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-family: ${theme`fontFamily.primary`};
    background-color: ${theme`colors.bg-color`};
    color: ${theme`colors.text-color`};
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    line-height: 1.15;
    margin: 0;
  }
`

export { globalStyles }
