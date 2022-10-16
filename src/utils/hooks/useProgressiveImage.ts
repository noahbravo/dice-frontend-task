// adapted from https://benhoneywill.com/progressive-image-loading-with-react-hooks/
import { useState, useEffect } from 'react'

function useProgressiveImage(lowQualitySrc: string | undefined, highQualitySrc: string) {
  const [src, setSrc] = useState<string>(lowQualitySrc || highQualitySrc)

  useEffect(() => {
    const img = new Image()
    img.src = highQualitySrc
    img.onload = () => {
      setSrc(highQualitySrc)
    }
  }, [lowQualitySrc, highQualitySrc])

  return { src, blur: src === lowQualitySrc }
}

export { useProgressiveImage }
