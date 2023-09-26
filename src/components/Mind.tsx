import { mind } from '@/data'
import { FC } from 'react'
import { CustomImage } from './ui/Image'

interface MindProps {
  // My Custom Props Here
}

export const Mind: FC<MindProps> = ({}) => {
  return (
    <section className="w-full h-fit mb-20">
      <div className="lg:w-lg h-fit flex flex-col items-start gap-8 mx-auto">
        <h3 className="text-xl font-bold">What{"'"}s on your mind</h3>
        <div className="w-full h-fit flex flex-wrap justify-between items-start">
          {mind.map((item) => (
            <article
              key={item.id}
              className="w-fit h-fit flex flex-col items-center gap-3"
            >
              <CustomImage
                src={item.image}
                alt={item.name}
                height={150}
                width={150}
                priority={true}
                size=""
                className="rounded-full object-cover"
              />
              <h5 className="text-base font-bold text-black capitalize">
                {item.name}
              </h5>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
