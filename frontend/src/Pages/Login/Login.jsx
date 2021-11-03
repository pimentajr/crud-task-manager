import React, { useState, useEffect } from "react";
import Wellcome from '../../images/organizing_projects.svg';
import Data from '../../images/data.svg';
import FormSignup from "../../components/Login/FormSignup";
import FormLogin from "../../components/Login/FormLogin";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

export default function Login() {
  const [sign, setSign] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('key'));
    token && (window.location.href = `${window.origin}/manager`);
  });

  const selectScreen = (bool) => {
    setSign(bool);
  }

  return (
    <div className="login-container">
      <div className="login-container-form">
        <span>
          <img src={Data} alt="task" />
          <h2>Task Manager</h2>
        </span>
        { sign 
          ? <FormSignup selectScreen={selectScreen} /> 
          : <FormLogin selectScreen={selectScreen} /> }
      </div>

      <div className="login-container-image">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <h4>Nice to see you again</h4>
        <h1>Welcome back</h1>
        <img src={Wellcome} alt="wellcome" />
      </div>
    </div>
  )
}
