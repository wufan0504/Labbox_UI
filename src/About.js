import React from "react";

import { Typography, Box } from "@material-ui/core";


function About() {
  return (
    <Box display="flex">
      <Typography variant="h1" component="p">
        This is the about page
      </Typography>
      <Typography variant="h2" component="p">
        Description here
      </Typography>
    </Box>
  );
}

export default About;