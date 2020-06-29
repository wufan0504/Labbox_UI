import React, { useState } from "react";
import { IconButton, Container, Box } from "@material-ui/core";

import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import CloudUploadRoundedIcon from "@material-ui/icons/CloudUploadRounded";
import StorageRoundedIcon from "@material-ui/icons/StorageRounded";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

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
  const [view, setView] = useState("table");

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <Container maxWidth="100%" display="flex">
      <Box display="flex">
        <Box width="100%">
          <IconButton>
            <StorageRoundedIcon color="secondary" />
          </IconButton>
          <IconButton>
            <CloudUploadRoundedIcon color="secondary" />
          </IconButton>
        </Box>

        <Box>
          <ToggleButtonGroup
            value={view}
            exclusive
            onChange={handleChange}
            mr={10}
          >
            <ToggleButton size="small" value="table" aria-label="table">
              <ViewListIcon />
            </ToggleButton>
            <ToggleButton size="small" value="grid" aria-label="grid">
              <ViewModuleIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>

      {view === "grid" ? <RecordingCards /> : <RecordingTableSorted />}
    </Container>
  );
};

export default RecordingView;
