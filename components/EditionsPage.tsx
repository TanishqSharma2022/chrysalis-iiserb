import Navbar from 'components/Navbar'
import Layout from 'components/BlogLayout'
import IndexPageHead from 'components/IndexPageHead'
import type { Editions, Settings, Post } from 'lib/sanity.queries'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import styles from './EditionsPage.module.css'

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
      <Navbar posts={posts} />
      <IndexPageHead settings={settings} />
      <Layout preview={preview} loading={loading}>
          <div className="w-full bg-[url(https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover border h-[30vh]">
          </div>
          <div className='md:px-12'>
          <div className=' -mt-24 bg-white shadow-lg mx-auto text-center'>
            <h1 className=' py-12 font-bold text-4xl md:text-6xl'>Our Editions</h1>
            <div className='md:p-12 border flex'>
                <Layout preview={preview} loading={loading}>
                <div className={styles.editions}>
                    {editions.map((image: any, index: number) => (
                        <a target='_blank' href={image.pdf_download_url} className='cursor-pointer mt-4 hover:underline'>
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
                </Layout>
            </div>
            </div>
          </div>  
      </Layout>       
    </>
  )
}



