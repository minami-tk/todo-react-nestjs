import React from 'react';
import { Outlet } from 'react-router-dom'
import { Header } from './components/Layout/Header';
import './App.css'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
