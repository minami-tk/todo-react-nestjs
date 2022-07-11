import React from 'react'
import { useNavigate } from "react-router-dom";

export const RegisterButton = () => {
  const navigate = useNavigate()

  const handleRegister = () => {
    navigate('/register', { replace: true });
  }

  return (
    <button type="button" onClick={handleRegister}>Register</button>
  )
}
