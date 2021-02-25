import React from "react";
import PageWrapper from "../../templates/PageWrapper";
import Feedback from "../../components/Feedback";

const Home = () => {
  return (
    <PageWrapper>
      <Feedback text="Select or create a new note" />
    </PageWrapper>
  );
};

export default Home;
