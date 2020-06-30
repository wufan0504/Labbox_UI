import React, { useState } from "react";
import { getRecording } from "./RecordingView";
import mockData from "./mockData";
import moment from "moment";

import {
  Card,
  CardContent,
  Grid,
  CardMedia,
  Typography,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles({
  media: {
    height: "213px",
  },
  cardContent: {
    position: "relative",
    padding: "5px",
    
  },
  overlay: {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    color: "white",
    backgroundColor: "black",
    borderRadius: "5%",
  },
});

const RecordingCards = () => {
  const classes = useStyles();
  const [state] = useState({
    data: Object.keys(mockData).map((recordingID) => getRecording(recordingID)),
  });

  return (
    <Grid container spacing={2}>
      {Object.keys(state.data).map((recordingID) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={recordingID}>
          <Card>
            <CardContent className={classes.cardContent}>
              <CardMedia
                className={classes.media}
                image={state.data[recordingID].rawView}
                title="Recording preview"
                // component="image"
              />
              <Typography variant="subtitle2" className={classes.overlay}>
                {moment()
                  .startOf("day")
                  .seconds(state.data[recordingID].duration)
                  .format("H:mm:ss")}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="textPrimary" component="p">
                File: {state.data[recordingID].name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Upload Date: {state.data[recordingID].date}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Sample Rate (Hz): {state.data[recordingID].sampleRate}
              </Typography>
            </CardContent>

            <CardContent>
              <Typography> Status: {state.data[recordingID].status}</Typography>
            </CardContent>

            <IconButton size="small">
              <EditIcon />
            </IconButton>
            <IconButton size="small">
              <DeleteIcon />
            </IconButton>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecordingCards;
