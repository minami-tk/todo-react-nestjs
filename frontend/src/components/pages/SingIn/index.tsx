import React, { useState } from 'react'
import { signin } from '../../../lib/api/auth'
import { useNavigate } from "react-router-dom";
import { Presenter } from './Presenter';

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
        console.log('Successfully')
        localStorage.setItem('token', res.data.token)
        navigate('/todo', { replace: true })
      } else {
        localStorage.removeItem('token')
        console.error(res.data.message)
      }
    } catch (error) {
      localStorage.removeItem('token')
      console.error(error)
    }
  }
  return (
    <Presenter
      handleSubmit={handleSubmit}
      formData={formData}
      onChange={onChange}
    />
  )
}
