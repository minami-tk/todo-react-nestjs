import React from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Typography } from '@mui/material';
import { Todo } from '../../../../../interfaces';


type Props = {
  title: string
  todos: Todo[]
  showTodos: boolean
  handleUpdateTodoStatus: (id: string) => void
  handleDeleteTodo: (id: string) => void
}
export const Presenter = (props: Props) => {
  const { 
    title, 
    todos, 
    showTodos, 
    handleUpdateTodoStatus, 
    handleDeleteTodo 
  } = props;

  return (
    <>
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {title}
    </Typography>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>TITLE</TableCell>
          <TableCell>DESCRIPTION</TableCell>
          <TableCell align="center">{showTodos ? "DONE" : "UNDO"}</TableCell>
          <TableCell align="center">DELETE</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          todos?.map((todo: Todo, index: number) => {
            if (showTodos !== todo.done) {
              return (
                <TableRow key={index}>
                  <TableCell>{todo.title}</TableCell>
                  <TableCell>{todo.description}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleUpdateTodoStatus(todo._id || '0')} aria-label="delete">
                      {showTodos ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleDeleteTodo(todo._id || '0')} aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )
            }
            return
          })
        }
      </TableBody>
    </Table>
    </>
  )
}