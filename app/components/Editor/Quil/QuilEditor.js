import React from 'react';
import ReactQuill from 'react-quill';

class QuilEditor extends React.Component {

    constructor(props) {
        super(props);
        const that = this;
        this.state = {
            text: ''
        }
    }

    onTextChange(value) {
        console.log(value)
        that.state.text = value;
    }

    render() {
    return (
      <ReactQuill
        theme='snow'
        value={this.state.text}
        onChange={this.onTextChange} />
    );
  }
}


export default QuilEditor;