import Image from 'next/image'
import Link from 'next/link'
import { memo, useSyncExternalStore } from 'react'

const subscribe = () => () => {}

export default memo(function IntroTemplate() {
  const studioURL = useSyncExternalStore(
    subscribe,
    () => `${window.location.origin}/studio`,
    () => null,
  )
  const createPostURL = useSyncExternalStore(
    subscribe,
    () =>
      `${window.location.origin}/studio/intent/create/template=post;type=post/`,
    () => null,
  )
  const isLocalHost = useSyncExternalStore(
    subscribe,
    () => window.location.hostname === 'localhost',
    () => false,
  )
  const hasUTMtags = useSyncExternalStore(
    subscribe,
    () => window.location.search.includes('utm'),
    () => false,
  )

  const hasEnvFile = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const hasRepoEnvVars =
    process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER &&
    process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER &&
    process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG
  const repoURL = `https://${process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER}.com/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER}/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG}`
  const removeBlockURL = hasRepoEnvVars
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER}.com/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER}/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG}/blob/main/README.md#how-can-i-remove-the-next-steps-block-from-my-blog`
    : `https://github.com/sanity-io/nextjs-blog-cms-sanity-v3#how-can-i-remove-the-next-steps-block-from-my-blog`

  if (hasUTMtags || !studioURL) {
    return
  }

  return (
    <div className="flex justify-center border border-gray-200 bg-gray-50">
      <div className="border mb-8 mt-20 grid max-w-screen-2xl grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32 ">
        
knkj

      </div>
    </div>
  )
})

