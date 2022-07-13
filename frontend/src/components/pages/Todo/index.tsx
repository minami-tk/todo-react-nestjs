import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Todo } from '../../../interfaces';
import { getTodoAll } from '../../../lib/api/todos';
import { Presenter } from './Presenter';
import  Axios from 'axios'

const TodoIndex: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    handleGetTodos()
  }, [])

  const redirectToSignInPage = () => {
    localStorage.removeItem('token')
    navigate('/', { replace: true })
  }

  const handleGetTodos = async () => {
    try {
      const res = await getTodoAll()
      if(res?.status === 200) {
        setTodos(res.data)
      } else {
        redirectToSignInPage()
      }
    } catch (e) {
      if (Axios.isAxiosError(e) && e.response && e.response.status === 401) {
        redirectToSignInPage()
      } else {
        console.error(e)
      }
    }
  }
  return (
    <Presenter
      todos={todos}
      setTodos={setTodos}
    />
  );
}

export default TodoIndex;
