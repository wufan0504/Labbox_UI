import React, { Fragment, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Home, AccountCircle } from '@material-ui/icons';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import SwitchThemeButton from './ThemeSwitch'

const ToolBarContent = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <Fragment>
            <Button color="inherit" component={Link} to="/">
                <Home />&nbsp;
                <Typography variant="h6">
                    Labbox-ephys
                </Typography>
            </Button>
            {/* <span style={{marginLeft: 'auto'}} /> */}
            
            <SwitchThemeButton />
            <Button color="inherit" component={Link} to="/database" style={{marginLeft: 'auto'}}>Database</Button>
            <Button color="inherit" component={Link} to="/config">Config</Button>
            <Button color="inherit" component={Link} to="/prototypes">Prototypes</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/">Logout</MenuItem>
              </Menu>

        </Fragment>
    )
}
//////////////////////////////////////////////////////////////

const AppContainer = (props) => {
    return (
        <div className={"TheAppBar"}>
            <AppBar position="static" >
                <Toolbar>
                    <ToolBarContent/>
                </Toolbar>
            </AppBar>
            <div style={{padding: 30}}>
                {props.children}
            </div>
        </div>
    )
}

export default AppContainer;