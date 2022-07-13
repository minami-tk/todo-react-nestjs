import client from "./client";
import { Todo } from '../../interfaces/index'
import { headers } from './config'
import axios from 'axios'

export const getTodoAll = async () => {
  return await client.get('/todo', headers)
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