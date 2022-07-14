import { css, theme } from 'twin.macro'
import { fontStyles } from './fonts'

const globalStyles = css`
  ${fontStyles}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  #root {
    isolation: isolate;
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-family: ${theme`fontFamily.primary`};
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    line-height: 1.15;
  }
`

export { globalStyles }
