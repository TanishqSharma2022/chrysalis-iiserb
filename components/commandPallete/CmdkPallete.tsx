"use client"
import { useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,

} from "components/ui/command"
import { Copy, Search } from "lucide-react"
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "lib/sanity.image";



export function Example({posts}) {
  const [open, setOpen] = useState(false)
  const handleSearchButtonClick = () => {
    setOpen(!open); // Toggle the `open` state
  };


  
  return (
    <>
    <button onClick={handleSearchButtonClick}><Search /></button>
    
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..."  />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Posts">
          {posts.slice(0, 5).map((post) => {
            return(
                <Link key={post.slug} href={`/posts/${post.slug}`} >
              <CommandItem className=" ">
                <div className="truncate ... w-[80%] flex items-center gap-2">
                  <div className="w-10 h-10 aspect-square">
                      <Image
                      className="h-auto w-full"
                      width={100}
                      height={100}
                      alt=""
                      src={urlForImage(post.coverImage.asset._ref).height(100).width(100).url()}
                       />  
                  </div>
                    <h1>
                    {post.title}
                    </h1>
                    </div>
                    <Link href={`/topic/${post.category.name}`}>
                    {post.category.name}
                    </Link>
              </CommandItem>
                </Link>
            )
          })}

        </CommandGroup>
      </CommandList>
    </CommandDialog>

    </>
  )
}




