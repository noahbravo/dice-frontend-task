import React from 'react'
import { Global } from '@emotion/react'
import tw, { styled, css } from 'twin.macro'

const StyledLoader = styled.div`
  ${tw`h-full w-11 m-auto`};
  aspect-ratio: 0.75;
  --c: no-repeat linear-gradient(#ffffff 0 0);
  background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
  animation: loaderAnimation 1s infinite linear alternate;
`

const animationStyles = css`
  @keyframes loaderAnimation {
    0% {
      background-size: 20% 50%, 20% 50%, 20% 50%;
    }
    20% {
      background-size: 20% 20%, 20% 50%, 20% 50%;
    }
    40% {
      background-size: 20% 100%, 20% 20%, 20% 50%;
    }
    60% {
      background-size: 20% 50%, 20% 100%, 20% 20%;
    }
    80% {
      background-size: 20% 50%, 20% 50%, 20% 100%;
    }
    100% {
      background-size: 20% 50%, 20% 50%, 20% 50%;
    }
  }
`

const Loader = () => (
  <div tw="w-full">
    <StyledLoader />
    <Global styles={animationStyles} />
  </div>
)

export { Loader }
