import React from 'react';
import {Router, Route, Link} from 'react-router';

const ShortPost = ({ post }) => {
     return (
        <div className="short-post">
            <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
            <div className="date">{post.date}</div>
        </div>
     )
}

ShortPost.propTypes = {
    post: React.PropTypes.object.isRequired
}

export default ShortPost;