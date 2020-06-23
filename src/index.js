// react
import React from 'react';
import ReactDOM from 'react-dom';

// router
import { BrowserRouter as Router } from 'react-router-dom';

// styling
import ThemeOptionProvider from './themeOptions';
import './index.css';
// import './styles.css';


// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux'

// reducer
import themeReducer from './Reducer/Reducer';

// The main app container, including the app bar
import AppContainer from './AppContainer';

// Custom routes
// import Routes from './Routes';
import TableSort from './demo';
import { CssBaseline } from '@material-ui/core';

// Create the store
const store = createStore(themeReducer);


const content = (

    // <React.StrictMode> // there's an annoying error when strict mode is enabled. See for example: https://github.com/styled-components/styled-components/issues/2154 
    <Provider store={store}>
      
      <ThemeOptionProvider>
        <CssBaseline />
          <Router>
            <AppContainer >
              {/* <Routes /> */}
              <TableSort />
                            
            </AppContainer>
          </Router>
      </ThemeOptionProvider>
    </Provider>

   
    // </React.StrictMode>
  
)

// Render the app
ReactDOM.render(
  content,
  document.getElementById('root')
);