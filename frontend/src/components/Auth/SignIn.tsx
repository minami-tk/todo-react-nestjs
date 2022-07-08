import React, { useState } from 'react'
import { signin } from '../../lib/api/auth'
import { useNavigate } from "react-router-dom";

export const SignIn  = () => {
  const initialState = {
    email: '',
    password: '',
  }
  const [formData, setFormData] = useState(initialState)
  const navigate = useNavigate()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await signin(formData)
      if(res.status === 200) {
        localStorage.setItem('token', res.data.token)
        navigate('/todo', { replace: true });
      } else {
        console.error(res.data.message)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p>email</p>
        <input type="text" name="email" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}  />
        <p>password</p>
        <input type="text" name="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} />
        <div>
          <input type="submit" value="login" />
        </div>
      </form>
    </>
  )
}
