import React, { useState } from 'react'
import { Todo } from '../../interfaces'
import { createTodo } from '../../lib/api/todos'

interface TodoFormProps {
    todos: Todo[]
    setTodos: Function
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
      } else {
        console.error(res.data.message)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleCreateTodo}>
      <p>title</p>
      <input type="text" name="title" value={formData.title} onChange={(e) => onChange(e)} />
      <p>description</p>
      <input type="text" name="description" value={formData.description} onChange={(e) => onChange(e)} />
      <div>
        <input type="submit" value="add" disabled={!formData.title || !formData.description} />
      </div>
    </form>
  )
}
