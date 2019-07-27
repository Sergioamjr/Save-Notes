import React from "react";
import PageWrapper from "../../templates/PageWrapper";
import Feedback from "../../components/Feedback";

const Home = () => {
  return (
    <PageWrapper>
      <Feedback text="Selecione ou crie uma nova nota" />
    </PageWrapper>
  );
};

export default Home;
