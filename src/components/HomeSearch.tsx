import { FC } from 'react'
import { CustomImage } from './ui/Image'
import { Input } from './ui/input'
import { Button } from './ui/button'

interface HomeSearchProps {
  // My Custom Props Here
}

export const HomeSearch: FC<HomeSearchProps> = ({}) => {
  return (
    <section className="w-full h-[170px] bg-orange-500 grid place-items-center mb-20">
      <div className="w-[60%] h-full flex items-center justify-between">
        <div className="w-fit flex items-center h-full gap-8">
          <h3 className="text-xl font-bold text-white">Search by Restaurant</h3>
          <CustomImage
            src="/icons/rest.svg"
            alt="cart icon"
            height={20}
            width={20}
            priority={true}
            size=""
          />
        </div>
        <Input
          type="text"
          disabled
          className="w-[30rem] h-9 text-white"
          placeholder="Enter item or search you are looking for"
        />
        <Button className="w-fit h-fit px-5 py-3 border-black border transition-all ease-in-out hover:bg-transparent">
          Search now
        </Button>
      </div>
    </section>
  )
}
