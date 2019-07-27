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
import { getSingleNote } from "../../services/notes";
import { formatNote } from "../../utils/app";

class SingleDocument extends React.Component {
  state = {
    note: {}
  };

  componentDidMount = () => {
    this.updateSelectedId();
  };

  componentDidUpdate = prevProps => {
    if (prevProps.id !== this.props.id) {
      this.updateSelectedId();
    }
    if (prevProps.notes.selectedId !== this.props.notes.selectedId) {
      this.updateStateNote();
    }
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
        this.props.dispatch(SetSwitchAsTrue());
      }
      const [note] = formatNote([response]);
      this.setState(
        {
          note
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
    this.setState({
      note: {
        ...this.state.note,
        data
      }
    });
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

          {!data && !this.state.isQuering && <p>Documento não encontrado.</p>}
        </div>
      </PageWrapper>
    );
  }
}

export default SingleDocument;
