import React from "react";
import PageWrapper from "./templates/PageWrapper";
import MyEditor from "./components/Editor/Editor";

function App(props) {
  return (
    <PageWrapper>
      <p>Conteudo</p>
      <MyEditor />
    </PageWrapper>
  );
}

export default App;
