import React from 'react';
import {Router, Route, Link} from 'react-router';

const ShortPost = ({ post }) => {
     return (
        <div className="post">
            <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
            <div className="date">{post.date}</div>
            <p>{post.summary}</p>
        </div>
     )
}

ShortPost.propTypes = {
    post: React.PropTypes.object.isRequired
}

export default ShortPost;