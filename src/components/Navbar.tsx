import { FC } from 'react'
import { CustomImage } from './ui/Image'
import Link from 'next/link'
import { nav } from '@/data'
import { Input } from './ui/input'
import { Button, buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import { CartIcon } from './CartIcon'

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="w-full h-40 grid place-items-center font-bold">
      <div className="w-lg mx-auto flex justify-between items-center h-full">
        {/* logo and links */}
        <div className="w-fit items-center h-full flex gap-16">
          {/* logo */}
          <Link href="/" className="w-fit flex items-center gap-1">
            <CustomImage
              src="/icons/logo.svg"
              alt="logo"
              height={23}
              width={23}
              priority={true}
              size=""
            />
            <h5 className="text-xl first-letter:capitalize tracking-wider font-bold">
              berFoods
            </h5>
          </Link>
          <ul className="w-48 flex h-full items-center gap-4">
            {nav.map((item) => (
              <li key={item.id} className="w-20 h-full grid place-items-center">
                <Link href={item.href} className="first-letter:capitalize">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-fit flex h-full items-center gap-4">
          <Input
            type="search"
            disabled
            placeholder="Enter item of restaurant you are looking for"
            className="w-[20rem]"
          />
          <Link
            href="/cart"
            className={cn(buttonVariants({ variant: 'ghost' }))}
          >
            <CartIcon />
          </Link>
          <Link href="/sign-in" className="w-24 h-12">
            <Button size="default" className="w-full hover:bg-orange-500">
              sign-in
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
