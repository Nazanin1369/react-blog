import React from 'react';
import ReactQuill from 'react-quill';

class QuilEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onTextChange(value) {
        this.setState({text: value});
    }

    render() {
    return (
        <div>
            <div className="col-xs-6">
                <ReactQuill
                    theme='snow'
                    value={this.state.text}
                    onChange={this.onTextChange.bind(this)} />
            </div>
            <div className="col-xs-6">
                <pre className="preview language-markup">
                    <code className=" language-markup" >
                        {this.state.text}
                    </code>
                </pre>
            </div>
       </div>
    );
  }
}


export default QuilEditor;