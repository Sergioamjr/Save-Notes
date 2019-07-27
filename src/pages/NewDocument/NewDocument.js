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
            text: "Título do novo documento",
            level: 1
          }
        }
      ],
      version: "2.12.4"
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
