import React from 'react';
import { Outlet } from 'react-router-dom'
import { Header } from './components/Layout/Header';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme'
import CssBaseline from '@mui/material/CssBaseline'

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
