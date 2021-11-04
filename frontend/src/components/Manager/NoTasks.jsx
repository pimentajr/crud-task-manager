import React from 'react';
import noTaskImage from '../../images/no-tasks.svg'

export default function NoTasks() {
  return (
    <div className="no-task-image-container">
      <img src={noTaskImage} alt="No Task" />
      <h2>Start by adding a new task</h2>
    </div>
  )
}
