import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { cn } from '@/lib/utils'

interface CustomImageProps {
  // My Custom Props Here
  src: StaticImageData | StaticImport | string
  alt: string
  size: string
  width: number
  height: number
  className?: string
  priority: boolean
}

export const CustomImage: FC<CustomImageProps> = ({
  src,
  alt,
  size,
  width,
  height,
  className,
  priority,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      sizes={size}
      width={width}
      height={height}
      className={(cn('w-full h-auto'), className)}
      priority={priority}
    />
  )
}
