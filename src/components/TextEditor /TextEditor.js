import React from "react";
import Editor from "@stfy/react-editor.js";

const TextEditor = props => {
  return <Editor autofocus holderId="editorjs-wrapper" {...props} />;
};

export default TextEditor;
