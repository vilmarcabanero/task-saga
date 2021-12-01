/*
 *
 * AuthPage actions
 *
 */

import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  default: null,
  getAuthPage: null,
  setAuthPage: ['data'],
  login: ['param'],
  getUser: null,
  setUser: ['data'],
  toggleSignedIn: ['isSignedIn'],
});

const Actions = {
  Types,
  Creators,
};

export default Actions;
