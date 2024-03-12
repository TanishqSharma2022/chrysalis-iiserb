'use client'

import React from 'react'
import BlogCard from './BlogCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/ui/tabs'
import post from 'schemas/post'

const BrowseBlogs = ({ posts, categories }) => {
  return (
    <div className="w-full ">
      <h1 className="font-bold text-2xl md:text-5xl font-sfheavy">Browse Blogs</h1>
      <div className="w-full mt-6  flex flex-col items-center ">
        <Tabs defaultValue="Recents" className="w-full relative min-h-screen">
          <TabsList className='overflow-x-scroll w-full'>
            <TabsTrigger value="Recents">Recents</TabsTrigger>
            {categories.map((category: any, index: number) => {
              return (
                <TabsTrigger value={category.name} key={index}>
                  {category.name}
                </TabsTrigger>
              )
            })}
          </TabsList>
          <TabsContent
            value="Recents"
            className="w-[100%] grid grid-cols-1 md:grid-cols-3 gap-8 mt-6" 
          >
            {posts.slice(0, 6).map((post, index) => {
              return (
                <div key={index}>
                  <BlogCard post={post} />
                </div>
              )
            })}
          </TabsContent>
          {categories.map((category, index) => {
            return (
              <TabsContent
                key={index}
                value={category.name}
                className="grid grid-cols-1 md:grid-cols-3 md:gap-8 "
              >
                {posts
                  .filter((post) => post.category.name == category.name)
                  .slice(0, 6)
                  .map((post, index) => {
                    if (post.category.name == category.name) {
                      return <BlogCard key={index} post={post} />
                    }
                    return null
                  })}
              </TabsContent>
            )
          })}
        </Tabs>
        {/* <div className='w-full border grid place-items-center justify-center py-6'>
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full  text-xs font-semibold leading-6  text-white ">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
    <span>
      View More
    </span>
    <svg
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </div>
  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
        </div> */}
      </div>
    </div>
  )
}

export default BrowseBlogs
