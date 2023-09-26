import { recommend } from '@/data'
import { FC } from 'react'
import { CustomImage } from './ui/Image'

interface RecommendationProps {
  // My Custom Props Here
}

export const Recommendation: FC<RecommendationProps> = ({}) => {
  return (
    <section className="w-full h-[520px] my-32">
      <div className="lg:w-lg mx-auto h-full flex flex-col items-start justify-between">
        <h4 className="text-xl font-bold capitalize">
          personal recommendation
        </h4>
        <div className="w-full h-[474px] grid lg:grid-cols-4 items-start lg:justify-between">
          {recommend.map((item) => (
            <article
              key={item.id}
              className="w-[307px] h-[480px] bg-neutral-100 flex flex-col items-start gap-6 p-5 rounded-md"
            >
              <CustomImage
                src={item.img}
                alt={item.name}
                width={200}
                height={200}
                size=""
                priority={true}
                className="object-cover w-[275px] rounded-md"
              />
              <h3 className="text-lg font-bold text-start">{item.name}</h3>
              <span className="text-base font-bold">{item.desc}</span>
              <div className="w-full flex items-center justify-between">
                <div className="w-fit flex items-center gap-2">
                  <CustomImage
                    src="/icons/tag.svg"
                    alt="min icon"
                    width={20}
                    height={20}
                    size=""
                    priority={true}
                  />
                  <span className="text-base font-bold">${item.price}</span>
                </div>
                <div className="w-fit flex items-center gap-2">
                  <CustomImage
                    src="/icons/mins.svg"
                    alt="people icon"
                    width={20}
                    height={20}
                    size=""
                    priority={true}
                  />
                  <span className="text-base font-bold">{item.time}mins</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
