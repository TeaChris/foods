import { FC } from 'react'
import { CustomImage } from './ui/Image'
import Link from 'next/link'
import { footer } from '@/data'

interface FooterProps {
  // My Custom Props Here
}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="w-full h-44 bg-orange-500 grid place-items-center">
      <div className="container mx-auto flex flex-col items-center gap-12">
        <div className="w-full flex items-center justify-between">
          <Link href="/" className="w-fit flex items-center gap-1">
            <CustomImage
              src="/icons/logo2.svg"
              alt="logo"
              height={25}
              width={25}
              priority={true}
              size=""
            />
            <h5 className="text-xl first-letter:capitalize tracking-wider font-bold text-neutral-200">
              berFoods
            </h5>
          </Link>
          <ul className="w-fit flex h-full items-center gap-4">
            {footer.map((item) => (
              <li
                key={item.id}
                className="w-fit h-full grid place-items-center"
              >
                <Link
                  href={item.href}
                  className="first-letter:capitalize text-white"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <h5 className="text-xl first-letter:capitalize tracking-wider font-bold text-neutral-200">
            contact: +91 1234567890
          </h5>
        </div>
        <div className="w-fit h-fit flex items-center gap-8">
          <Link href="/" className="w-fit flex items-center gap-1">
            <CustomImage
              src="/icons/facebook.svg"
              alt="logo"
              height={18}
              width={18}
              priority={true}
              size=""
            />
          </Link>
          <Link href="/" className="w-fit flex items-center gap-1">
            <CustomImage
              src="/icons/insta.svg"
              alt="logo"
              height={25}
              width={25}
              priority={true}
              size=""
            />
          </Link>
          <Link href="/" className="w-fit flex items-center gap-1">
            <CustomImage
              src="/icons/x.svg"
              alt="logo"
              height={25}
              width={25}
              priority={true}
              size=""
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}
