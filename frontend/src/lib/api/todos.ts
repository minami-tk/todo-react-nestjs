import client from "./client";
import { Todo } from '../../interfaces/index'

export const getTodoAll = async () => {
  return await client.get('/todo', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
  
}

export const createTodo = async (todo: Todo) => {
  return await client.post('/todo', todo, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

export const updateTodoStatus = async (id: string) => {
  return await client.put(`/todo/status/${id}`, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

export const deleteTodo = async (id: string) => {
  // TODO: なぜかレスポンスが帰ってこない
  client.delete(`/todo/${id}`, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  }).then((res) => {
    return res
  })
}