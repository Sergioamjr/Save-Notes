import React from "react";
import PageWrapper from "./templates/PageWrapper";
import MyEditor from "./components/Editor/Editor";

class App extends React.Component {
  render() {
    return (
      <PageWrapper>
        <MyEditor />
      </PageWrapper>
    );
  }
}

export default App;
