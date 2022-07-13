import React, { useState } from 'react'
import { signin } from '../../../lib/api/auth'
import { useNavigate } from "react-router-dom";
import { Presenter } from './Presenter';
import { removeAuthenticated, setAuthenticated } from '../../../lib/auth/authStatus';

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
        await setAuthenticated(res.data.token)
        navigate('/todo', { replace: true })
      } else {
        removeAuthenticated()
        console.error(res.data.message)
      }
    } catch (error) {
      removeAuthenticated()
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
