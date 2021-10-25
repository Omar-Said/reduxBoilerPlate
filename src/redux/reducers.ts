import { combineReducers } from "redux";
import { Student } from "../types/FetchStudents";
import { FetchStudentsActions } from "./constants";
import { FetchStudentsAction } from "./sagas";

export interface StudentsState {
  loading: boolean;
  error: string;
  students?: Student[];
}

const initialState: StudentsState = {
  loading: false,
  error: "",
  students: [],
};

const students = (state = initialState, action: FetchStudentsAction) => {
  switch (action.type) {
    case FetchStudentsActions.FETCH_STUDENTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case FetchStudentsActions.FETCH_STUDENTS_SUCCESSFUL: {
      return {
        ...state,
        loading: false,
        students: action?.payload?.students,
      };
    }
    case FetchStudentsActions.FETCH_STUDENTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: "some error happened",
      };
    }
    default:
      return state;
  }
};

export default combineReducers({ students });
