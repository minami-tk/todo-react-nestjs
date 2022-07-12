import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export const SignOutButton = () => {
  const navigate = useNavigate()

  const handleSignOut = () => {
    localStorage.removeItem('token')
    navigate('/', { replace: true });
  }

  return (
    <Button color="inherit" onClick={handleSignOut}>SignOut</Button>
  )
}
