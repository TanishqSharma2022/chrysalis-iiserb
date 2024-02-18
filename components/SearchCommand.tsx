// "use client"

import {  useState } from 'react'
import {  Search } from 'lucide-react'


export default function SearchCommand({open, setOpen, posts}) {


    return(
        <>
        <button className='border' onClick={()=>setOpen(!open)}>
          <Search />
        </button>
        

    </>
    )

}




  // <CommandDialog open={open} onOpenChange={setOpen}>
//   <Command>
//   <CommandInput placeholder="Type a command or search..." />
//   <CommandList>
//       <CommandEmpty>No results found.</CommandEmpty>
//       <CommandGroup heading="Suggestions">
//       <CommandItem>Calendar</CommandItem>
//       <CommandItem>Search Emoji</CommandItem>
//       <CommandItem>Calculator</CommandItem>
//       </CommandGroup>
//   </CommandList>
//   </Command>
      
// </CommandDialog>