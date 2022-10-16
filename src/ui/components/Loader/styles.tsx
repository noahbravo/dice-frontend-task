import styled from '@emotion/styled'
import { css } from '@emotion/react'

const StyledLoader = styled.div`
  height: 100%;
  width: 2.75rem;
  margin: auto;
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

export { StyledLoader, animationStyles }
