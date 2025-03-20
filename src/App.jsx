import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import { Typography } from '@mui/material';
// import { ThemeProvider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getDesignTokens } from './theme';
import { styled } from '@mui/material';
import { Outlet } from 'react-router-dom';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function App() {
  const [mode, setMode] = React.useState(Boolean(localStorage.getItem('mode'))?localStorage.getItem('mode'):'light');
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>

      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
      
          <TopBar setMode={setMode}  open={open} handleDrawerOpen={handleDrawerOpen}/>

          <SideBar open={open} handleDrawerClose={handleDrawerClose}/>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
          <Outlet/>
        </Box>
      </Box>
    </ThemeProvider>

  );
}
