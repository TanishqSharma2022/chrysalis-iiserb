import "react-cmdk/dist/cmdk.css";
import CommandPalette, { filterItems, getItemIndex } from "react-cmdk";
import { useEffect, useState } from "react";
import { readToken } from 'lib/sanity.api'
import { getAllPosts, getClient, getSettings } from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'


interface PageProps extends SharedPageProps {
  posts: Post[]

}

interface Query {
  [key: string]: string
}




const Example = ({open, setOpen, posts}) => {
  const [page, setPage] = useState<"root" | "projects">("root");

  const [search, setSearch] = useState("");
  useEffect(() => {
    const onKeydown = (e) => {
       if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setOpen(true);
       }
    };

    window.addEventListener("keydown", onKeydown);

    return () => {
       window.removeEventListener("keydown", onKeydown);
    };
 }, []);

 
  const filteredItems = filterItems(
    [
      {
        heading: "Posts",
        id: "posts",
        items: posts,
      }
    ],
    search
  );
  console.log(filteredItems[0])


  return (
    <CommandPalette
      onChangeSearch={setSearch}
      onChangeOpen={setOpen}
      search={search}
      isOpen={open}
      page={page}
    >
      <CommandPalette.Page id="root">
        {filteredItems.length ? (
          filteredItems.map((list) => (
            <CommandPalette.List key={list.id} heading={list.heading}>
              {list.items.map(({ id, ...rest }) => (
                <CommandPalette.ListItem
                  key={id}
                  index={getItemIndex(filteredItems, id)}
                  {...rest}
                />
              ))}
            </CommandPalette.List>
          ))
        ) : (
          <CommandPalette.FreeSearchAction />
        )}
      </CommandPalette.Page>

      <CommandPalette.Page id="projects">
        Projects page
      </CommandPalette.Page>
    </CommandPalette>
  );
};

export default Example;


