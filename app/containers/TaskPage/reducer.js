/*
 *
 * TaskPage reducer
 *
 */
import { fromJS } from 'immutable';
import { createReducer } from 'reduxsauce';
import Actions from './actions';

export const INITIAL_STATE = fromJS({
  status: true,
  tasks: [],
});

export const defaultReducer = state =>
  state.merge({
    status: false,
  });

export const doSetTasks = (state, { data }) =>
  state.merge({
    tasks: data,
  });

const { Types } = Actions;

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DEFAULT]: defaultReducer,
  [Types.SET_TASKS]: doSetTasks,
});

export default reducer;
