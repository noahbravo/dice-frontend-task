import React from 'react'
import { Container } from '@chakra-ui/react'
import Header from './Header'

interface LayoutProps extends React.HTMLAttributes<Element> {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <Container
      as="main"
      position="relative"
      zIndex={0}
      w="full"
      maxWidth="6xl"
      py={24}
      centerContent
    >
      {children}
    </Container>
  </>
)

export { Layout }
