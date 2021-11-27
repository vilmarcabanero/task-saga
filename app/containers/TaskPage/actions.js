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
});

const Actions = {
  Types,
  Creators,
};

export default Actions;
