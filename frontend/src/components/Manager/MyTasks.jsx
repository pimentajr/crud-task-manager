import React, { useState } from "react";
import ReactModal from 'react-modal';
import customStyles from './customStyles';
import editImage from '../../images/edit.png';
import excludeImage from '../../images/exclude.png';
import { fetchDeleteTask, fetchNewTask, fetchUpdateTask } from '../../helpers/fetch';

export default function MyTasks({ tasks, fetch }) {
  const [showModal, setShowModal] = useState(false)
  const [editTask, setEditTask] = useState({tag: '', task: '', status: 'Pending'})

  const formatDate = (date) => {
    const convert = new Date(date);
    let month = '' + (convert.getMonth() + 1);
    let day = '' + convert.getDate();
    let year = convert.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

  const deleteTask = async (id) => {
    const token = JSON.parse(localStorage.getItem('key'));
    await fetchDeleteTask(id, token);
    fetch();
  }

  const updateTask = async () => {
    const token = JSON.parse(localStorage.getItem('key'));
    const { _id, tag, task, status } = editTask;
    const body = { tag, task, status }
    await fetchUpdateTask(_id, token, body);
    await fetch();
    setShowModal(false);
  }

  const newTask = async () => {
    const token = JSON.parse(localStorage.getItem('key'));
    const { tag, task, status } = editTask;
    const body = { tag, task, status }
    await fetchNewTask(token, body);
    await fetch();
    setShowModal(false);
  }

  const handleModal = (bool, id) => {
    if(!id) {
      setEditTask({tag: '', task: '', status: 'Pending'});
      return setShowModal(bool);
    }
    const task = tasks.find((task) => task._id === id);
    setEditTask(task);
    setShowModal(bool);
  }

  const validateInput = () => {
    if (editTask.tag === '' || editTask.task === '') return true;
    return false;
  }

  return (
    <div>
      <h1>MyTasks</h1>
      {tasks.map((task) => {
        let colorStatus = '';
        switch (task.status) {
          case 'In Progress':
            colorStatus = 'green'
            break;
          case 'Pending':
            colorStatus = 'red'
            break;
          case 'Finished':
            colorStatus = 'white'
            break;
          default:
            break;
        }
        return (
        <span key={task._id}>
          <ul>
            {task.tag && <li className="task-tag">{task.tag}</li>}
            <li className="task-task">{task.task}</li>
            <li className={`task-status ${colorStatus}`}>{task.status}</li>
            <li className="task-date">{formatDate(task.date)}</li>
            <li onClick={() => handleModal(true, task._id)}>
              <img src={editImage} alt="edit" />
            </li>
            <li onClick={() => deleteTask(task._id)}>
              <img src={excludeImage} alt="exclude" />
            </li>
          </ul>
        </span>
        )})}
        <div className="container-new-task">
          <button type="button" className="new-task" onClick={() => handleModal(true)}>+</button>
        </div>
        <ReactModal 
           isOpen={showModal}
           contentLabel="Minimal Modal Example"
           style={customStyles}
           ariaHideApp={false}
        >
          <form className="form">
            <label>
              Tag
              <input 
                type="text" 
                name="tag" 
                value={editTask.tag}
                onChange={({target}) => setEditTask({...editTask, tag: target.value})}
              />
            </label>
            <label>
              Task
              <input 
                type="taxt" 
                name="task" 
                value={editTask.task}
                onChange={({target}) => setEditTask({...editTask, task: target.value})}
              />
            </label>
            <label>
              Status
              <select
                name="status" 
                value={editTask.status}
                onChange={({target}) => setEditTask({...editTask, status: target.value})}
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Finished">Finished</option>
              </select>
            </label>
            {editTask._id 
              ? <button 
                  type="button"
                  onClick={() => updateTask()}
                  className="fetch-button"
                  disabled={validateInput()}
                >
                  Update Task
                </button> 
              : <button 
                  type="button"
                  onClick={() => newTask()}
                  className="fetch-button"
                  disabled={validateInput()}
                >
                  New Task
                </button> }
            <button 
              type="button"
              onClick={() => handleModal(false, false)}
            >
              Close
            </button>
          </form>
        </ReactModal>
    </div>
  )
}
