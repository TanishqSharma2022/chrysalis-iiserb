import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import React from 'react'
import AuthorAvatar from './AuthorAvatar'
import Date from 'components/PostDate'
import Link from 'next/link'


const BlogCard = ({post}) => {
  return (
    <div className='rounded-xl cursor-pointer min-h-[400px]'>
      {/* <img src={post.coverImage.asset.url} alt={post.title} className='w-full h-full object-cover rounded-xl' /> */}
      <Image
        className=" object-cover rounded-xl hover:brightness-50 aspect-[16/9] shadow-lg "
        width={2000}
        height={2000}
        alt=""
        src={urlForImage(post.coverImage.asset).height(1000).width(1900).url()}
        sizes="100vw"
      />

        <Link href={`/posts/${post.slug}`} target='_blank'>
          <h1 className=' font-sfbold hover:underline text-lg mt-4'>{post.title}</h1></Link>
        <p className=' text-xs font-sfregular truncate mt-4'>{post.excerpt}</p>
        <div className='mt-4 flex gap-4 text-[10px] items-center font-sflregular'>
        {post.author && <AuthorAvatar name={post.author?.name} picture={post.author?.picture} />} .
        <Date dateString={post.date} />

        </div>

      
      
    </div>
  )
}

export default BlogCard
