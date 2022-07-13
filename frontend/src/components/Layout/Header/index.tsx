import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { RightButton } from './RightButton';
import { isAuthenticated, removeAuthenticated } from '../../../lib/auth/authStatus'
import { HomeButton } from './HomeButton';

export const Header = () => {
  const handleSignOut = () => {
    removeAuthenticated()
  }

  let rightButton;
  if (isAuthenticated()) {
    rightButton = <RightButton href='/' title='Sign Out' onClick={handleSignOut} />
  } else if (window.location.pathname === '/') {
    rightButton = <RightButton href='/signup' title='Sign Up' />
  } else if (window.location.pathname === '/signup') {
    rightButton = <RightButton href='/' title='Sign In' />
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {isAuthenticated() ? <HomeButton href="/todo"/> : <HomeButton href="/signup"/>}
          </Typography>
          { rightButton }
        </Toolbar>
      </AppBar>
    </Box>
  );
}