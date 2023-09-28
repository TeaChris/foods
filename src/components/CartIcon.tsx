'use client'

import { FC, useEffect } from 'react'
import { CustomImage } from './ui/Image'
import Link from 'next/link'
import { useCartStore } from '@/utils/store'

interface CartIconProps {
  // My Custom Props Here
}

export const CartIcon: FC<CartIconProps> = ({}) => {
  const { totalItems } = useCartStore()

  useEffect(() => {
    useCartStore.persist.rehydrate()
  }, [])
  return (
    <Link href="/cart" className="flex items-center gap-1">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <CustomImage
          src="/icons/bag.svg"
          alt="cart icon"
          height={35}
          width={35}
          priority={true}
          size=""
        />
      </div>
      <span className="font-bold text-orange-500">({totalItems})</span>
    </Link>
  )
}
