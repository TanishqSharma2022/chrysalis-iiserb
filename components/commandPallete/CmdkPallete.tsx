import { useEffect, useState } from 'react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from 'components/ui/command'
import {  Search } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { urlForImage } from 'lib/sanity.image'

export function Example({ posts }) {
  const [open, setOpen] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')



  const handleSearchButtonClick = () => {
    setOpen(!open) // Toggle the `open` state
  }

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([])
    } else {
      const filteredPosts = posts.filter(
        (post) =>
          (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.category?.name.toLowerCase().includes(searchQuery.toLowerCase())),
      )
      setSearchResults(filteredPosts)
    }
  }, [searchQuery, posts])

  const renderSearchResults = () => {
    if (searchResults?.length === 0 && searchQuery.trim() !== '') {
      return <CommandEmpty>No results found.</CommandEmpty>
    }

    return searchResults.map((post) => (
      <Link key={post.slug} href={`/posts/${post.slug}`}>
        <CommandItem className=" " key={post.slug}>
          <div className="truncate ... w-[80%] flex items-center gap-2">
            <div className="w-10 h-10 aspect-square">
              <Image
                className="h-auto w-full"
                width={100}
                height={100}
                alt=""
                src={urlForImage(post.coverImage?.asset._ref)
                  .height(100)
                  .width(100)
                  .url()}
              />
            </div>
            <h1>{post.title}</h1>
          </div>
          <Link href={`/topic/${post.category?.name}`}>
            {post.category?.name}
          </Link>
        </CommandItem>
        <CommandSeparator />
      </Link>
    ))
  }

  return (
    <>
      <button onClick={handleSearchButtonClick} className='md:bg-gray-200 flex gap-6 px-4 py-2 items-center rounded-[20px]'>
        <p className='md:flex hidden font-sfregular opacity-50'>Search.</p>
        <Search className='md:size-[18px] hover:scale-110 opacity-50 hover:opacity-100 transition-all btn-search' />
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        {/* <CommandInput /> */}
        <input
          type="text"
          className="w-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out"
          placeholder="Type a command or search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <CommandList>
          <CommandGroup heading="Posts">{renderSearchResults()}</CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
