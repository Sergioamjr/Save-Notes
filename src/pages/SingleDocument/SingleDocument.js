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

  updateStateNote = () => {
    this.props.dispatch(SetQueryingAsTrue());
    const selectedId = _get(this.props, "notes.selectedId");
    const list = _get(this.props, "notes.list", []);
    const [note] = list.filter(({ id }) => id.toString() === selectedId) || [
      {}
    ];

    this.setState(
      {
        note
      },
      () => {
        this.props.dispatch(SetQueryingAsFalse());
        const data = _get(note, "data", false);
        if (!data) {
          this.props.dispatch(SetSwitchAsTrue());
        }
      }
    );
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
