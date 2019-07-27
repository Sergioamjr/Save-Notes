import React from "react";
import Editor from "@stfy/react-editor.js";
import { SetSwitchAsTrue } from "../../store/notes/index";
import { connect } from "react-redux";

class TextEditor extends React.Component {
  componentDidCatch = () => {};
  render() {
    return (
      <Editor
        onReady={() => {
          this.props.dispatch(SetSwitchAsTrue());
        }}
        autofocus
        holderId="editorjs-wrapper"
        {...this.props}
      />
    );
  }
}

export default connect()(TextEditor);
