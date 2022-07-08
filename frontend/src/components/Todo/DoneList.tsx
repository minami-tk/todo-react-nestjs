import React from 'react'
import { Todo } from '../../interfaces'
import { DoneItem } from './DoneItem'

interface TodoListProps {
  todos: Todo[]
  setTodos: Function
}

export const DoneList: React.FC<TodoListProps> = ({ todos, setTodos }) => {

  return (
    <table>
      <thead>
        <tr>
          <th>title</th>
        </tr>
      </thead>
      <tbody>
        {
          todos?.map((todo: Todo, index: number) => {
            if (todo.done) {
              return (
                <DoneItem
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
