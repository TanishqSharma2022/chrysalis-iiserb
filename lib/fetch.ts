// utils/sanityUtils.ts
import { getAllPosts, getClient, getSettings, getAllEditions, getAllPostsCategories } from 'lib/sanity.client';
import { readToken } from 'lib/sanity.api';

interface CommonProps {
  draftMode: boolean;
}

export async function getCommonProps({ draftMode }: CommonProps) {
  const client = getClient(draftMode ? { token: readToken } : undefined);

  const [settings, posts = [], editions, categories] = await Promise.all([
    getSettings(client),
    getAllPosts(client),
    getAllEditions(client),
    getAllPostsCategories(),
  ]);

  return {
    settings,
    posts,
    editions,
    categories,
  };
}
