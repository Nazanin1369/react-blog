import React from 'react';
import ReactfireMixin from 'reactfire';
import Firebase from 'firebase';
import Rebase from 're-base'
import QuilEditor from './Quil/QuilEditor';
import Router from 'react-router';

const base = Rebase.createClass('https://nazaninblog.firebaseio.com/')

class PostEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {
                date: '',
                title: '',
                summary: '',
                id: '',
                content: ''
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

    getContentRef(ref) {
        this.state.post.content = ref;
    }

    handleSumbit() {
        var newNote = {};
        this.state.post.id = (this.state.post.title.value).replace(/\s+/g, '').replace('.', '');
        newNote.id = this.state.post.id;
        newNote.date = this.state.post.date.value.trim();
        newNote.title = this.state.post.title.value;
        newNote.summary = this.state.post.summary.value;
        newNote.content = this.state.post.content;
        console.log(newNote, this.state)
        base.post(`posts/${newNote.id}`, {
            data: newNote,
        then(){
            console.log('done')
        }
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
                                <QuilEditor setContent={(ref) => this.getContentRef(ref)}/>
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