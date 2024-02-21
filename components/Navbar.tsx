"use client"
import { Example } from './commandPallete/CmdkPallete'
import Link from 'next/link'
import HamburgerMenu from './HamburgerMenu'

export default function Navbar({posts}) {
  const title = 'Chrysalis.'




  return (
    <header className="px-6 md:px-12 mb-10 mt-6 md:mt-16 flex items-center md:mb-12 flex-row justify-between text-pretty ">
      <h1 className="text-4xl font-bold font-serif leading-tight tracking-tighter md:pr-8 md:text-6xl">
        <Link href={'/'}>{title}</Link>
      </h1>
      <div className="flex  gap-12 overflow-x-hidden">
        <Example posts={posts} />
        <HamburgerMenu />
      </div>

    </header>
  )
}
