import React from 'react'
import { Container, Image, Center } from '@chakra-ui/react'
import diceLogo from '../../../assets/img/dice-logo.svg'

const Header = () => (
  <Container as="header" position="fixed" zIndex={10} w="full" h={24} bg="black" centerContent>
    <Center h="full">
      <Image src={diceLogo} alt="Dice logo" w={14} />
    </Center>
  </Container>
)

export default Header
