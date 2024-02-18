import LandingPostPreview from 'components/LandingPage/LandingPostPreview'
import type { Post } from 'lib/sanity.queries'

export default function LandingMorePosts({ posts }: { posts: Post[] }) {
  return (
    <section>
      <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tight">
        More Stories
      </h2>
      <div className=" ">
        {posts.map((post) => (
          <div key={post.slug} className='grid grid-cols-1 gap-y-6 '>
          <LandingPostPreview
            key={post._id}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
          <img src='/seperatorLine.png' alt='seperator line' />
          </div>
        ))}
      </div>
    </section>
  )
}
