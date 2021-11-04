import React, { useState, useEffect, useRef } from "react";
import taskImage from '../../images/tasks-icon.png';
import kanbanImage from '../../images/kanban-icon.png';
import calendarImage from '../../images/calendar-icon.png';
import logoutImage from '../../images/logout-icon.png';
import { fetchGetTasks } from '../../helpers/fetch';
import MyTasks from '../../components/Manager/MyTasks';
import Kanban from '../../components/Manager/Kanban';
import Calendar from '../../components/Manager/Calendar';

export default function Dashboard() {
  const [menu, setMenu] = useState({myTasks: 'selectButton'});
  const [tasks, setTasks] = useState([]);
  const token = JSON.parse(localStorage.getItem('key'));

  const getToken = useRef(token)

  const fetch = async () => {
    try {
      const getTask = await fetchGetTasks(getToken.current);
      setTasks(getTask);
    } catch (error) {
      console.error(error)
    }
    
  }

  useEffect(() => {
    fetch();
  }, []);

  const redirect = () => {
    localStorage.removeItem('key');
    window.location.href = `${window.origin}/`;
  }

  const selectMenu = ({target}) => {
    const name = target.getAttribute('name');
    setMenu({[name]: 'selectButton'});
  }

  return (
    <div className="dashboard-container">
      <div className="nav-container">
        <h3>Welcome NAME</h3>
        <ul>
          <li 
            className={menu.myTasks}
            name="myTasks"
            onClick={(event) => selectMenu(event)}
          >
            <img src={taskImage} alt="task" />
            MY TASKS
          </li>
          <li 
            className={menu.kanban} 
            name="kanban"
            onClick={(event) => selectMenu(event)}
          >
            <img src={kanbanImage} alt="kanban" />
            KANBAN
          </li>
          <li 
            className={menu.calendar} 
            name="calendar"
            onClick={(event) => selectMenu(event)}
          >
            <img src={calendarImage} alt="calendar" />
            CALENDAR
          </li>
          <li onClick={() => redirect()}>
            <img src={logoutImage} alt="logout" />
            LOGOUT
          </li>
        </ul>
      </div>
      <div className="main-container">
        <div className="bar-container">
          <h3>Pending: 0</h3>
          <h3>In Progress: 0</h3>
          <h3>Finished: 0</h3>
        </div>
        <div className="components-container">
          { menu.myTasks && <MyTasks tasks={tasks} fetch={fetch} /> }
          { menu.kanban && <Kanban /> }
          { menu.calendar && <Calendar /> }
        </div>
      </div>
    </div>
  )
}
