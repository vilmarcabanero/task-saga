import { createSelector } from 'reselect';
import { INITIAL_STATE } from './reducer';

/**
 * Direct selector to the authPage state domain
 */
const selectAuthPageDomain = state => state.authPage || INITIAL_STATE;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AuthPage
 */

const makeSelectAuthPage = () =>
  createSelector(
    selectAuthPageDomain,
    substate => substate.toJS(),
  );

export default makeSelectAuthPage;
export { selectAuthPageDomain };
