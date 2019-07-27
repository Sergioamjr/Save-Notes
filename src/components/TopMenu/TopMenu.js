import React from "react";
import Button from "../Button/Button";
import { history } from "../../routes/Routes";
import { deleteSingleNote } from "../../services/notes";
import _get from "lodash/get";
import { fetchNotesAndUpdateStore } from "../../utils/app";

const TopMenu = props => {
  const removeItemHandler = async () => {
    try {
      const _id = _get(props, "notes.selectedId");
      await deleteSingleNote(_id);
      await fetchNotesAndUpdateStore(props);
      history.navigate("/");
    } catch (error) {}
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
