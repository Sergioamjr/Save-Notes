import React, { Suspense, lazy } from "react";
import {
  Router,
  Redirect,
  createHistory,
  LocationProvider
} from "@reach/router";
import createHashSource from "hash-source";
import PageWrapper from "../templates/PageWrapper";
import { getAllNotes } from "../services/notes";
import { connect } from "react-redux";
import { SetNoteList } from "./../store/notes";

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
    const fetchNotes = async () => {
      try {
        const { response } = await getAllNotes();
        const responseFormatted = response.map(item => {
          const { data } = item;
          return {
            ...item,
            data: JSON.parse(data)
          };
        });
        props.dispatch(SetNoteList(responseFormatted));
      } catch (error) {}
    };
    fetchNotes();
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
