import React from "react";
import Button from "../Button/Button";
import { history } from "../../routes/Routes";
import { deleteSingleNote } from "../../services/notes";
import _get from "lodash/get";
import {
  fetchNotesAndUpdateStore,
  formatAndCreateNewNote,
} from "../../utils/app";

const TopMenu = (props) => {
  const removeItemHandler = async () => {
    try {
      const _id = _get(props, "notes.selectedId");
      await deleteSingleNote(_id);
      await fetchNotesAndUpdateStore(props);
      history.navigate("/");
    } catch (error) {}
  };

  const addNoteInListHandler = () => {
    formatAndCreateNewNote(async (response) => {
      try {
        await fetchNotesAndUpdateStore(props);
        const _id = _get(response, "document._id");
        history.navigate(`/documento/${_id}`);
      } catch (error) {}
    });
  };

  return (
    <div className="d-flex d-flex-space-between d-flex-align-center m-bottom-40">
      <div
        className={`d-flex  d-flex-align-center ${
          props.hasFoundNote ? "sm-min-w-310" : ""
        }`}
      >
        <Button className="btn m-right-10" onClick={addNoteInListHandler}>
          Create note
        </Button>
        {props.hasFoundNote && (
          <Button className="btn btn-danger" onClick={removeItemHandler}>
            Delete note
          </Button>
        )}
      </div>
      <div className="toggle-menu">
        <Button
          className="btn m-right-10 mobile-btn-menu"
          onClick={props.toggleMenuHandler}
        >
          {props.isMenuOpened ? "✕" : "≡"}
        </Button>
      </div>
    </div>
  );
};

export default TopMenu;
