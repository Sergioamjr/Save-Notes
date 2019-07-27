import React from "react";

const NotesConnect = props => {
  const { Component, ...otherProps } = props;
  return <Component {...otherProps} />;
};

export default NotesConnect;
