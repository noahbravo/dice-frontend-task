import { extendTheme } from '@chakra-ui/react'
import tokens from './tokens'
import styles from './styles'
import components from './components'

const theme = extendTheme({
  ...tokens,
  styles,
  components
})

export { theme }
