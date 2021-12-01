import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';

const TaskList = props => {
  const { tasks, deleteTask } = props;
  return (
    <div>
      {tasks.map(task => (
        <Task task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;

TaskList.propTypes = {
  tasks: PropTypes.array,
  deleteTask: PropTypes.object,
};
