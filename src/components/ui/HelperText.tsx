import React from 'react'
import 'twin.macro'

interface HelperTextProps {
  text: string
}

const HelperText = ({ text }: HelperTextProps) => (
  <div tw="w-full flex justify-center lg:justify-start">
    <strong tw="text-font-2xl">{text}</strong>
  </div>
)

export { HelperText }
