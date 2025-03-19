import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import { Typography } from '@mui/material';
// import { ThemeProvider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getDesignTokens } from './theme';
export default function App() {
  const [mode, setMode] = React.useState('light');
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
      
          <TopBar setMode={setMode} open={open} handleDrawerOpen={handleDrawerOpen}/>

          <SideBar open={open} handleDrawerClose={handleDrawerClose}/>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography sx={{ marginBottom: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            faucibus et molestie ac.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>

  );
}
