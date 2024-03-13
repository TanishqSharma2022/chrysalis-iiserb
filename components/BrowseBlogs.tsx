'use client'

import React from 'react'
import BlogCard from './BlogCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/ui/tabs'
import post from 'schemas/post'

const BrowseBlogs = ({ posts, categories }) => {
  return (
    <div className="w-full   h-fit ">
      <h1 className="font-bold text-2xl md:text-5xl font-sfheavy">Browse Blogs</h1>
      <div className="w-full  mt-6  flex flex-col items-center ">
        <Tabs defaultValue="Recents" className="w-full relative">
          <TabsList className='overflow-x-scroll w-full md:w-fit'>
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
            className="w-[100%] grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-8 mt-6" 
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
                className="grid grid-cols-1 md:grid-cols-3 gap-x-16  "
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
      </div>
    </div>
  )
}

export default BrowseBlogs
