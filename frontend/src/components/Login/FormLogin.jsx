import React, { useState } from "react";
import { toast } from 'react-toastify';
import { fetchLogin } from '../../helpers/fetch';

export default function FormLogin({ selectScreen }) {
  const [user, setUser] = useState({ email: '', password: '' });

  const toastSettings = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  }

  const loginButtonSubmit = async () => {
    const fetch = await fetchLogin(user)
    if (fetch.message) {
      localStorage.removeItem('key');
      toast.error(fetch.message, toastSettings);
    } else {
      const { token } = fetch;
      setUser({ email: '', password: '' })
      localStorage.setItem('key', JSON.stringify(token));
      window.location.href = `${window.origin}/manager`;
    }
  }

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
            onClick={() => selectScreen(true)}
          >
            Sign up now
          </button>
      </div>
  )
}
