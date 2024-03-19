// components/Layout.tsx
import { ReactNode, useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import { getAllPosts, getClient, getSettings, getAllEditions, getAllPostsCategories } from 'lib/sanity.client';
import { readToken } from 'lib/sanity.api';



import { motion, useScroll, useSpring, useTransform } from "framer-motion";

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
      setPosts(post)
  }
  getPosts();
  }, [])



    return posts && (
      <div >
        <Navbar posts={posts[0]} />
        <motion.div className="fixed z-[50] origin-left top-0 left-0 h-[4px] right-0 bg-gradient-to-r from-sky-400 to-indigo-500" />
        <motion.div 
        className=' flex flex-col'
        >
        {children}
        </motion.div>

      </div>
    );


}
