import React from 'react'
import { useNavigate } from "react-router-dom";

export const SignInButton = () => {
  const navigate = useNavigate()

  const handleSignIn = () => {
    navigate('/signin', { replace: true });
  }

  return (
    <button type="button" onClick={handleSignIn}>logout</button>
  )
}
