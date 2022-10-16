import React from 'react'
import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'Favorit';
      font-display: swap;
      src: url('./fonts/favorit-regular-webfont.woff2') format('woff2');
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: 'Favorit';
      font-display: swap;
      src: url('./fonts/favorit-bold-webfont.woff2') format('woff2');
      font-weight: 700;
      font-style: normal;
    }
      `}
  />
)

export { Fonts }
