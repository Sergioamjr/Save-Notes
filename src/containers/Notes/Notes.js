import React from "react";

const Notes = props => {
  const { Component, ...otherProps } = props;
  return <Component {...otherProps} />;
};

export default Notes;
