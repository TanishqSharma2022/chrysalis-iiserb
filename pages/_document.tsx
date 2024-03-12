
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import { getAllPosts, getClient } from 'lib/sanity.client'
import { Head, Html, Main, NextScript } from 'next/document'
import { useEffect, useState } from 'react'

export default function Document() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts(){
      const client = getClient();
      const post = await Promise.all([getAllPosts(client)]);;
      console.log(post)
      setPosts(post)
  }
  getPosts();
  }, [])
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head />
      <body className="bg-white text-black" suppressHydrationWarning>
        {/* <Navbar posts={posts} /> */}
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
