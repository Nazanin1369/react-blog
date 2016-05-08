import React from 'react';
import {Editor, EditorState} from 'draft-js';
import DraftEditor from './Draft/DraftEditor';
import QuilEditor from './Quil/QuilEditor';

class PostEditor extends React.Component {
    getTitleRef(ref) {
        this.postTitleRef = ref;
    }
    getDateRef(ref) {
        this.postDateRef = ref;
    }
    getSummaryRef(ref) {
        this.postSummaryRef = ref;
    }
    render() {
        return (
            <div className="row">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Write a new Post</h3>
                        </div>
                        <div className="panel-body">
                            <form className="editForm">
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