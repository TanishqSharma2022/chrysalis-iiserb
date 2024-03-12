// components/Layout.tsx
import { ReactNode, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { getAllPosts, getClient, getSettings, getAllEditions, getAllPostsCategories } from 'lib/sanity.client';
import { readToken } from 'lib/sanity.api';
import { CircleIndicator } from './CircleIndicator';


import { motion, useScroll, useSpring } from "framer-motion";

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

    const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
    return posts && (
      <>
        <Navbar posts={posts[0]} />
        <motion.div className="fixed z-[50] origin-left top-0 left-0 h-[4px] right-0 bg-gradient-to-r from-sky-400 to-indigo-500" style={{ scaleX }} />
        {children}

      </>
    );


}
