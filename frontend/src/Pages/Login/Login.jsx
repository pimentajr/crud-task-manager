import React, { useState } from "react";
import Wellcome from '../../images/organizing_projects.svg';
import Data from '../../images/data.svg';
import { ToastContainer, toast } from 'react-toastify';
import { fetchLogin, fetchSignup } from '../../helpers/fetch';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

export default function Login() {
  const [sign, setSign] = useState(false);
  const [user, setUser] = useState({ email: '', password: '' });
  const [register, setRegister] = useState({ name: '', email: '', password: '' });

  const loginButtonSubmit = async () => {
    const fetch = await fetchLogin(user)
    if (fetch.message) {
      toast.error(fetch.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setUser({ email: '', password: '' })
      toast.success('Login Success', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  const registerButtonSubmit = async () => {
    const fetch = await fetchSignup(register);
    if (fetch.message) {
      toast.error(fetch.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setRegister({ name: '', email: '', password: '' });
      setSign(false);
      toast.success('Register Success', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  const login = () => {
    return (
      <div>
        <div className="form-container">
            <h3>Log in.</h3>
            <p>Log in with your data that you entered during your registration.</p>
          </div>
          <form className="form">
            <label>
              Enter your email address
              <input 
                type="email" 
                name="email" 
                placeholder="name@example.com"
                value={user.email}
                onChange={({target}) => setUser({...user, email: target.value})}
              />
            </label>
            <label>
              Enter your password
              <input 
                type="password" 
                name="password" 
                placeholder="password"
                value={user.password}
                onChange={({target}) => setUser({...user, password: target.value})}
              />
            </label>
            <button 
              type="button"
              onClick={() => loginButtonSubmit()}
            >
              Log in
            </button>
          </form>
          <button 
            type="button" 
            className="btn"
            onClick={() => setSign(true)}
          >
            Sign up now
          </button>
      </div>
    )
  }

  const signup = () => {
    return (
      <div>
        <div className="form-container">
            <h3>Sign up.</h3>
            <p>Register to sign in.</p>
          </div>
          <form className="form">
            <label>
              Enter your name
              <input 
                type="text" 
                name="name" 
                placeholder="your name" 
                value={register.name}
                onChange={({target}) => setRegister({...register, name: target.value})}
              />
            </label>
            <label>
              Enter your email address
              <input 
                type="email" 
                name="email" 
                placeholder="name@example.com" 
                value={register.email}
                onChange={({target}) => setRegister({...register, email: target.value})}
              />
            </label>
            <label>
              Enter your password
              <input 
                type="password" 
                name="password" 
                placeholder="atleast 8 characters" 
                value={register.password}
                onChange={({target}) => setRegister({...register, password: target.value})}
              />
            </label>
            <button 
              type="button"
              onClick={() => registerButtonSubmit()}
            >
              Sign up
            </button>
          </form>
          <button 
            type="button" 
            className="btn"
            onClick={() => setSign(false)}
          >
            Log in
          </button>
      </div>
    )
  }

  return (
    <div className="login-container">
      <div className="login-container-form">
        <span>
          <img src={Data} alt="task" />
          <h2>Task Manager</h2>
        </span>
        { sign ? signup() : login() }
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
