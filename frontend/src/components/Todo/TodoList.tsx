import React from 'react'
import { Todo } from '../../interfaces'
import { TodoItem } from './TodoItem'

interface TodoListProps {
  todos: Todo[]
  setTodos: Function
}

export const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>title</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>
        {
          todos?.map((todo: Todo, index:  number) => {
            if (!todo.done) {
              return (
                <TodoItem
                  key={index}
                  todo={todo}
                  setTodos={setTodos}
                />
              )
            }
          })
        }
      </tbody>
    </table>
  )
}
