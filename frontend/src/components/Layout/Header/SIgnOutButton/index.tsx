import React from 'react'
import { useNavigate } from "react-router-dom";

export const SignInButton = () => {
  const navigate = useNavigate()

  const handleSignOut = () => {
    localStorage.removeItem('token')
    navigate('/', { replace: true });
  }


  return (
    <button type="button" onClick={handleSignOut}>SignOut</button>
  )
}
