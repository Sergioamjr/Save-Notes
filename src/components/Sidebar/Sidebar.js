import React from "react";
import NotesItem from "../NotesItem";
import _get from "lodash/get";
import Button from "../Button";
import { AddNoteInList, SetNoteList } from "../../store/notes/index";
import { history } from "../../routes/Routes";
import { addNote } from "./../../services/notes";
import { getAllNotes } from "../../services/notes";

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
    _id: dateTime
  };
};

const Sidebar = props => {
  const list = _get(props, "notes.list", []);
  const canSwitchNote = _get(props, "notes.canSwitchNote");

  const addNoteInListHandler = async () => {
    try {
      const dateTime = new Date().getTime();
      const data = {
        userID: dateTime,
        data: JSON.stringify({
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
        }),
        date: new Date(),
        titulo: "Titulo"
      };

      const response = await addNote(data);
      const _id = _get(response, "document._id");
      const { response: notes } = await getAllNotes();
      const responseFormatted = notes.map(item => {
        const { data } = item;
        return {
          ...item,
          data: JSON.parse(data)
        };
      });
      props.dispatch(SetNoteList(responseFormatted));
      history.navigate(`/documento/${_id}`);
    } catch (error) {}
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
