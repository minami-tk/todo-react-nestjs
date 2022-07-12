import React from 'react'
import { TodoForm } from './partials/TodoForm';
import { TodoList } from './partials/TodoList';
import { Box, Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import { Todo } from '../../../interfaces';

type Props = {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<any>>
}

export const Presenter = (props: Props) => {
  const { todos, setTodos } = props;

  return (
    <Container maxWidth="sm">
      <Box sx={{ m: 3 }}>
        <Typography variant="h4" component="div" gutterBottom>Todo App</Typography>
        <TodoForm todos={todos} setTodos={setTodos} />
      </Box>
      <Box sx={{ m: 3 }}>
        <Paper variant="outlined" sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <TodoList todos={todos} setTodos={setTodos} showTodos title="Todo List" />
        </Paper>
      </Box>
      <Box sx={{ m: 3 }}>
        <Paper variant="outlined" sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <TodoList todos={todos} setTodos={setTodos} showTodos={false} title="Done List" />
        </Paper>
      </Box>
    </Container>
  )
}