import React, { useState } from "react";
import { toast } from 'react-toastify';
import { fetchSignup } from '../../helpers/fetch';

export default function FormSignup({ selectScreen }) {
  const [register, setRegister] = useState({ name: '', email: '', password: '' });

  const toastSettings = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  }

  const registerButtonSubmit = async () => {
    const fetch = await fetchSignup(register);
    if (fetch.message) {
      toast.error(fetch.message, toastSettings);
    } else {
      setRegister({ name: '', email: '', password: '' });
      selectScreen(false);
      toast.success('Register Success', toastSettings);
    }
  }

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
                placeholder="password" 
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
            onClick={() => selectScreen(false)}
          >
            Log in
          </button>
      </div>
  )
}
