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
  taskState: null,
});

export const defaultReducer = state =>
  state.merge({
    status: false,
  });

export const doSetTasks = (state, { data }) =>
  state.merge({
    tasks: data,
  });

export const doSetActiveTasks = (state, { data }) =>
  state.merge({
    tasks: data,
  });

export const doCreateTaskSuccess = state =>
  state.merge({
    taskState: Math.random(),
  });

export const doDeleteTaskSuccess = state =>
  state.merge({
    taskState: Math.random(),
  });

const { Types } = Actions;

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DEFAULT]: defaultReducer,
  [Types.SET_TASKS]: doSetTasks,
  [Types.SET_ACTIVE_TASKS]: doSetActiveTasks,
  [Types.CREATE_TASK_SUCCESS]: doCreateTaskSuccess,
  [Types.DELETE_TASK_SUCCESS]: doDeleteTaskSuccess,
});

export default reducer;
