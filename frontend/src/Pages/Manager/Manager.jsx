import React from 'react';
import NotFound from '../../components/Manager/NotFound';
import Dashboard from '../../components/Manager/Dashboard';
import './Manager.css';

export default function Manager() {
  const token = JSON.parse(localStorage.getItem('key'));
  return (
    <div>
      { token ? <Dashboard /> : <NotFound />}
    </div>
  )
}
