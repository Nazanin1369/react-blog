import React from 'react';
import PostList from './Posts/PostList';


const Content = ({ posts }) => {
    console.log(posts)
    return (
             <section className="posts">
                <PostList posts={posts} />
            </section>
        )
}

export default Content;