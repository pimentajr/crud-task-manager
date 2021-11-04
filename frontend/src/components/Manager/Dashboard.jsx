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
  const [quantity, setQuantity] = useState({ pending: 0, progress: 0, finished: 0 });
  const [tasks, setTasks] = useState([]);
  const [order, setOrder] = useState('data');
  const [, updateState] = React.useState();
  
  const token = JSON.parse(localStorage.getItem('key'));
  const getToken = useRef(token);

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    orderTasks();
  }, [order]);

  useEffect(() => {
    quantityTasks();
  }, [tasks]);

  const forceUpdate = React.useCallback(() => updateState({}), []);

  const orderUpdate = (newOrder) => {
    setOrder(newOrder);
  }

  const fetch = async () => {
    try {
      const getTask = await fetchGetTasks(getToken.current);
      setTasks(getTask);
    } catch (error) {
      console.error(error);
    }
  }

  const redirect = () => {
    localStorage.removeItem('key');
    window.location.href = `${window.origin}/`;
  }

  const selectMenu = ({target}) => {
    const name = target.getAttribute('name');
    setMenu({[name]: 'selectButton'});
  }

  // Sorting taken from the site: https://www.horadecodar.com.br/2021/01/11/como-ordenar-um-array-de-objetos-em-javascript/
  const orderTasks = async () => {
    switch (order) {
      case 'data':
        const data = tasks.sort((a, b) => a.date < b.date ? -1 : true);
        setTasks(data);
        break;
      case 'tag':
        const tag = tasks.sort((a, b) => a.tag < b.tag ? -1 : true);
        setTasks(tag);
        break;
      case 'task':
        const task = tasks.sort((a, b) => a.task < b.task ? -1 : true);
        setTasks(task);
        break;
      case 'status':
        const status = tasks.sort((a, b) => a.status > b.status ? -1 : true);
        setTasks(status);
        break;
      default:
        break;
    }
    forceUpdate();
  }

  const quantityTasks = () => {
    const pending = tasks.filter((task) => task.status === "Pending");
    const progress = tasks.filter((task) => task.status === "In Progress");
    const finished = tasks.filter((task) => task.status === "Finished");
    setQuantity({ 
      pending: pending.length, 
      progress: progress.length, 
      finished: finished.length 
    });
  }

  return (
    <div className="dashboard-container">
      <div className="nav-container">
        <h3>Welcome</h3>
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
          <h3>{`Pending: ${quantity.pending}`}</h3>
          <h3>{`In Progress: ${quantity.progress}`}</h3>
          <h3>{`Finished: ${quantity.finished}`}</h3>
        </div>
        <div className="components-container">
          { menu.myTasks && <MyTasks tasks={tasks} fetch={fetch} orderUpdate={orderUpdate} /> }
          { menu.kanban && <Kanban /> }
          { menu.calendar && <Calendar /> }
        </div>
      </div>
    </div>
  )
}
