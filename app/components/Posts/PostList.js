import React from 'react';
import ShortPost from './ShortPost';

const PostList = ({ posts }) => {
    console.log(posts)
     return (
            <ul className="list-group" >
                {posts.map((post, index) => (
                    <ShortPost post={post} key={index}/>
                ))}
            </ul>
        )
}

export default PostList;