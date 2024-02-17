import { Menu } from "lucide-react";
import BlogHeader from "./BlogHeader";

import { useState } from "react";
import SearchCommand from "./SearchCommand";

export default function Navbar(){
    const title = "Chrysalis."
    const description = ["A blog about web development, design, and other things I find interesting."]

    return(
        <header className="px-12 mb-10 mt-16 flex items-center md:mb-12 flex-row justify-between text-pretty">
          <h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
            {title}
          </h1>
          <div className="flex gap-12">
          <SearchCommand />
          <Menu />
          </div>
          <div>
            
          </div>
        </header>
    )
}