import { fork, call, takeLatest, put } from "redux-saga/effects";
import fetchStudents from "./middleware";
import { FetchStudentsActions } from "./constants";
import { Students } from "../types/FetchStudents";

export interface FetchStudentsAction {
  type: FetchStudentsActions;
  payload?: Students;
}

function* studentsSaga(action: FetchStudentsAction): any {
  try {
    const payload = yield call(fetchStudents);
    yield put({
      type: FetchStudentsActions.FETCH_STUDENTS_SUCCESSFUL,
      payload,
    });
  } catch (error) {
    yield put({
      type: FetchStudentsActions.FETCH_STUDENTS_FAILURE,
      payload: error,
    });
  }
}

function* watchStudentsSaga() {
  yield takeLatest(FetchStudentsActions.FETCH_STUDENTS, studentsSaga);
}

export default function* rootSaga() {
  yield fork(watchStudentsSaga);
}
