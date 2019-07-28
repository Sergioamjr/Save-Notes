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
import Feedback from "../components/Feedback/Feedback";
import { getAuth, setAuth } from "../services/localStorage";

let source = createHashSource();
export let history = createHistory(source);

const Home = lazy(() => import("./../pages/Home"));
const SingleDocument = lazy(() => import("./../pages/SingleDocument"));

const Loading = () => (
  <PageWrapper>
    <Feedback />
  </PageWrapper>
);

const AppRouter = props => {
  React.useEffect(() => {
    const { userid } = getAuth();
    if (!userid) {
      setAuth({
        userid: new Date().getTime()
      });
    }
    fetchNotesAndUpdateStore(props);
  }, [props]);

  return (
    <div>
      <LocationProvider history={history}>
        <Suspense fallback={<Loading />}>
          <Router>
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
