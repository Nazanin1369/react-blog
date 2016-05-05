import React from 'react';
import ShortPost from './ShortPost';

const PostList = ({ posts }) => {
     return (
            <ul className="list-group" >
                {posts.map((post, index) => (
                    <ShortPost post={post} key={index}/>
                ))}
            </ul>
        )
}

PostList.propTypes = {
    posts: React.PropTypes.array.isRequired
}

export default PostList;