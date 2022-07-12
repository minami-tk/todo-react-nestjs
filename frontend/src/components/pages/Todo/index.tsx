import React, { useEffect, useState } from 'react';
import { Todo } from '../../../interfaces';
import { getTodoAll } from '../../../lib/api/todos';
import { Presenter } from './Presenter';

const TodoIndex: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  useEffect(() => {
    handleGetTodos()
  }, [todos])
  const handleGetTodos = async () => {
    try {
      const res = await getTodoAll()
      if(res?.status === 200) {
        setTodos(res.data)
      } else {
        console.error(res.data.message)
      }
    } catch (error) {
      console.error(error)
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
