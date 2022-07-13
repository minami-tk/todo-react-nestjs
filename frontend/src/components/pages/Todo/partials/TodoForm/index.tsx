import React, { useState } from 'react'
import { Todo } from '../../../../../interfaces'
import { createTodo } from '../../../../../lib/api/todos'
import { Presenter } from './Presenter'

interface TodoFormProps {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<any>>
}

export const TodoForm: React.FC<TodoFormProps> = ({ todos, setTodos }) => {
  const initialState = {
    title: '',
    description: '',
  }
  const [formData, setFormData] = useState(initialState)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleCreateTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await createTodo(formData)
      if(res.status === 200) {
        setTodos([...todos, res.data])
        setFormData(initialState)
      } else {
        console.error(res.data.message)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Presenter
      onChange={onChange}
      handleCreateTodo={handleCreateTodo}
      formData={formData}
    />
  )
}
