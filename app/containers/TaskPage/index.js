/**
 *
 * TaskPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import AuthPageActions from 'containers/AuthPage/actions';
import makeSelectTaskPage from './selectors';
import Actions from './actions';
import reducer from './reducer';
import saga from './saga';
import makeSelectAuthPage from '../AuthPage/selectors';
import Header from './Header';
import TaskList from './TaskList';

export function TaskPage(props) {
  useInjectReducer({ key: 'taskPage', reducer });
  useInjectSaga({ key: 'taskPage', saga });

  const {
    getUser,
    authPageState,
    history,
    toggleSignedIn,
    taskPageState,
    getActiveTasks,
    createTask,
    deleteTask,
  } = props;
  const { tasks, taskState } = taskPageState;

  useEffect(() => {
    getActiveTasks();
    getUser();
  }, [taskState]);

  return (
    <div>
      <Header
        authPageState={authPageState}
        history={history}
        toggleSignedIn={toggleSignedIn}
        createTask={createTask}
      />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

TaskPage.propTypes = {
  createTask: PropTypes.object,
  getActiveTasks: PropTypes.object,
  deleteTask: PropTypes.object,
  taskPageState: PropTypes.object,
  getUser: PropTypes.object,
  authPageState: PropTypes.object,
  history: PropTypes.any,
  toggleSignedIn: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  taskPageState: makeSelectTaskPage(),
  authPageState: makeSelectAuthPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(
      {
        ...Actions.Creators,
        ...AuthPageActions.Creators,
      },
      dispatch,
    ),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(TaskPage);
