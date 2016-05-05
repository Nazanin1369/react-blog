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
            posts: [
                {
                   title: 'Two Weird Tricks with Redux',
                   date:  'April 13, 2016',
                   summary: 'I have now used Redux pretty extensively in multiple projects by now, especially the Firefox Developer Tools. While I think it breaks down in a few specific scenarios, generally I think it holds up well in complex apps. Certainly nothing is perfect, and the good news is when you want to do something outside of the normal workflow, it’s not hard.'
                }
            ]
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
        console.log(this.state)
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