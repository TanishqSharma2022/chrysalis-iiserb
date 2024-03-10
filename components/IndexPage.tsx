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
import { EditionCard } from 'components/edition_card/EditionCard'


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
      {/* Carousel  */}
      <Carousel posts={posts} />
      {/* Post Previews */}
      <Layout preview={preview} loading={loading}>
          <div className=' mx-auto w-full mt-12 md:mt-24 px-6 md:px-24 md:grid md:grid-cols-6 md:gap-12   justify-center'>
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
      {/* Editions Sections */}
      <Layout preview={preview} loading={loading}>
          <div className="w-full mt-24 bg-[url(https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover border h-[30vh]">
          </div>
          <div className='md:px-12'>
          <div className=' shadow-lg mx-auto text-center border -mt-24 bg-white'>
            <h1 className=' mt-24 font-bold text-4xl md:text-6xl'>Our Editions</h1>
            <div className='md:p-12  flex'>
              <EditionCarousel coverImage={editions} />
            </div>
            </div>
          </div>  
      </Layout>
      {/* Category sections */}
      <Layout preview={preview} loading={loading}>
        <div className='w-full md:p-24 p-8'>
        <h1 className='font-bold mt-12 text-5xl '>Topic Wise Blogs</h1>
        <Separator />
        <div className='w-full mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 '>

            {categories.map((category:any, index:number) => {
              return(
              <Link href={`/topic/${category.name}`} key={index} className='category relative   hover:scale-110 transition-all grid place-items-center justify-center shadow-lg'>
                 <Image
                className="mx-auto drop-shadow-sm rounded-xl hover:drop-shadow-lg  "
                width={400}
                height={100}
                alt=""
                src={urlForImage(category.coverImage?.asset._ref)
                  .height(500)
                  .width(800)
                  ?.url()}
              />
                <div className="absolute w-full h-full md:opacity-0 overlay bg-black/40 hover:bg-black/60 rounded-xl transition-all text-lg hover:text-2xl cursor-pointer text-white flex items-center justify-center">
                <h1 className='p-6 font-bold  '>{category.name}</h1>


                </div>

              </Link>)
            })}
        </div>
        </div>
      </Layout>
      <Layout  preview={preview} loading={loading}>
            {/* <EditionCard /> */}
            <div></div>
      </Layout>

      
    </div>
  )
}



