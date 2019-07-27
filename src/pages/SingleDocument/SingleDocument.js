import React from "react";
import PageWrapper from "../../templates/PageWrapper";
import { SetSelectedId } from "../../store/notes/index";
import _get from "lodash/get";

class SingleDocument extends React.Component {
  componentDidMount = () => {
    this.updateSelectedId();
  };

  componentDidUpdate = prevProps => {
    if (prevProps.id !== this.props.id) {
      this.updateSelectedId();
    }
  };

  updateSelectedId = () => {
    const id = _get(this.props, "id");
    this.props.dispatch(SetSelectedId(id));
  };

  render() {
    return (
      <PageWrapper>
        <div>
          <p>das</p>
        </div>
      </PageWrapper>
    );
  }
}

export default SingleDocument;
