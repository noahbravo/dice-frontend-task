import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme, { Fonts } from './theme'
import { Search } from './containers'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Search />
    </ChakraProvider>
  )
}

export default App
