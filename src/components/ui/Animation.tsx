'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'

interface AnimationProps {
  // My Custom Props Here
  children: React.ReactNode
}

export const Animation: FC<AnimationProps> = ({ children }) => {
  return (
    <motion.div
      className="w-fit h-fit"
      animate={{ x: [13, 80, 13] }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        times: [0, 0.5, 1],
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  )
}
