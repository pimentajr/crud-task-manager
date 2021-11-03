import React from 'react';
import NotFoundImage from '../../images/not-found.svg';
import {Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1>Sign in to access this page</h1>
      <img src={NotFoundImage} alt="Not Found" />
      <Link className="link-btn" to="/">Log in</Link>
    </div>
  )
}
