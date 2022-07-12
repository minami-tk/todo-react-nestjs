import React from 'react'
import { Todo } from '../../../../../interfaces'
import { deleteTodo, updateTodoStatus } from '../../../../../lib/api/todos'
import { Presenter } from './Presenter'

interface TodoListProps {
  todos: Todo[]
  setTodos: Function
  showTodos: boolean
  title: string
}

export const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, showTodos, title }) => {
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
    <Presenter 
      title={title} 
      todos={todos}
      showTodos={showTodos}
      handleUpdateTodoStatus={handleUpdateTodoStatus} 
      handleDeleteTodo={handleDeleteTodo}
    />
  )
}
