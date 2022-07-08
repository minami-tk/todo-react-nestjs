import React from 'react'
import { Todo } from '../../interfaces'
import { deleteTodo, getTodoAll, updateTodoStatus } from '../../lib/api/todos'

interface TodoItemProps {
  todo: Todo
  setTodos: Function
}

export const TodoItem: React.FC<TodoItemProps> = ({todo, setTodos}) => {
  const handleDeleteTodo = async (id: string) => {
    try {
      const res = await deleteTodo(id)

      if(res?.status === 200) {
        setTodos((oldTodos: Todo[]) => oldTodos.filter((todo: Todo) => todo._id !== id))
      } else {
        console.error(res.data.message)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleUpdateTodoStatus = async (id: string) => {
    try {
      const res = await updateTodoStatus(id)
      if(res?.status !== 200) {
        console.error(res.data)
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <tr>
      <td>{todo.title}</td>
      <td>{todo.description}</td>
      <td>
        <button onClick={() => handleUpdateTodoStatus(todo._id || '0')}>Done</button>
      </td>
      <td>
        <button onClick={() => handleDeleteTodo(todo._id || '0')}>Delete</button>
      </td>
    </tr>
  )
}
