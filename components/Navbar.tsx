import { Menu } from 'lucide-react'
import SearchCommand from './SearchCommand'

export default function Navbar({posts}) {
  const title = 'Chrysalis.'

  return (
    <header className="px-12 md:px-24 mb-10 mt-16 flex items-center md:mb-12 flex-row justify-between text-pretty">
      <h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
        {title}
      </h1>
      <div className="flex  gap-12">
        <SearchCommand posts={posts} />
        <Menu />
      </div>
    </header>
  )
}
