import React from 'react';
import {Editor, EditorState} from 'draft-js';
import ReactfireMixin from 'reactfire';
import Firebase from 'firebase';
import Rebase from 're-base'
import DraftEditor from './Draft/DraftEditor';
import QuilEditor from './Quil/QuilEditor';

const base = Rebase.createClass('https://nazaninblog.firebaseio.com/')

class PostEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {
                date: '',
                title: '',
                summary: '',
                id: ''
            }
        }
    }
    getTitleRef(ref) {
        this.state.post.title = ref;
    }
    getDateRef(ref) {
        this.state.post.date = ref;
    }
    getSummaryRef(ref) {
        this.state.post.summary = ref;
    }
    handleSumbit() {
        console.log('submitting');
        var newNote = {};
        newNote.date = this.postDateRef;
        newNote.title = this.postTitleRef;
        newNote.summary = this.postSummaryRef;

    }
    handleAddPost(newNote) {
       base.post('posts', {
           data: this.state.notes.concat([newNote])
      });
    }
    render() {
        return (
            <div className="row">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Write a new Post</h3>
                        </div>
                        <div className="panel-body">
                            <form className="editForm" onSubmit={() => this.handleSumbit()}>
                                <h5>Title:</h5>
                                <input type="text" className="form-control" placeholder="title" ref={(ref) => this.getTitleRef(ref)}/>
                                <h5>Date:</h5>
                                <input type="text" className="form-control" placeholder="date" ref={(ref) => this.getDateRef(ref)}/>
                                <h5>Summary:</h5>
                                <input type="text" className="form-control" placeholder="summary..." ref={(ref) => this.getSummaryRef(ref)}/>
                                <h5>Body:</h5>
                                <QuilEditor />
                                <br/>
                                <button className="btn btn-primary btn-discard">Discard</button>
                                <button type="submit" className="btn btn-primary btn-publish">Publish</button>
                            </form>
                        </div>
                    </div>
             </div>
        )
    }
}

export default PostEditor;