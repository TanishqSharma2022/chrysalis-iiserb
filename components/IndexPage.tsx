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
import MainCarousel from './MainCarousel/MainCarousel'
import '../css/embla.css'
import '../css/base.css'
import QuoteOfTheDay from './QuoteOfTheDay'
import BrowseBlogs from './BrowseBlogs'
import { TabsDemo } from './ui/EditionTabDemo'




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

      {/* <MainCarousel slides={SLIDES} options={OPTIONS} /> */}



      {/* Carousel  */}
      <Carousel posts={posts} />


      {/* Post Previews */}
      <Layout preview={preview} loading={loading} >
        <div className=' md:px-24 px-4 md:py-12'>
        <QuoteOfTheDay />
        </div>
      </Layout>
      <Layout preview={preview} loading={loading}>
          <div className=' mx-auto w-full  px-6 md:px-24 md:py-12 '>
          <BrowseBlogs posts={posts} categories={categories}/>
          </div>
      </Layout>
      {/* Editions Sections */}
      <Layout preview={preview} loading={loading}>
          <div className="w-full bg-gradient-to-br from-sky-300 to-blue-700 bg-cover h-[50vh] bg-fixed">
          </div>
          <div className='md:px-12 rounded-xl  min-h-[65rem]'>
          <div className=' shadow-lg md:py-24 py-12 p-2 md:p-24 text-center -mt-72 bg-white rounded-2xl h-[40rem] md:h-[60rem]'>
              <h1 className=' font-bold  font-sfheavy text-6xl bg-gradient-to-br from-sky-500 to-blue-800 bg-clip-text text-transparent'>Our Editions</h1>
              <TabsDemo editions={editions} />
            </div>
          </div>  
      </Layout>
      {/* Category sections */}
      {/* <Layout preview={preview} loading={loading}>
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
      </Layout> */}
      <Layout  preview={preview} loading={loading}>
      <div className='w-full md:px-24 md:py-12 px-4'>
        <h1 className='font-sfheavy mt-12 text-5xl '>Podcasts</h1>
        <Separator />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mt-12'>
        <iframe className='rounded-xl w-full aspect-[16/9]'  src="https://www.youtube.com/embed/90Aiidf2i-U?si=LBADkp_M4UKjugN1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
        </iframe>
        <iframe className='rounded-xl w-full aspect-[16/9]' src="https://www.youtube.com/embed/JYnRkJZaG9c?si=kCJHrk8VkGvFKn6R" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
        </iframe>
        <iframe className='rounded-xl w-full aspect-[16/9]' src="https://www.youtube.com/embed/8nxmBWHcdwo?si=XJSSA6tiqpOHmi-k" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
        </iframe>
        <iframe className='rounded-xl w-full aspect-[16/9]' src="https://www.youtube.com/embed/AmkbFBczEAY?si=iEYZUCka5q5hvLsz" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
        </iframe>
        <iframe className='rounded-xl w-full aspect-[16/9]' src="https://www.youtube.com/embed/ZY0Hi6U7nZI?si=VF_tm8ETz2xHCPIA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
        </iframe>
        <iframe className='rounded-xl w-full aspect-[16/9]' src="https://www.youtube.com/embed/eZi07kYBD1k?si=hLvWkw4OdGclqmPa" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
        </iframe>
        </div>
        </div>
      </Layout>

      <Layout  preview={preview} loading={loading}>
      <div className='w-full md:p-24 p-8'>
        <h1 className='font-sfheavy mt-12 text-5xl '>Events</h1>
        <Separator />
      </div>
      </Layout>

      
    </div>
  )
}



