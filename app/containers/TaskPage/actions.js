/*
 *
 * TaskPage actions
 *
 */

import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  default: null,
  getTasks: null,
  setTasks: ['data'],
  getActiveTasks: null,
  setActiveTasks: ['data'],
  createTask: ['task'],
  createTaskSuccess: null,
  deleteTask: ['id'],
  deleteTaskSuccess: null,
});

const Actions = {
  Types,
  Creators,
};

export default Actions;
