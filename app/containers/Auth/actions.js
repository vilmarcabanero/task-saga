/*
 *
 * Auth actions
 *
 */

import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  default: null,
  getAuth: null,
  setAuth: ['data'],
});

const Actions = {
  Types,
  Creators,
};

export default Actions;
