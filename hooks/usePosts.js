import { queries } from "@testing-library/react";
import React from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(()=> {
        console.log('work');
        if(selectedSort){
          return [...posts].sort((a,b)=> a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    },[selectedSort, posts])
    return sortedPosts
}
export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post=>post.title.toLowerCase().includes(search.toLowerCase()))
    },[search, sortedPosts])
    return sortedAndSearchedPosts
}
