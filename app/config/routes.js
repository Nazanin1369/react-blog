import React from 'react';
import {Route, IndexRoute}  from 'react-router';
import Main from '../components/Main';
import Content from '../components/Content';
import Post from '../components/Posts/Post';

export default(
    <Route path="/" component={Main}>
       <Route path="/blog" component={Content}/>
       <Route path="/post/:postTitle" component={Post}/>
    </Route>
);