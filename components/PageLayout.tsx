// components/Layout.tsx
import { ReactNode } from 'react';
import Navbar from './Navbar';
import { getAllPosts, getClient, getSettings, getAllEditions, getAllPostsCategories } from 'lib/sanity.client';
import { readToken } from 'lib/sanity.api';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  // Fetch data here (useEffect if needed)
  const fetchData = async () => {
    const client = getClient({ token: readToken });
    const [settings, posts, editions, categories] = await Promise.all([
      getSettings(client),
      getAllPosts(client),
      getAllEditions(client),
      getAllPostsCategories(),
    ]);

    // Pass data to Navbar
    // You may need to modify the types based on your data structure
    const navbarProps = {
      posts,
      settings,
      editions,
      categories,
    };

    // Render Navbar and pass data to children
    return (
      <>
        <Navbar posts={posts} />
        {children}
      </>
    );
  };

  return fetchData();
}
