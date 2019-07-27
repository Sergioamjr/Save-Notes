import React from "react";
import Button from "../Button/Button";
import { RemoveNoteFromList, AddNoteInList } from "../../store/notes/index";
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

const TopMenu = props => {
  const removeItemHandler = () => {
    const {
      notes: { selectedId }
    } = props;
    props.dispatch(RemoveNoteFromList(selectedId));
    history.navigate("/");
  };

  const addNoteInListHandler = () => {
    const dateTime = new Date().getTime();
    const data = NoteFactoty(dateTime);
    props.dispatch(AddNoteInList(data));
    history.navigate(`/documento/${dateTime}`);
  };

  return (
    <div className="d-flex d-flex-space-between d-flex-align-center m-bottom-40">
      <div>
        <Button onClick={addNoteInListHandler}>Novo Documento</Button>

        {props.hasFoundNote && (
          <Button onClick={removeItemHandler}>Excluir Documento</Button>
        )}
      </div>
      <ul>
        <li>
          <a className="m-right-10" href="/#">
            Configuracões
          </a>
          <a href="/#">Sair</a>
        </li>
      </ul>
    </div>
  );
};

export default TopMenu;
