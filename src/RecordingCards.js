import React, { useState } from "react";
import { getRecording } from "./RecordingView";
import mockData from "./mockData";

import { Card, CardContent, Grid } from "@material-ui/core";

const RecordingCards = () => {
  const [state] = useState({
    data: Object.keys(mockData).map((recordingID) => getRecording(recordingID)),
  });
  console.log(state.data);
  return (
    <Grid container spacing={2}>
      {Object.keys(state.data).map((recordingID) => (

        <Grid item xs={12} sm={4} key={recordingID}>
          <Card>
            <CardContent>{state.data[recordingID].name}</CardContent>
            <CardContent>{state.data[recordingID].date}</CardContent>
            <CardContent>{state.data[recordingID].sampleRate}</CardContent>
            <CardContent>{state.data[recordingID].duration}</CardContent>
            <CardContent>{state.data[recordingID].status}</CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecordingCards;
