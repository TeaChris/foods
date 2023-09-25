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
