import React from "react";
import NotesConnect from "../../containers/Notes";
import SingleDocument from "./SingleDocument.js";

export default props => <NotesConnect {...props} Component={SingleDocument} />;
