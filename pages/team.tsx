import Navbar from 'components/Navbar'
import TeamCard from 'components/TeamCard'
import React from 'react'
import PreviewIndexPage from 'components/PreviewIndexPage'
import { readToken } from 'lib/sanity.api'
import { getAllEditions, getAllPosts, getAllPostsCategories, getClient, getSettings } from 'lib/sanity.client'
import { Editions, Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'
import members from '../data/member.js';


interface PageProps extends SharedPageProps {
  posts: Post[]

}

interface Query {
  [key: string]: string
}

const team = (props:PageProps) => {
  const { posts } = props;
  const magazine = members.filter(member => member.Team === 'Magazine')
  const scicomm = members.filter(member => member.Team === 'Sci-Comm')
  const coordinators = members.filter(member => member.Roles === 'Coordinator')
  return (
    <div className='overflow-x-hidden'>

    <Navbar posts={posts}/>

    <div className='min-h-screen w-full grid items-center justify-center'>
    <h1 className='font-bold text-center text-3xl md:text-6xl'>Our Team</h1>

    <h1 className='font-bold text-center text-xl md:text-3xl mt-12'>Coordinators</h1>
        <div className='grid md:grid-cols-2 gap-12 '>
          {coordinators.map((member, index) => (
              <TeamCard key={index} memberInfo={member} />
          )
          )}

      </div>
      <h1 className='font-bold text-center text-3xl mt-12'>Magazine Team</h1>
        <div className='grid md:grid-cols-3 gap-12 '>
          {magazine.map((member, index) => (
            <TeamCard key={index} memberInfo={member} />
          )
          )}

      </div>
      <h1 className='font-bold text-center text-3xl mt-12'>Sci-Comm Team</h1>
        <div className='grid md:grid-cols-3 gap-12 '>
          {scicomm.map((member, index) => (
            <TeamCard key={index} memberInfo={member} />
          )
          )}

      </div>
    </div>
    </div>
  )
}

export default team


export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [posts = []] = await Promise.all([
    getAllPosts(client),
  ])

  return {
    props: {
      posts,

      draftMode,
      token: draftMode ? readToken : '',

    },
  }
}
