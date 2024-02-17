
import { readToken } from 'lib/sanity.api'
import { getAllPosts, getClient, getSettings } from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'
import { useEffect, useState } from 'react'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import {  Search } from 'lucide-react'


interface PageProps extends SharedPageProps {
  posts: Post[]
  settings: Settings
}

interface Query {
  [key: string]: string
}


export default function SearchCommand() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
          if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
            e.preventDefault()
            setOpen((open) => !open)
          }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
      }, [])

    return(
        <>
        <button className='border' onClick={() => setOpen(!open)}>
        <Search />
        </button>
        <CommandDialog open={open} onOpenChange={setOpen}>
            <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
                </CommandGroup>
            </CommandList>
            </Command>
                
        </CommandDialog>

    </>
    )

}


export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
    const { draftMode = false } = ctx
    const client = getClient(draftMode ? { token: readToken } : undefined)
  
    const [settings, posts = []] = await Promise.all([
      getSettings(client),
      getAllPosts(client),
    ])
  
    return {
      props: {
        posts,
        settings,
        draftMode,
        token: draftMode ? readToken : '',
      },
    }
  }
  