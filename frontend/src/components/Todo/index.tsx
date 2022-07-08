import React, { useEffect, useState } from 'react';
import { Todo } from '../../interfaces';
import { getTodoAll } from '../../lib/api/todos';
import { DoneList } from './DoneList';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';


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
    <>
      <h1>Todo App</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <h1>Todo</h1>
      <TodoList todos={todos} setTodos={setTodos} />
      <h1>Done</h1>
      <DoneList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default TodoIndex;
