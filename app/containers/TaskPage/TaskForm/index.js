import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton, TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons';

const TaskForm = props => {
  const { createTask } = props;
  const [task, setTask] = useState('');

  const handleCreateTask = e => {
    e.preventDefault();
    createTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleCreateTask}>
      <IconButton type="submit">
        <Add />
      </IconButton>
      <TextField onChange={e => setTask(e.target.value)} value={task} />
    </form>
  );
};

export default TaskForm;

TaskForm.propTypes = {
  createTask: PropTypes.object,
};
