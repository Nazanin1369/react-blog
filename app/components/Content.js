import React from 'react';
import PostList from './Posts/PostList';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                   title: 'Two Weird Tricks with Redux',
                   date:  'April 13, 2016',
                   summary: 'I have now used Redux pretty extensively in multiple projects by now, especially the Firefox Developer Tools. While I think it breaks down in a few specific scenarios, generally I think it holds up well in complex apps. Certainly nothing is perfect, and the good news is when you want to do something outside of the normal workflow, it’s not hard.'
                },
                {
                   title: 'RIP Over-Engineered Blog',
                   date:  'April 01, 2016',
                   summary: 'It’s been 6 months since my last blog rewrite, so it’s time for another one. This time, let’s subtract.'
                },
                {
                   title: 'Moving Breakpoints Intelligently',
                   date:  'February 26, 2016',
                   summary: `In most debuggers, a breakpoint will "slide" if the clicked line doesn't have any code. This is supposed to be a helpful feature,
                    but it becomes **infuriating** if it behaves wrongly. In Firefox 46, we made our breakpoint sliding algorithm much more robust.`
                },
                {
                   title: 'On the Road to Better Sourcemaps in the Firefox Developer Tools',
                   date:  'January 11, 2016',
                   summary: `In this post, I explain why it has taken so long to get the Firefox console sourcemapped.
                    It requires an unobtrusive debug mode which is really hard to do, but we got it working.
                    The console now has access to sourcemaps, so we are only one small step away from getting it working.`
                }
            ]
        }
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