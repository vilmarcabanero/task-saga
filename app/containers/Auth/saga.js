import { call, put, takeLatest } from 'redux-saga/effects';
// import createAPI from 'api/createAPI';
import Actions from './actions';

function* authDefault() {
  yield call();
}

function* makeGetAuth() {
  yield put();
}

export default function* authSaga() {
  yield takeLatest(Actions.Types.DEFAULT, authDefault);
  yield takeLatest(Actions.Types.GET_AUTH, makeGetAuth);
}
