import { call, put, takeLatest } from 'redux-saga/effects';
import createAPI from 'api/createAPI';
import Actions from './actions';

function* taskPageDefault() {
  yield call();
}

function* makeGetTasks() {
  const api = yield createAPI();
  const response = yield call(api.call, 'getTasks');
  yield put(Actions.Creators.setTaskPage(response.data));
}

export default function* taskPageSaga() {
  yield takeLatest(Actions.Types.DEFAULT, taskPageDefault);
  yield takeLatest(Actions.Types.GET_TASKS, makeGetTasks);
}
