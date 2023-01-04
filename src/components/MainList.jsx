import React from "react";
import MainPost from "./MainPost";

const MainList = ({posts,title,remove}) => {
    return(
        <div>
            <h1>POSTS</h1>
            {posts.map((post, index) => 
                <MainPost remove={remove} number={index+1} post={post} key={post.id}/> 
            )}
        </div>
    )
}
export default MainList