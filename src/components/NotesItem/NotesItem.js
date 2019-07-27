import React from "react";
import moment from "moment";
import { Link } from "@reach/router";

const NotesItem = props => {
  const { titulo, description, date, id } = props;
  return (
    <Link to={`/documento/${id}`}>
      <div className="m-bottom-10 p-10 p-bottom-20 bb-lightdarken">
        <h2 className="color-white fs-6 m-bottom-10 tt-uppercase">{titulo}</h2>
        <p className="color-white m-bottom-10">{description}</p>
        <p className="color-white fs-8">
          Criado em: {moment(date).format("DD/MM/YYYY")}
        </p>
      </div>
    </Link>
  );
};

export default NotesItem;
