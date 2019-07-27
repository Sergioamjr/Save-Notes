import React from "react";
import PageWrapper from "../../templates/PageWrapper";
import TextEditor from "../../components/TextEditor ";

class NewDocument extends React.Component {
  state = {
    data: {
      time: new Date().getTime(),
      blocks: [
        {
          type: "header",
          data: {
            text: "",
            level: 1
          }
        }
      ]
    }
  };

  onChange = data =>
    this.setState({
      data
    });
  render() {
    return (
      <PageWrapper>
        <TextEditor onChange={this.onChange} data={this.state.data} />
        <div id="editorjs-wrapper" />
      </PageWrapper>
    );
  }
}

export default NewDocument;
