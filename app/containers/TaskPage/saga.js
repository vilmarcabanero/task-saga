import { call, put, takeLatest } from 'redux-saga/effects';
import createAPI from 'api/createAPI';
import Actions from './actions';

function* taskPageDefault() {
  yield call();
}

function* makeGetTasks() {
  const api = yield createAPI();
  const response = yield call(api.call, 'getTasks');
  yield put(Actions.Creators.setTasks(response.data));
}

function* makeGetActiveTasks() {
  const api = yield createAPI();
  const response = yield call(api.call, 'getActiveTasks');
  yield put(Actions.Creators.setActiveTasks(response.data));
}

function* makeCreateTask({ task }) {
  const api = yield createAPI();
  yield call(api.call, 'createTask', { task });
  yield put(Actions.Creators.createTaskSuccess());
}

function* makeDeleteTask({ id }) {
  const api = yield createAPI();
  yield call(api.call, 'deleteTask', id);
  yield put(Actions.Creators.createTaskSuccess());
}

export default function* taskPageSaga() {
  yield takeLatest(Actions.Types.DEFAULT, taskPageDefault);
  yield takeLatest(Actions.Types.GET_TASKS, makeGetTasks);
  yield takeLatest(Actions.Types.GET_ACTIVE_TASKS, makeGetActiveTasks);
  yield takeLatest(Actions.Types.CREATE_TASK, makeCreateTask);
  yield takeLatest(Actions.Types.DELETE_TASK, makeDeleteTask);
}
