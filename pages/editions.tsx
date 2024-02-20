import { readToken } from 'lib/sanity.api'
import {
  getAllEditions,
  getClient,
  getSettings,
  getAllPosts
} from 'lib/sanity.client'
import { Settings, Editions, Post } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'
import EditionsPage from 'components/EditionsPage'

interface PageProps extends SharedPageProps {
  editions: Editions[]
  settings?: Settings
  posts: Post[]
}

interface Query {
  [key: string]: string
}

export default function EditionsRoute(props: PageProps) {
    const { settings, editions, posts } = props
    // if (draftMode) {
    //   return <PreviewIndexPage posts={posts} settings={settings} />
    // }
  
    return <EditionsPage settings={settings} editions={editions} posts={posts}/>
  }

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
    const { draftMode = false, params = {} } = ctx
    const client = getClient(draftMode ? { token: readToken } : undefined)
    const [settings, editions, posts] = await Promise.all([
        getSettings(client),
        getAllEditions(client),
        getAllPosts(client)
    ])

    return {
        props: {
            settings,
            editions,
            posts,
            draftMode,
            token: draftMode ? readToken : '',
        },
    }
}