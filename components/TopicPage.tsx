import Navbar from 'components/Navbar'
import Layout from 'components/BlogLayout'
import HeroPost from 'components/HeroPost'
import IndexPageHead from 'components/IndexPageHead'
import LandingMorePosts from 'components/LandingPage/LandingMoreStories'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import {Carousel} from './Carousel'
import {EditionCarousel} from './EditionCarousel/EditionCarousel'
import BlogCard from './BlogCard'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings,
}


export default function TopicPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props
  const [heroPost, ...morePosts] = posts || []

  return (
    <>
      <IndexPageHead settings={settings}  />
      <Layout preview={preview} loading={loading} >
          <h1 className='font-bold font-sfheavy'>Find posts about {heroPost && heroPost.category.name}</h1>
          <div className=' mx-auto w-full mt-12 min-h-screen md:mt-6 px-6 md:px-24 md:grid md:grid-cols-6 md:gap-12 place-items-start'>
            <div className='col-span-4'>
          {heroPost && (
            <BlogCard post={heroPost} />
            )}


              
          </div>
          </div>
      </Layout>
      
    </>
  )
}



