import React, { useState, useEffect } from "react";
import taskImage from '../../images/tasks-icon.png';
import kanbanImage from '../../images/kanban-icon.png';
import calendarImage from '../../images/calendar-icon.png';
import logoutImage from '../../images/logout-icon.png';
import { fetchGetTasks } from '../../helpers/fetch';

export default function Dashboard() {
  const [tasks, settasks] = useState(false);
  const token = JSON.parse(localStorage.getItem('key'));

  const fetch = async () => {
    const teste = await fetchGetTasks(token);
    console.log(teste);
  }

  const redirect = () => {
    localStorage.removeItem('key');
    window.location.href = `${window.origin}/`;
  }

  return (
    <div className="dashboard-container">
      <div className="nav-container">
        <h3>Welcome NAME</h3>
        <ul>
          <li>
            <img src={taskImage} alt="task" />
            MY TASKS
          </li>
          <li>
            <img src={kanbanImage} alt="kanban" />
            KANBAN
          </li>
          <li>
            <img src={calendarImage} alt="calendar" />
            CALENDAR
          </li>
          <li onClick={() => redirect()}>
            <img src={logoutImage} alt="logout" />
            LOGOUT
          </li>
        </ul>
        <button type="button" onClick={() => fetch()}>Fetch</button>
      </div>
      <div className="main-container">
        <div className="bar-container">
          <h3>Pending: 0</h3>
          <h3>In Progress: 0</h3>
          <h3>Finalized: 0</h3>
        </div>
        <div className="components-container">
        </div>
      </div>
    </div>
  )
}
