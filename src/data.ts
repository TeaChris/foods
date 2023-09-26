type Nav = {
  id: number
  name: string
  href: string
  active: null | string
}[]

export const nav: Nav = [
  { id: 1, name: 'menu', href: '/menu', active: 'menu' },
  { id: 2, name: 'contact', href: '/contact', active: 'contact' },
]

type Footer = {
  id: number
  name: string
  href: string
}[]

export const footer: Footer = [
  { id: 1, name: 'about', href: '/' },
  { id: 2, name: 'delivery', href: '/' },
  { id: 3, name: 'help & support', href: '/' },
  { id: 4, name: 'T&C', href: '/' },
]

type Rest = {
  id: number
  name: string
  image: string
  location: string
  rating: number
  min: number
  people: string
}[]

export const rest: Rest = [
  {
    id: 1,
    name: 'Bigos (Hunters Stew)',
    image: '/rice/r1.png',
    location: 'Ikeja, Lagos',
    rating: 4.5,
    min: 30,
    people: '200 for two',
  },
  {
    id: 2,
    name: 'Koshari',
    image: '/rice/Koshari.png',
    location: 'Ikeja, Lagos',
    rating: 3.9,
    min: 30,
    people: '200 for two',
  },
  {
    id: 3,
    name: 'Teriyaki Chicken Casserole',
    image: '/rice/r2.png',
    location: 'Ikeja, Lagos',
    rating: 4.1,
    min: 30,
    people: '200 for two',
  },
  {
    id: 4,
    name: 'Fennel Dauphinoise',
    image: '/rice/r3.png',
    location: 'Ikeja, Lagos',
    rating: 4.7,
    min: 30,
    people: '200 for two',
  },
]

type Mind = {
  id: number
  image: string
  name: string
}[]

export const mind: Mind = [
  { id: 1, image: '/chicken/c1.png', name: 'Brown Stew Chicken' },
  { id: 2, image: '/chicken/chicken.png', name: 'Chicken' },
  { id: 3, image: '/chicken/c2.png', name: 'Rosół (Polish Chicken Soup)' },
  { id: 4, image: '/chicken/c3.png', name: 'tortang talong' },
  { id: 5, image: '/peas/b2.png', name: 'Bean & Sausage Hotpot' },
  { id: 6, image: '/peas/b1.png', name: 'Brown Stew Beans' },
]

type Recommendation = {
  id: number
  img: string
  name: string
  desc: string
  price: number
  time: number
}[]

export const recommend: Recommendation = [
  {
    id: 1,
    img: '/pasta/bistek.png',
    name: 'Baked Pizza Wrap - Vegetarian',
    desc: 'Faasos - Wraps & Rolls',
    price: 120,
    time: 40,
  },
  {
    id: 2,
    img: '/pasta/p1.png',
    name: 'Butter Chicken Pizza - 8 serve',
    desc: 'Suren Pastries',
    price: 100,
    time: 25,
  },
  {
    id: 3,
    img: '/pasta/p2.png',
    name: 'Mexican Patty Signature Wraps',
    desc: 'subway',
    price: 80,
    time: 50,
  },
  {
    id: 4,
    img: '/pasta/p3.png',
    name: 'Southwest Chicken Salad',
    desc: 'Faasos - Wraps & Rolls',
    price: 220,
    time: 65,
  },
]

export const recommendFood: Recommendation = [
  {
    id: 1,
    img: '/beef/b1.png',
    name: 'Paneer Tikka Rice Bowl',
    desc: 'the good bowl',
    price: 220,
    time: 40,
  },
  {
    id: 2,
    img: '/pasta/p4.png',
    name: 'Aloo Paratha Curd Meal (2 pcs)',
    desc: 'lunch box',
    price: 300,
    time: 25,
  },
  {
    id: 3,
    img: '/beef/b2.png',
    name: 'Baked Pizza Wrap - Vegetarian',
    desc: 'faasoos - wrap and rolls',
    price: 230,
    time: 50,
  },
  {
    id: 4,
    img: '/snacks/c1.png',
    name: 'Mixed Veg Fried Rice with dry fruits',
    desc: 'mfc restaurant',
    price: 220,
    time: 65,
  },
]
