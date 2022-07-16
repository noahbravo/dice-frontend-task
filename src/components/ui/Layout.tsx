import React from 'react'
import { Global } from '@emotion/react'
import tw, { styled } from 'twin.macro'
import { globalStyles } from '../../styles'
import Header from './Header'

interface LayoutProps extends React.HTMLAttributes<Element> {
  children: React.ReactNode
}

const StyledMainContainer = styled.div`
  ${tw`w-full px-5 xl:px-0`};
`

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <Header />
    <main tw="flex justify-center w-full py-24 relative z-0">
      <StyledMainContainer>{children}</StyledMainContainer>
    </main>
    <Global styles={globalStyles} />
  </div>
)

export { Layout }
