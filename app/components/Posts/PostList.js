import React from 'react';

const PostList = ({ posts }) => {
     return (
            <ul className="list-group" >
                {posts.map((post, index) => (
                    <div className="post" key={index}>
                        <h2><a href="#">{post.title}</a></h2>
                        <div className="date">{post.date}</div>
                        <p>{post.summary}</p>
                    </div>
                ))}
            </ul>
        )
}

PostList.propTypes = {
    posts: React.PropTypes.array.isRequired
}

export default PostList;