import React from "react";
import Editor from "@stfy/react-editor.js";

const TextEditor = props => {
  return (
    <Editor
      onReady={() => {}}
      autofocus
      holderId="editorjs-wrapper"
      {...props}
    />
  );
};

export default TextEditor;
