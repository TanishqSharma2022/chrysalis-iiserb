"use client"
import { Example } from './commandPallete/CmdkPallete'
import Link from 'next/link'
import HamburgerMenu from './HamburgerMenu'

export default function Navbar({posts}) {
  const title = 'Chrysalis.'
  return (
    <header className="px-2 md:px-4 mb-10 mt-6 md:mt-4 flex items-center md:mb-4 flex-row justify-between text-pretty  z-10 bg-blue header-nav">

      <h1 className="text-2xl  font-sfheavy text-slate-700 drop-shadow-lg  md:text-4xl flex items-center gap-1 md:gap-4 header-h1">
        <img src="/chrysalis.png" className='h-12 w-12 md:h-12 md:w-12 aspect-square' />
        <Link href={'/'}>{title}</Link>
      </h1>
      <div className="flex gap-4 md:gap-12 overflow-x-hidden">
        <Example posts={posts} />
        <HamburgerMenu />
      </div>

    </header>
  )
}
