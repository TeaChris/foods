import { menu } from '@/data'
import Link from 'next/link'

export default function MenuPage() {
  return (
    <main className="w-full lg:h-fit mb-32">
      <div className="w-md lg:w-lg mx-auto h-fit py-2 grid lg:grid-cols-3 items-center gap-0">
        {menu.map((category) => (
          <Link
            href={`/menu/${category.slug}`}
            key={category.id}
            className="w-full lg:h-96 bg-cover p-8"
            style={{ backgroundImage: `url(${category.img})` }}
          >
            <div className={`text-${category.color} w-1/2`}>
              <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
              <p className="text-sm my-8">{category.desc}</p>
              <button
                className={`hidden 2xl:block bg-${category.color} text-${
                  category.color === 'black' ? 'white' : 'orange-500'
                } py-2 px-4 rounded-md`}
              >
                Explore
              </button>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
