import React from 'react'
import 'twin.macro'
import { DiceLogo } from './svg'

const Header = () => (
  <header tw="fixed flex justify-center w-full h-24 bg-bg-color z-10">
    <DiceLogo />
  </header>
)

export default Header
