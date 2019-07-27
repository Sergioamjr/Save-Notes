import React from "react";
import Editor from "@stfy/react-editor.js";

const MyEditor = () => {
  return (
    <Editor
      autofocus
      holderId="editorjs-container"
      onChange={data => console.log(data)}
      data={{
        time: 1554920381017,
        blocks: [
          {
            type: "header",
            data: {
              text: "Hello Editor.js",
              level: 2
            }
          }
        ],
        version: "2.12.4"
      }}
    />
  );
};

export default MyEditor;
