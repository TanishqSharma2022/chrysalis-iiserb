import IndexPage from 'components/IndexPage'
import Navbar from 'components/Navbar'
import PageLayout from 'components/PageLayout'
import PreviewIndexPage from 'components/PreviewIndexPage'
import { readToken } from 'lib/sanity.api'
import { getAllEditions, getAllPosts, getAllPostsCategories, getClient, getSettings } from 'lib/sanity.client'
import { Editions, Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  posts: Post[]
  settings: Settings,
  editions: Editions[],
  categories: any
}

interface Query {
  [key: string]: string
}

export default function Members(props: PageProps) {
  const { posts, settings, editions, categories } = props;

  return (
    <>
      <PageLayout>
        <IndexPage settings={settings} posts={posts} editions={editions} categories={categories} />
      </PageLayout>
    </>
    )
}



export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, posts = [], editions, categories] = await Promise.all([
    getSettings(client),
    getAllPosts(client),
    getAllEditions(client),
    getAllPostsCategories()
  ])

  return {
    props: {
      posts,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
      editions,
      categories
    },
  }
}
