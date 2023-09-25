'use client'

import { FC, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CustomImage } from './ui/Image'

interface SliderProps {
  // My Custom Props Here
}

const images = ['/slider/s1.png', '/slider/s2.png', '/slider/s3.png']

export const Slider: FC<SliderProps> = ({}) => {
  const [currentImage, setCurrentImage] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <div className="hidden lg:flex w-[45%] h-full items-center gap-4 overflow-hidden relative">
      <CustomImage
        src="/slider/s1.png"
        alt="slider image"
        height={500}
        width={300}
        priority={true}
        size=""
        className="w-[20rem] h-[30rem] object-cover rounded-2xl"
      />
      <CustomImage
        src="/slider/s2.png"
        alt="slider image"
        height={400}
        width={300}
        priority={true}
        size=""
        className="w-56 h-[20rem] object-cover rounded-2xl"
      />
      <CustomImage
        src="/slider/s3.png"
        alt="slider image"
        height={500}
        width={300}
        priority={true}
        size=""
        className="w-48 h-60 object-cover rounded-2xl"
      />
    </div>
  )
}
