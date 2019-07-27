import React from "react";
import PageWrapper from "../../templates/PageWrapper";
import {
  SetSelectedId,
  SetQueryingAsTrue,
  SetQueryingAsFalse,
  SetSwitchAsTrue
} from "../../store/notes/index";
import _get from "lodash/get";
import TextEditor from "../../components/TextEditor";
import { getSingleNote, updateNote } from "../../services/notes";
import {
  formatNote,
  getAndUpdateTitle,
  fetchNotesAndUpdateStore
} from "../../utils/app";
import Feedback from "../../components/Feedback";

class SingleDocument extends React.Component {
  state = {
    prevVersion: {},
    note: {}
  };

  componentDidMount = () => {
    this.updateSelectedId();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.id !== this.props.id) {
      this.updateSelectedId();
    }
    if (prevProps.notes.selectedId !== this.props.notes.selectedId) {
      this.updateStateNote();
    }
  };

  updateNote = async () => {
    try {
      const titulo = getAndUpdateTitle(this.state);
      const note = _get(this.state, "note", false);
      const { data } = note;
      await updateNote({
        ...note,
        data: JSON.stringify(data),
        titulo
      });
      await fetchNotesAndUpdateStore(this.props);
    } catch (error) {}
  };

  updateStateNote = async () => {
    try {
      this.props.dispatch(SetQueryingAsTrue());
      const selectedId = _get(this.props, "notes.selectedId");
      const { response } = await getSingleNote(selectedId);
      if (!response) {
        this.setState({
          note: {}
        });
        // this.props.dispatch(SetQueryingAsFalse());
        this.props.dispatch(SetSwitchAsTrue());
      }
      const [note] = formatNote([response]);
      this.setState(
        {
          note,
          prevVersion: note
        },
        () => {
          this.props.dispatch(SetQueryingAsFalse());
          if (!response) {
            this.props.dispatch(SetSwitchAsTrue());
          }
        }
      );
    } catch (error) {}
  };

  updateSelectedId = () => {
    const id = _get(this.props, "id");
    this.props.dispatch(SetSelectedId(id));
  };

  onChange = data => {
    this.setState(
      {
        note: {
          ...this.state.note,
          data
        }
      },
      this.updateNote
    );
  };

  render() {
    const data = _get(this.state, "note.data", false);
    return (
      <PageWrapper
        hasFoundNote={!this.props.notes.canSwitchNote ? false : data}
      >
        <div>
          {data && !this.props.notes.isQuerying && (
            <TextEditor onChange={this.onChange} data={data} />
          )}

          {!data && !this.state.isQuering && this.props.notes.canSwitchNote && (
            <Feedback text=" Documento não encontrado." mood="sad" />
          )}
        </div>
      </PageWrapper>
    );
  }
}

export default SingleDocument;
