import React from 'react';
import ReactfireMixin from 'reactfire';
import Firebase from 'firebase';
import Rebase from 're-base'
import PostList from './Posts/PostList';

const base = Rebase.createClass('https://nazaninblog.firebaseio.com/')

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        this.init();
    }
    componentWillReceiveProps(nextProps) {
        base.removeBinding(this.ref);
        this.init();
    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }
    init() {
        base.bindToState('posts', {
            context: this,
            asArray: true,
            state: 'posts'
        });
    }
    render() {
        return (
            <div className="container">
               <section className="posts">
                    <PostList posts={this.state.posts} />
                    <div className="right-link"><a href="/archive">View All Posts</a></div>
                </section>
            </div>
        )
    }
}

export default Content;