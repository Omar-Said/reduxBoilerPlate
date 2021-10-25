import { FetchStudentsActions } from "./constants";

export const fetchStudents = () => {
  return {
    type: FetchStudentsActions.FETCH_STUDENTS,
  };
};
