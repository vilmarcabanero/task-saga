import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import TaskForm from '../TaskForm';

const Header = props => {
  const { authPageState, history, toggleSignedIn, createTask } = props;
  const { userData } = authPageState;

  const handleLogout = () => {
    toggleSignedIn(false);
    history.push('/auth');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '1rem',
      }}
    >
      <TaskForm createTask={createTask} />
      <div>
        <span style={{ marginRight: '1rem', fontSize: 18 }}>
          {userData.firstName}
        </span>
        <Button variant="contained" color="primary" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  authPageState: PropTypes.object,
  history: PropTypes.any,
  toggleSignedIn: PropTypes.object,
  createTask: PropTypes.object,
};
