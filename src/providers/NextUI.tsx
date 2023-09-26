'use client'

import { FC } from 'react'
import { NextUIProvider } from '@nextui-org/react'

interface NextUIProps {
  children: React.ReactNode
}

export const NextUI: FC<NextUIProps> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>
}
