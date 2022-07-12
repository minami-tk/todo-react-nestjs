import React, { useState } from 'react'
import { signup } from '../../../lib/api/auth'
import { useNavigate } from "react-router-dom"
import { Presenter } from './Presenter';

export const SignUp  = () => {
  const initialState = {
    name: '',
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
      const res = await signup(formData)

      if(res.status === 201) {
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
    <Presenter
      handleSubmit={handleSubmit}
      onChange={onChange}
      formData={formData}
    />
  )
}
