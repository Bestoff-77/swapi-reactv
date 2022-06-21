import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from "../descarga.png";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box className="header" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img src={Logo} width="80"/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Star Wars
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button key={1} as={Link} to={`/`} sx={{ color: '#fff' }}>Home</Button>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button key={2} as={Link} to={`/contacts`} sx={{ color: '#fff' }}>Contacts</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
