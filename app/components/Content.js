import React from 'react';

class Content extends React.Component {
    render() {
        return (
            <div className="container">
               <section className="posts">
                    <div className="post">
                    <h1><a href="/Two-Weird-Tricks-with-Redux">Two Weird Tricks with Redux</a></h1>
                    <div className="date">April 13, 2016</div>
                    <p>I have now used Redux pretty extensively in multiple projects by now, especially the Firefox Developer Tools. While I think it breaks down in a few specific scenarios, generally I think it holds up well in complex apps. Certainly nothing is perfect, and the good news is when you want to do something outside of the normal workflow, it’s not hard.</p>
                    </div>

                    <div className="post">
                    <h1><a href="/RIP-Over-Engineered-Blog">RIP Over-Engineered Blog</a></h1>
                    <div className="date">April 01, 2016</div>
                    <p>It’s been 6 months since my last blog rewrite, so it’s time for another one. This time, let’s subtract.</p>
                    </div>

                    <div className="post">
                    <h1><a href="/Moving-Breakpoints-Intelligently">Moving Breakpoints Intelligently</a></h1>
                    <div className="date">February 26, 2016</div>
                    <p>In most debuggers, a breakpoint will "slide" if the clicked line doesn't have any code. This is supposed to be a helpful feature, but it becomes **infuriating** if it behaves wrongly. In Firefox 46, we made our breakpoint sliding algorithm much more robust.</p>
                    </div>

                    <div className="post">
                    <h1><a href="/On-the-Road-to-Better-Sourcemaps-in-the-Firefox-Developer-Tools">On the Road to Better Sourcemaps in the Firefox Developer Tools</a></h1>
                    <div className="date">January 11, 2016</div>
                    <p>In this post, I explain why it has taken so long to get the Firefox console sourcemapped. It requires an unobtrusive debug mode which is really hard to do, but we got it working. The console now has access to sourcemaps, so we are only one small step away from getting it working.</p>
                    </div>

                    <div className="post">
                    <h1><a href="/Starters-and-Maintainers">Starters and Maintainers</a></h1>
                    <div className="date">December 29, 2015</div>
                    <p>"It’s late Friday night, my wife is already asleep, and I finally found time to go through those pull requests on that old project I put up on github last year. My daughter is getting up at 7:30 though, so I better not stay up too late. ..."</p>
                    </div>
                    <div className="right-link"><a href="/archive">View All Posts</a></div>
                </section>
            </div>
        )
    }
}

export default Content;