import { useState, useCallback, useRef } from 'react'

function useToggle() {
  const toggleContentRef = useRef<HTMLDivElement>(null)
  const toggleImageRef = useRef<HTMLDivElement>(null)

  const [toggled, setToggled] = useState(false)

  const onToggle = useCallback(() => {
    setToggled((prev) => !prev)

    if (toggleContentRef?.current) {
      // set toggle content height
      if (toggleContentRef?.current) {
        const { scrollHeight, clientHeight: currentHeight } = toggleContentRef.current
        const maxHeight = currentHeight ? '' : `${scrollHeight}px`
        toggleContentRef.current.style.maxHeight = maxHeight
      }
    }

    // set background image and its container height
    if (toggleImageRef?.current) {
      const { clientHeight: currentHeight } = toggleImageRef.current
      const height = toggled ? currentHeight * 2 : currentHeight / 2
      toggleImageRef.current.style.height = `${height}px`
    }
  }, [toggled, setToggled])

  return { toggled, onToggle, toggleContentRef, toggleImageRef }
}

export { useToggle }
