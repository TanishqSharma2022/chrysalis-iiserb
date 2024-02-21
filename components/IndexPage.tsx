import Navbar from 'components/Navbar'
import Layout from 'components/BlogLayout'
import HeroPost from 'components/HeroPost'
import IndexPageHead from 'components/IndexPageHead'
import LandingMorePosts from 'components/LandingPage/LandingMoreStories'
import * as demo from 'lib/demo.data'
import type { Editions, Post, Settings } from 'lib/sanity.queries'
import {Carousel} from './Carousel'
import {EditionCarousel} from './EditionCarousel/EditionCarousel'
import Image from 'next/image'
import { urlForImage } from 'lib/sanity.image'
import Link from 'next/link'
import { Separator } from "components/ui/separator"



export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings,
  editions: Editions[],
  categories: any

}


export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings, editions, categories } = props
  const [heroPost, ...morePosts] = posts || []

  return (
    <div className='overflow-x-hidden'>
      <IndexPageHead settings={settings} />
      <Carousel posts={posts} />
      <Layout preview={preview} loading={loading}>
          <div className=' mx-auto w-full mt-12 md:mt-24 px-6 md:px-24 md:grid md:grid-cols-6 md:gap-12 place-items-start justify-center'>
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
          <div className='md:px-12'>
          <div className=' -mt-24 bg-white shadow-lg mx-auto text-center'>
            <h1 className=' py-12 font-bold text-4xl md:text-6xl'>Our Editions</h1>
            <div className='md:p-12 border flex'>
              <EditionCarousel coverImage={editions} />
            </div>
            </div>
          </div>  
      </Layout>
      <Layout preview={preview} loading={loading}>
        <div className='w-full md:p-24 p-8'>
        <h1 className='font-bold mt-12 text-5xl '>Topic Wise Blogs</h1>
        <Separator />
        <div className='w-full mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 '>

            {categories.map((category:any, index) => {
              return(
              <Link href={`/topic/${category.name}`} key={index} className=' relative border hover:scale-110 grid place-items-center justify-center shadow-lg'>
                 <Image
                className="mx-auto drop-shadow-sm hover:drop-shadow-lg  "
                width={400}
                height={100}
                alt=""
                src={urlForImage(category.coverImage?.asset._ref)
                  .height(500)
                  .width(800)
                  ?.url()}
              />
                <div className="absolute w-full h-full bg-black/40 hover:bg-black/60 transition-all text-xl hover:text-3xl cursor-pointer text-white flex items-center justify-center">
                <h1 className='p-6 font-bold '>{category.name}</h1>


                </div>

              </Link>)
            })}
        </div>
        </div>
      </Layout>

      
    </div>
  )
}



