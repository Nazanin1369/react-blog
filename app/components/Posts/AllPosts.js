import React from 'react';

const AllPosts = ({ posts }) => {
     return (
            <ul className="list-group" >
                {posts.map((post, index) => (
                    <div className="post" key={index}>
                        <h4><a href="#">{post.title}</a></h4>
                    </div>
                ))}
            </ul>
        )
}

AllPosts.propTypes = {
    posts: React.PropTypes.array.isRequired
}