'use client'

import Image from 'next/image'
import { FC, useEffect } from 'react'
import { useCartStore } from '@/utils/store'
import { useRouter } from 'next/navigation'

interface pageProps {}

const CartPage: FC<pageProps> = ({}) => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore()
  const router = useRouter()

  useEffect(() => {
    useCartStore.persist.rehydrate()
  }, [])

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {products.map((item) => (
          <div className="flex items-center justify-between mb-4" key={item.id}>
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={100}
                height={100}
                className="rounded-full"
              />
            )}
            <div className="">
              <h1 className="uppercase text-xl font-bold">
                {item.title} x{item.quantity}
              </h1>
              <span>{item.optionTitle}</span>
            </div>
            <h2 className="font-bold">${item.price}</h2>
            <span
              className="cursor-pointer"
              onClick={() => removeFromCart(item)}
            >
              X
            </span>
          </div>
        ))}
      </div>
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal ({totalItems} items)</span>
          <span className="">${totalPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">${totalPrice}</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  )
}

export default CartPage

// <section className="w-full h-[50rem] flex flex-col items-start gap-12 mb-24">
//       <div className="w-full h-72 py-6 bg-black relative">
//         <div className="w-lg h-full mx-auto flex items-end gap-24">
{
  /* left side */
}
{
  /* <div className="w-[70%] h-full flex items-center gap-16">
            <CustomImage
              src="/pasta/p1.png"
              alt=""
              height={100}
              width={100}
              priority={true}
              size=""
              className="w-72 h-60 rounded-md object-cover"
            />
            <div className="w-fit h-fit flex flex-col items-start gap-4">
              <h2 className="text-white font-bold text-3xl tracking-wider">
                LunchBox - Meals & Thails
              </h2>
              <small className="text-xs text-neutral-300 font-medium tracking-wide">
                South-west, Nigeria
              </small>
              <div className="w-fit h-fit flex items-start gap-0">
                <div className="w-fit flex flex-col gap-4 h-fit pr-16 border-r-4 border-neutral-300 py-5">
                  <div className="w-fit flex items-center gap-1">
                    <CustomImage
                      src="/icons/star.svg"
                      alt="icon"
                      height={20}
                      width={20}
                      priority={true}
                      size=""
                    />
                    <small className="text-sm text-neutral-300 font-bold tracking-wide">
                      4.0
                    </small>
                  </div>
                  <small className="text-base text-neutral-300 font-bold tracking-wide">
                    100 + ratings
                  </small>
                </div>

                <div className="w-fit grid place-items-center gap-4 h-fit px-12 border-r-4 border-neutral-300 py-5">
                  <div className="w-fit flex flex-col items-start gap-4">
                    <small className="text-sm text-neutral-300 font-bold tracking-wide">
                      30 Mins
                    </small>
                    <small className="text-sm text-neutral-300 font-bold tracking-wide">
                      Delivery Time
                    </small>
                  </div>
                </div>

                <div className="w-fit grid place-items-center gap-4 h-fit px-12 border-r-4 border-neutral-300 py-5">
                  <div className="w-fit flex flex-col items-start gap-4">
                    <small className="text-sm text-neutral-300 font-bold tracking-wide">
                      $200
                    </small>
                    <small className="text-sm text-neutral-300 font-bold tracking-wide">
                      Cost for two (2)
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div> */
}

{
  /* ? */
}
{
  /* <div className="p-4 w-[20rem] h-40 flex flex-col items-start gap-4 border-4 border-dashed border-orange-600 rounded-md">
            <small className="text-lg text-orange-600 font-bold tracking-wide">
              Offers
            </small>
            <div className="w-full flex items-center gap-2">
              <CustomImage
                src="/icons/offers.svg"
                alt="icon"
                height={30}
                width={30}
                priority={true}
                size=""
              />
              <small className="text-sm text-orange-600 font-bold tracking-wide">
                50% off up to ₹100 | Use code TRYNEW
              </small>
            </div>
            <div className="w-full flex items-center gap-2">
              <CustomImage
                src="/icons/offers.svg"
                alt="icon"
                height={30}
                width={30}
                priority={true}
                size=""
              />
              <small className="text-sm text-orange-600 font-bold tracking-wide">
                20% off | Use code PARTY
              </small>
            </div>
          </div>
        </div> */
}

{
  /* absolute */
}
{
  /* <div className="w-fit h-fit left-[30%] bottom-[-1.5rem] flex items-center gap-16 absolute">
          <div className="w-fit h-fit rounded-md bg-white">
            <Input
              className="w-96 h-10"
              disabled
              placeholder="Enter a search"
            />
          </div>

          <Button className="bg-white text-black font-bold hover:bg-white hover:text-black">
            Favourite
          </Button>
        </div>
      </div>
    </section> */
}
