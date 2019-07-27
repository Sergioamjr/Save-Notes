import React from "react";
import Editor from "@stfy/react-editor.js";
import { SetSwitchAsTrue } from "../../store/notes/index";
import { connect } from "react-redux";

const TextEditor = props => {
  return (
    <Editor
      onReady={() => {
        setTimeout(() => {
          props.dispatch(SetSwitchAsTrue());
        }, 500);
      }}
      autofocus
      holderId="editorjs-wrapper"
      {...props}
    />
  );
};

export default connect()(TextEditor);
