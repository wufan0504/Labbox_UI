import React from 'react';
import {
    Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    drawer: {
      width: "160px",
    }
  });

const Drawer = () => {
    const classes = useStyles();
    return (
        <div>
            <MUIDrawer variant="permanent" className = {classes.drawer}>
                <List>
                    {["Select Database", "Upload Data", "Run Spikesort", "Load Event", "Explore Cells", "Export Cells"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </MUIDrawer>
        </div>
    );
}

export default Drawer;