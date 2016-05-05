import React from 'react';
import ReactfireMixin from 'reactfire';
import Firebase from 'firebase';
import Rebase from 're-base';
const base = Rebase.createClass('https://nazaninblog.firebaseio.com/')

class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            postObj: {
                title: "",
                date: "",
                summary: ""
            }
        }
    }
    componentDidMount() {
       this.init(this.props.routeParams.postTitle);
    }
    componentWillReceiveProps(nextProps) {
        this.init(nextProps.routeParams.postTitle);
    }
    componentWillUnmount() {
      base.removeBinding(this.ref);
    }
    init(postTitle) {
        base.bindToState('posts/p1', {
            context: this,
            state: 'postObj'
        });
    }
    render() {
         return (
            <div className="post">
                <h2><a href="#">{this.state.postObj.title}</a></h2>
                <div className="date">{this.state.postObj.date}</div>
                <p>{this.state.postObj.summary}</p>
            </div>
        )
    }
}

export default Post;