import Navbar from 'components/Navbar'
import Layout from 'components/BlogLayout'
import IndexPageHead from 'components/IndexPageHead'
import type { Editions, Settings, Post } from 'lib/sanity.queries'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import styles from './EditionsPage.module.css'
import PageLayout from './PageLayout'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  editions: Editions[]
  settings: Settings,
  posts: Post[]
}

export default function EditionsPage(props: IndexPageProps) {
  const { preview, loading, editions, posts, settings } = props

  return (
    <>
      <PageLayout>
      <IndexPageHead settings={settings} />
      <Layout preview={preview} loading={loading}>
          <div className="w-full bg-gradient-to-t from-blue-200 to-sky-400 bg-cover md:h-[10vh]  lg:h-[30vh]">
          </div>
          <div className='md:px-12'>
          <div className=' -mt-24 bg-white shadow-lg mx-auto text-center'>
            <h1 className=' py-12 text-4xl md:text-6xl font-sfheavy'>Our Editions</h1>
            <div className='md:p-12 flex'>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center place-items-center w-full gap-12">
                    {editions.map((image: any, index: number) => (
                        <a key={index} target='_blank' href={image.pdf_download_url} className='cursor-pointer mt-4 hover:underline'>
                        <div key={image.title} className="md:basis-1/3 flex flex-col justify-center">
                        <Image
                            className="mx-auto drop-shadow-sm hover:drop-shadow-lg  "
                            width={200}
                            height={100}
                            alt=""
                            src={urlForImage(image.coverImage?.asset._ref)
                            .height(800)
                            .width(600)
                            ?.url()}
                        />
                        <h1 className="font-bold text-xl mt-4">{image.title}</h1>
                        <p className="font-semibold text-md mt-4">{image.description}</p>
                        </div>
                        </a>
                    ))}
                </div>

            </div>
            </div>
          </div>  
      </Layout>  
      </PageLayout>     
    </>
  )
}



