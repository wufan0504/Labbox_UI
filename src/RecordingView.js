import React from "react";
import { Paper, IconButton } from "@material-ui/core";

import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import CloudUploadRoundedIcon from "@material-ui/icons/CloudUploadRounded";
import StorageRoundedIcon from "@material-ui/icons/StorageRounded";

import mockData from "./mockData";
import RecordingCards from "./RecordingCards";
import RecordingTableSorted from "./RecordingTableSorted";

export const getRecording = (recordingID) => {
  const { name, date, sampleRate, duration, status, rawView } = mockData[
    recordingID
  ];

  return {
    name: name,
    date: date,
    sampleRate: sampleRate,
    duration: duration,
    status: status,
    rawView: rawView,
  };
};

const RecordingView = () => {

  const showGrid = false;

  return (
    <Paper>
      <IconButton>
        <StorageRoundedIcon color="secondary" />
      </IconButton>
      <IconButton>
        <CloudUploadRoundedIcon color="secondary" />
      </IconButton>
      <IconButton>
        <ViewListIcon />
      </IconButton>
      <IconButton>
        <ViewModuleIcon />
      </IconButton>

      {showGrid ? <RecordingCards /> : <RecordingTableSorted />}
    </Paper>
  );
};

export default RecordingView;
