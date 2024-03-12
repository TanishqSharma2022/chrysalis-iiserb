// components/Layout.tsx
import { ReactNode, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { getAllPosts, getClient, getSettings, getAllEditions, getAllPostsCategories } from 'lib/sanity.client';
import { readToken } from 'lib/sanity.api';

interface LayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: LayoutProps) {
  // Fetch data here (useEffect if needed)
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
    return posts && (
      <>
        <Navbar posts={posts[0]} />
        {children}
      </>
    );


}
