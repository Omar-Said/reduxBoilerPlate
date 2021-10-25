import { api } from "../config/axios";
import { GET_STUDENTS } from "../config/constants";
import { Students } from "../types/FetchStudents";

const fetchStudents = async () => {
  const response = await api.get<Students>(GET_STUDENTS);
  return response.data;
};

export default fetchStudents;
