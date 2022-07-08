import client from "./client";
import { Todo } from '../../interfaces/index'

export const getTodoAll = () => {
  return client.get('/todo')
}

export const createTodo = (todo: Todo) => {
  return client.post('/todo', todo)
}

export const updateTodoStatus = (id: string) => {
  return client.put(`/todo/status/${id}`)
}

export const deleteTodo = (id: string) => {
  return client.delete(`/todo/${id}`)
}