import React from "react";
import Button from "../Button/Button";
import { RemoveNoteFromList } from "../../store/notes/index";
import { history } from "../../routes/Routes";

const TopMenu = props => {
  const removeItemHandler = () => {
    const {
      notes: { selectedId }
    } = props;
    props.dispatch(RemoveNoteFromList(selectedId));
    history.navigate("/");
  };

  return (
    <div className="d-flex d-flex-space-between d-flex-align-center m-bottom-40">
      <div>
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
