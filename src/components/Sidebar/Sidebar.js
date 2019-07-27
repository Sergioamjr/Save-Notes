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
      <h1 className="p-10 color-white fs-5 m-bottom-10 m-top-20">MyNotes</h1>
      <div>
        {list.length === 0 && (
          <p className="color-white p-10 p-center">
            Nenhum documento criado ainda.
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
