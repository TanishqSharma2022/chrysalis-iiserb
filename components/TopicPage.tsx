import Navbar from 'components/Navbar'
import Layout from 'components/BlogLayout'
import HeroPost from 'components/HeroPost'
import IndexPageHead from 'components/IndexPageHead'
import LandingMorePosts from 'components/LandingPage/LandingMoreStories'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import {Carousel} from './Carousel'
import {EditionCarousel} from './EditionCarousel/EditionCarousel'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings,
}


export default function TopicPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props
  const [heroPost, ...morePosts] = posts || []
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <Navbar posts={posts} />



      <IndexPageHead settings={settings} />
      <Layout preview={preview} loading={loading}>
          <div className=' mx-auto w-full mt-12 md:mt-6 px-6 md:px-24 md:grid md:grid-cols-6 md:gap-12 place-items-start'>
            <div className='col-span-4'>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              category={heroPost.category}

            />
          )}
          </div>
          <div className='col-span-2'>
          {morePosts.length > 0 && <LandingMorePosts posts={morePosts} />}
          </div>
          </div>
      </Layout>
      
    </>
  )
}



