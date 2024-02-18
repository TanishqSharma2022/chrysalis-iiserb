import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'
import MorePostsImage from 'components/MorePostsImage'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <div className='mt-4 grid grid-cols-3 gap-6  place-items-center justify-center'>
      <div className=" flex col-span-1">
        <MorePostsImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <div className='col-span-2'>
      <div className="mb-2 text-sm">
        <Date dateString={date} />
      </div>
      <h1 className="mb-1 font-bold leading-snug text-lg text-balance">
        <Link href={`/posts/${slug}`} className="  hover:underline">
          {title}
        </Link>
      </h1>
      {author && <div className='text-sm uppercase'>{author.name}</div>}
    </div>
    </div>
  )
}