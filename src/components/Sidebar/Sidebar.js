import React from "react";
import NotesItem from "../NotesItem";
import _get from "lodash/get";
import Button from "../Button";
import { AddNoteInList } from "../../store/notes/index";
import { history } from "../../routes/Routes";

const NoteFactoty = dateTime => {
  return {
    titulo: `${dateTime}`,
    data: {
      time: dateTime,
      blocks: [
        {
          type: "header",
          data: {
            text: `text ${dateTime}`,
            level: 1
          }
        }
      ]
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et sollicitudin sem, sit amet semper neque. Aliquam mi dui, ultrices sit amet leo in, vulputate dignissim lorem",
    date: dateTime,
    id: dateTime
  };
};

const Sidebar = props => {
  const list = _get(props, "notes.list", []);
  const canSwitchNote = _get(props, "notes.canSwitchNote");

  const addNoteInListHandler = () => {
    const dateTime = new Date().getTime();
    const data = NoteFactoty(dateTime);
    props.dispatch(AddNoteInList(data));
    history.navigate(`/documento/${dateTime}`);
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
