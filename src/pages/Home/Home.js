import React from "react";
import PageWrapper from "../../templates/PageWrapper";
import Feedback from "../../components/Feedback";

const Home = () => {
  return (
    <PageWrapper>
      <Feedback text="Selecione ou crie um novo documento" />
    </PageWrapper>
  );
};

export default Home;
