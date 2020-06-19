import React, { useState } from 'react';
import { makeStyles, createStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import RecordingTable from './recordingTable';
import { Route } from 'react-router-dom';
import RecordingView from './recordingView';
import RecordingGrid from './recordingGrid';
import { Switch, CssBaseline, AppBar, Toolbar} from '@material-ui/core';
import Demo from './demo';
import Drawer from './drawer';

const useStyles = makeStyles({
  container: {
    display: "flex",
    
    }
})

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const theme = createMuiTheme(
    {
      palette: {type: darkMode ? "dark" : "light"},
    }
  )
  const classes = useStyles();

  return (
    <switch className = {classes.container}>    
      <ThemeProvider theme = {theme}>
        <CssBaseline/>
        <AppBar >
          <Toolbar />
        </AppBar>
        <Drawer />
        <Route exact path="/" render ={(props) => <Demo {...props} />} />
        <Route
          exact
          path="/:recordingID"
          render={(props) => <RecordingView {...props} />} 
        />
        {/* <Route exact path="/" render ={(props) => <RecordingGrid {...props} />} /> */}
        
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}/>       
      </ThemeProvider>
    </switch>
    
  );
}

export default App;
