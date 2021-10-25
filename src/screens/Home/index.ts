import Home from "./Home";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchStudents } from "../../redux/actions";
import { Dispatch } from "redux";
import { RouteComponentProps } from "react-router";
import { RootState } from "../../redux";

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleGetStudents: () => {
      dispatch(fetchStudents());
    },
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    loading: state.students.loading,
    error: state.students.error,
    students: state.students.students,
  };
};

export type HomeProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  RouteComponentProps;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
