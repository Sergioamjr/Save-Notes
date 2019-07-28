import React from "react";
import NotesItem from "../NotesItem";
import _get from "lodash/get";

const Sidebar = props => {
  const list = _get(props, "notes.list", []);
  const selectedId = _get(props, "notes.selectedId", []);
  const canSwitchNote = _get(props, "notes.canSwitchNote");

  return (
    <aside
      className={`background-theme overflow-auto box-shadow mobile-menu ${
        props.isMenuOpened ? "mobile-menu-actived" : ""
      }`}
    >
      <div className="d-flex d-flex-align-center d-flex-space-between">
        <h1 className="p-10 color-white fs-5 m-bottom-10 m-top-20">
          My Save Notes
        </h1>
        <button
          onClick={props.toggleMenuHandler}
          style={{ fontSize: "25px", padding: "0px 6px 3px" }}
          className="btn m-right-10 m-top-10"
        >
          ✕
        </button>
      </div>
      <div>
        {list.length === 0 && (
          <p className="color-white p-10 p-center">
            Nenhuma nota criada ainda.
          </p>
        )}

        {list.map((item, index) => (
          <NotesItem
            actived={selectedId}
            disabledAll={canSwitchNote}
            key={index}
            {...item}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
