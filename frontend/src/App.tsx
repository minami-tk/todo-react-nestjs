import React from 'react';
import { Outlet } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const App: React.FC = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/', { replace: true });
  }
  return (
    <>
      <button type="button" onClick={handleLogout}>logout</button>
      <h1>aaa</h1>
      <Outlet />
    </>
  );
}

export default App;
