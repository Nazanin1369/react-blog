import React from 'react';
import {Route, Router,  IndexRoute, browserHistory}  from 'react-router';
import Main from '../components/Main';
import NoMatch from '../components/NoMatch';
import Content from '../components/Content';
import Post from '../components/Posts/Post';
import PostEditor from '../components/Editor/PostEditor'

export default(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <Route path="/blog" component={Content}/>
            <Route path="/post/:postId" component={Post}/>
            <Route path="/edit" component={PostEditor}/>
        </Route>
        <Route path="*" component={NoMatch}/>
    </Router>
);