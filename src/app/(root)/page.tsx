import { FeaturedPost } from '@/components/FeaturedPost'
import { HomeSearch } from '@/components/HomeSearch'
import { Mind } from '@/components/Mind'
import { Recommendation } from '@/components/Recommendation'
import { Slider } from '@/components/Slider'
import { Animation } from '@/components/ui/Animation'
import { CustomImage } from '@/components/ui/Image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <main className="w-full flex flex-col h-fit pt-20 items-start">
      <header className="w-full lg:h-[640px] relative">
        <div className="w-lg mx-auto h-ful flex items-start justify-between">
          {/* left */}
          <div className="w-[55%] h-full gap-8 flex flex-col items-start">
            <div className="w-full h-fit flex flex-col items-start gap-3">
              <div className="w-full flex flex-col items-start gap-4">
                <h2 className="text-neutral-950 text-5xl tracking-wider">
                  {' '}
                  Premium <span className="text-orange-500">Quality</span>
                </h2>
              </div>
              <div className="w-full flex items-center gap-1">
                <h2 className="text-neutral-950 text-5xl tracking-wider">
                  Food for your
                </h2>
                <div className="w-32 h-16 bg-amber-100 flex items-center rounded-[2.5rem] justify-start">
                  <Animation>
                    <CustomImage
                      src="/icons/ban.svg"
                      alt="cart icon"
                      height={40}
                      width={40}
                      priority={true}
                      size=""
                    />
                  </Animation>
                </div>
                <h2 className="text-orange-500 text-5xl tracking-wider">
                  healthy
                </h2>
              </div>
              <div className="w-full flex items-center gap-2">
                <div className="w-32 h-16 bg-rose-100 flex items-center rounded-[2.5rem] justify-start">
                  <Animation>
                    <CustomImage
                      src="/icons/apple.svg"
                      alt="cart icon"
                      height={40}
                      width={40}
                      priority={true}
                      size=""
                    />
                  </Animation>
                </div>
                <h2 className="text-orange-500 text-5xl tracking-wider">
                  & daily life
                </h2>
              </div>
            </div>

            <div className="w-[90%] h-fit">
              <p className="text-xs leading-normal tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate non, cumque officiis ipsam amet id sequi architecto
                dolorem exercitationem debitis impedit quisquam labore earum sit
                in expedita itaque commodi hic nihil! Saepe, praesentium
                consequatur?
              </p>
            </div>
            <div className="w-full flex items-center gap-8">
              <Input
                type="text"
                disabled
                className="w-[70%]"
                placeholder="Enter delivery location"
              />
              <Button variant={'default'} className="hover:bg-orange-500 h-10">
                Get started
              </Button>
            </div>
            <div className="w-full flex flex-col items-start gap-8">
              <h5 className="text-xs">Popular cities in Nigeria</h5>
              <div className="w-full flex items-start gap-4">
                <h5 className="text-xs odd:text-orange-500">Lagos</h5>
                <h5 className="text-xs odd:text-orange-500">Onitsha</h5>
                <h5 className="text-xs odd:text-orange-500">Abuja</h5>
                <h5 className="text-xs odd:text-orange-500">Abeokuta</h5>
                <h5 className="text-xs odd:text-orange-500">Sango</h5>
                <h5 className="text-xs odd:text-orange-500">Ikeja</h5>
                <h5 className="text-xs odd:text-orange-500">Iwo-road</h5>
                <h5 className="text-xs odd:text-orange-500">Osogbo</h5>
                <h5 className="text-xs odd:text-orange-500">Ilesha</h5>
                <h5 className="text-xs odd:text-orange-500">Alaba</h5>
                <h5 className="text-xs odd:text-orange-500">Kuto</h5>
              </div>
            </div>
          </div>
          <Slider />
        </div>
        <div className="w-[40rem] h-40 rounded-[5rem] bg-orange-500 opacity-30 top-24 -left-72 -rotate-45 absolute" />
        <div className="w-[50rem] h-40 rounded-[5rem] bg-transparent border-[5px] border-orange-500 opacity-30 top-36 -right-60 -rotate-45 -z-20 absolute" />
      </header>
      <FeaturedPost />
      <HomeSearch />
      <Mind />
      <Recommendation />
    </main>
  )
}
