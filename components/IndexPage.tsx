
import Layout from 'components/BlogLayout'
import HeroPost from 'components/HeroPost'
import IndexPageHead from 'components/IndexPageHead'
import LandingMorePosts from 'components/LandingPage/LandingMoreStories'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import {Carousel} from './Carousel'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props
  const [heroPost, ...morePosts] = posts || []
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />
      <Carousel posts={posts} />
      <Layout preview={preview} loading={loading}>
          <div className='container mx-auto w-full mt-6  px-12 md:grid md:grid-cols-6 md:gap-12 place-items-start'>
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
      <Layout preview={preview} loading={loading}>
          <div className="w-full bg-[url(https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover border h-[30vh]">
          </div>
          <div className='w-[80%] -mt-24 bg-white min-h-[70vh] shadow-lg mx-auto'>
            asdfasd
          </div>  
      </Layout>
    </>
  )
}
