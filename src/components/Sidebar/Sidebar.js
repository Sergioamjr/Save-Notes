import React from "react";
import NotesItem from "../NotesItem";
import _get from "lodash/get";
import Button from "../Button";
import {
  formatAndCreateNewNote,
  fetchNotesAndUpdateStore
} from "../../utils/app";
import { history } from "../../routes/Routes";

const Sidebar = props => {
  const list = _get(props, "notes.list", []);
  const canSwitchNote = _get(props, "notes.canSwitchNote");

  const addNoteInListHandler = () => {
    formatAndCreateNewNote(async response => {
      try {
        await fetchNotesAndUpdateStore(props);
        const _id = _get(response, "document._id");
        history.navigate(`/documento/${_id}`);
      } catch (error) {}
    });
  };
  return (
    <aside className="background-theme  ">
      <h1 className="p-10 color-white fs-5 m-bottom-10 m-top-20">MyNotes</h1>
      <div>
        <Button onClick={addNoteInListHandler}>Novo Documento</Button>
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
