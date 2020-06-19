// react
import React from 'react';
import ReactDOM from 'react-dom';

// router
import { BrowserRouter as Router } from 'react-router-dom';

// styling
import theme from './theme';
import './index.css';
// import './styles.css';
import { ThemeProvider } from '@material-ui/core/styles';


// The main app container, including the app bar
import AppContainer from './AppContainer';

// Custom routes
// import Routes from './Routes';
import TableSort from './demo';
import { Typography } from '@material-ui/core';
import Drawer from './drawer';


const content = (
  // <React.StrictMode> // there's an annoying error when strict mode is enabled. See for example: https://github.com/styled-components/styled-components/issues/2154 
  <ThemeProvider theme={theme}>

      <Router>
        <AppContainer >
          {/* <Routes /> */}
          <TableSort />
          
          <Typography>HI testing 1</Typography>
          <Drawer />
        </AppContainer>
      </Router>

  </ThemeProvider>
  // </React.StrictMode>
);

// Render the app
ReactDOM.render(
  content,
  document.getElementById('root')
);