import React from 'react'
import { Box } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { StyledLoader, animationStyles } from './styles'

const Loader = React.memo(() => (
  <Box w="full">
    <StyledLoader />
    <Global styles={animationStyles} />
  </Box>
))

export { Loader }
