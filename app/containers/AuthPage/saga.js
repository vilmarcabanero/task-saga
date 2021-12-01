import { call, put, takeLatest } from 'redux-saga/effects';
import createAPI from 'api/createAPI';
import Actions from './actions';

function* authPageDefault() {
  yield call();
}

function* makeGetAuthPage() {
  const api = yield createAPI();
  const response = yield call(api.call, 'getAuthPage');
  yield put(Actions.Creators.setAuthPage(response.data));
}

function* makeLogin({ param }) {
  const {
    loginUserData,
    setIsValid,
    setError,
    setDoneLoggingIn,
    history,
  } = param;
  const api = yield createAPI();

  // yield put(Actions.Creators.loginSuccess(response));
  // console.log('setIsValid: ', setIsValid);
  setDoneLoggingIn(false);
  const response = yield call(api.call, 'login', loginUserData);
  setDoneLoggingIn(true);
  // console.log('login response.ok: ', response.ok);

  if (response.ok) {
    localStorage.setItem('authToken', response.data.accessToken);
    yield put(Actions.Creators.toggleSignedIn(true));
    history.push('/');
  } else {
    setIsValid(false);
    setError(response.data.message);
  }
}
function* makeGetUser() {
  const api = yield createAPI();
  const response = yield call(api.call, 'getUser');

  // console.log('getUser response.ok: ', response.ok);
  // console.log('error message: ', response.data.auth);
  yield put(Actions.Creators.setUser(response.data));
}

export default function* authPageSaga() {
  yield takeLatest(Actions.Types.DEFAULT, authPageDefault);
  yield takeLatest(Actions.Types.GET_AUTH_PAGE, makeGetAuthPage);
  yield takeLatest(Actions.Types.LOGIN, makeLogin);
  yield takeLatest(Actions.Types.GET_USER, makeGetUser);
}
