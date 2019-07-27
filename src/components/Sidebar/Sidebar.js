import React from "react";
import NotesItem from "../NotesItem";
import _get from "lodash/get";

const Sidebar = props => {
  const list = _get(props, "notes.list", []);
  const canSwitchNote = _get(props, "notes.canSwitchNote");
  return (
    <aside className="background-theme  ">
      <h1 className="p-10 color-white fs-5 m-bottom-10 m-top-20">MyNotes</h1>
      <div>
        {list.length === 0 && (
          <p className="color-white p-10">Nenhum documento criado ainda.</p>
        )}

        {list.map((item, index) => (
          <NotesItem disabledAll={canSwitchNote} key={index} {...item} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
