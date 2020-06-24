import React, { useState } from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  Card,
  CardContent,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import mockData from "./mockData";

const useStyles = makeStyles({
  recordingGridContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
});

const RecordingGrid = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [recordingList, setRecordingList] = useState(mockData);

  const getRecording = (recordingID) => {
    const { name, date, sampleRate, duration } = recordingList[recordingID];

    return (
      <Grid item xs={12} sm={4} key={recordingID}>
        <Card onClick={() => history.push(`${recordingID}`)}>
          <CardContent>{name}</CardContent>
          <CardContent>{date}</CardContent>
          <CardContent>{duration}</CardContent>
          <CardContent>{sampleRate}</CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      {recordingList ? (
        <Grid container spacing={2} className={classes.recordingGridContainer}>
          {Object.keys(recordingList).map((recordingID) =>
            getRecording(recordingID)
          )}
        </Grid>
      ) : (
        <CircularProgress color="secondary" />
      )}
    </div>
  );
};

export default RecordingGrid;
