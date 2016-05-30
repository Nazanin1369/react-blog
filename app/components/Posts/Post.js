import React from 'react';
import ReactfireMixin from 'reactfire';
import Firebase from 'firebase';
import Rebase from 're-base';
const base = Rebase.createClass('https://nazaninblog.firebaseio.com/nazaninblog')

class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            postObj: {
                title: "",
                date: "",
                id: "",
                summary: ""
            }
        }
    }
    componentDidMount() {
       this.init(this.props.routeParams.postId);
    }
    componentWillReceiveProps(nextProps) {
        this.init(nextProps.routeParams.postId);
    }
    componentWillUnmount() {
      base.removeBinding(this.ref);
    }
    init(postId) {
       base.bindToState(`posts/${postId}`, {
            context: this,
            state: 'postObj'
        });
    }
    render() {
         return (
            <div className="post">
                <h2><a>{this.state.postObj.title}</a></h2>
                <div className="date">{this.state.postObj.date}</div>
                <div className="post-content" dangerouslySetInnerHTML={{__html: this.state.postObj.content}}>
                </div>
            </div>
        )
    }
}

export default Post;