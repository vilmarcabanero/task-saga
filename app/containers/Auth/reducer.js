/*
 *
 * Auth reducer
 *
 */
import { fromJS } from 'immutable';
import { createReducer } from 'reduxsauce';
import Actions from './actions';

export const INITIAL_STATE = fromJS({
  status: true,
  isLoggedIn: false,
  data: [],
});

export const defaultReducer = state =>
  state.merge({
    status: false,
  });

export const doSetAuth = (state, { data }) =>
  state.merge({
    data,
  });

const { Types } = Actions;

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DEFAULT]: defaultReducer,
  [Types.SET_AUTH]: doSetAuth,
});

export default reducer;
