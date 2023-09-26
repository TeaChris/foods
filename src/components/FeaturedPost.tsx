import { recommendFood, rest } from '@/data'
import { FC } from 'react'
import { CustomImage } from './ui/Image'

interface FeaturedPostProps {
  // My Custom Props Here
}

export const FeaturedPost: FC<FeaturedPostProps> = ({}) => {
  return (
    <section className="w-full lg:h-[1056px] my-20">
      <div className="lg:w-lg mx-auto h-full flex items-start justify-between">
        {/* restaurant */}
        <div className="w-[45%] h-full flex flex-col items-start gap-6">
          <h5 className="text-xl capitalize">Nearby restaurants</h5>
          <div className="w-full h-fit grid lg:grid-cols-2 items-start gap-x-6 gap-y-4">
            {rest.map((item) => (
              <article
                key={item.id}
                className="w-[307px] h-[454px] bg-neutral-100 flex flex-col items-start gap-6 p-5 rounded-md"
              >
                <CustomImage
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  size=""
                  priority={true}
                  className="object-cover w-[275px] rounded-md"
                />
                <h3 className="text-lg font-bold text-start">{item.name}</h3>
                <div className="w-full flex items-center justify-between">
                  <span className="text-sm text-neutral-600 font-bold">
                    {item.location}
                  </span>
                  <div className="w-fit flex items-center gap-2">
                    {item.rating >= 4.0 ? (
                      <CustomImage
                        src="/icons/star.svg"
                        alt="star"
                        width={20}
                        height={20}
                        size=""
                        priority={true}
                      />
                    ) : (
                      <CustomImage
                        src="/icons/star2.svg"
                        alt="star"
                        width={20}
                        height={20}
                        size=""
                        priority={true}
                      />
                    )}
                    <span className="text-sm text-neutral-600 font-bold">
                      {item.rating}
                    </span>
                  </div>
                </div>
                <div className="w-full flex items-center justify-between">
                  <div className="w-fit flex items-center gap-2">
                    <CustomImage
                      src="/icons/mins.svg"
                      alt="min icon"
                      width={20}
                      height={20}
                      size=""
                      priority={true}
                    />
                    <span className="text-base font-bold">{item.min} mins</span>
                  </div>
                  <div className="w-fit flex items-center gap-2">
                    <CustomImage
                      src="/icons/people.svg"
                      alt="people icon"
                      width={20}
                      height={20}
                      size=""
                      priority={true}
                    />
                    <span className="text-base font-bold">{item.people}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* recommended */}
        <div className="w-[45%] h-full flex flex-col items-start gap-6">
          <h5 className="text-xl capitalize">Recommended Food Items</h5>
          <div className="w-full h-fit grid lg:grid-cols-2 items-start gap-x-6 gap-y-4">
            {recommendFood.map((item) => (
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
      </div>
    </section>
  )
}
