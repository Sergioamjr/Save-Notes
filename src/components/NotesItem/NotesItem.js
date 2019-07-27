import React from "react";
import moment from "moment";
import { Link } from "@reach/router";

const NotesItem = props => {
  const {
    titulo,
    description,
    date,
    actived,
    _id,
    disabledAll,
    lastModification
  } = props;

  return (
    <div className={`${!disabledAll ? "disabled" : ""}`}>
      <Link to={`/documento/${_id}`}>
        <div
          className={`p-10 p-top-20 p-bottom-20 bb-lightdarken ${
            actived === _id ? "background-themeDark" : ""
          }`}
        >
          <h2 className="color-white fs-6 m-bottom-10 tt-uppercase">
            {titulo}
          </h2>
          <p className="color-white m-bottom-10">{description}</p>
          <p className="color-white fs-8 m-bottom-5">
            Criado em: {moment(date).format("DD/MM/YYYY")}
          </p>
          <p className="color-white fs-8">
            Última atualizacão:{" "}
            {moment(lastModification).format("DD/MM/YYYY - hh:mm:ss")}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default NotesItem;
