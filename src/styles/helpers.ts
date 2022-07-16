type toRemFnc = (px: number, rootFontSize?: number) => string
const toRem: toRemFnc = (px, rootFontSize = 16) => `${px / rootFontSize}rem`

export { toRem }
