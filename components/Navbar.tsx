"use client"
import { Menu } from 'lucide-react'
import SearchCommand from './SearchCommand'
import { useState } from 'react';
import { Example } from './commandPallete/CmdkPallete'

export default function Navbar() {
  const title = 'Chrysalis.'
  const [searchDialogOpen, setSearchDialogOpen] = useState(false);

  const handleSearchButtonClick = () => {
    setSearchDialogOpen(!searchDialogOpen);
  };

  return (
    <header className="px-12 md:px-24 mb-10 mt-16 flex items-center md:mb-12 flex-row justify-between text-pretty">
      <h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
        {title}
      </h1>
      <div className="flex  gap-12">
        {/* <Example /> */}
        <button onClick={handleSearchButtonClick}>Search</button>
        <Menu />
      </div>
      {searchDialogOpen && <Example />}

    </header>
  )
}
