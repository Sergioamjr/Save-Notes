import React, { Suspense, lazy } from "react";
import {
  Router,
  Redirect,
  createHistory,
  LocationProvider
} from "@reach/router";
import createHashSource from "hash-source";
import PageWrapper from "../templates/PageWrapper";
import { connect } from "react-redux";
import { fetchNotesAndUpdateStore } from "../utils/app";

let source = createHashSource();
export let history = createHistory(source);

const NewDocument = lazy(() => import("./../pages/NewDocument"));
const Home = lazy(() => import("./../pages/Home"));
const SingleDocument = lazy(() => import("./../pages/SingleDocument"));

const Loading = () => (
  <PageWrapper>
    <p>Loading</p>
  </PageWrapper>
);

const AppRouter = props => {
  React.useEffect(() => {
    fetchNotesAndUpdateStore(props);
  }, [props]);

  return (
    <div>
      <LocationProvider history={history}>
        <Suspense fallback={<Loading />}>
          <Router>
            <NewDocument path="/novo-documento" />
            <SingleDocument path="/documento/:id" />
            <Home path="/" />
            <Redirect default from="/" noThrow to="/" />
          </Router>
        </Suspense>
      </LocationProvider>
    </div>
  );
};

export default connect()(AppRouter);
