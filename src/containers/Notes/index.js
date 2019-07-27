import Notes from "./Notes";
import { connect } from "react-redux";

const MapStateToProps = ({ notes }, props) => {
  return {
    notes,
    ...props
  };
};

export default connect(MapStateToProps)(Notes);
