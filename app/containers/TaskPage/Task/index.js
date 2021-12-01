import React from 'react';
import PropTypes from 'prop-types';

const Task = props => {
  const { task, deleteTask } = props;
  const handleDeleteTask = e => {
    deleteTask(e.target.id);
  };

  return (
    <div
      onClick={handleDeleteTask}
      onKeyPress={handleDeleteTask}
      role="button"
      tabIndex="0"
      id={task._id}
      style={{
        marginLeft: '1rem',
        marginBottom: '0.5rem',
        minWidth: '15rem',
        display: 'inline-block',
        border: '1px solid rgba(0, 0, 0, 0.15)',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      {task.task}
    </div>
  );
};

export default Task;

Task.propTypes = {
  task: PropTypes.object,
  deleteTask: PropTypes.object,
};
