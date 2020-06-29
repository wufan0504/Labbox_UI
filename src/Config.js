import React, { useState } from "react";
import { Paper, FormControl, Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

const useStyles = makeStyles({
  paper: {
    width: "100%",
    padding: 30,
  },
  button: {
      margin: 5,
  }
});

const Config = () => {
  const classes = useStyles();

  //   const [sortMethod, setSortMethod] = useState("Mountainsort4");
  //   const handleChangeSort = (event) => {
  //     setSortMethod(event.target.value);
  //   };

  //   const [storage, setStorage] = useState("AWS 1TB storage");
  //   const handleChangeStorage = (event) => {
  //     setStorage(event.target.value);
  //   };
  const [values, setValues] = useState({
    storage: "AWS 1TB storage",
    database: "User Private",
    sortMethod: "Mountainsort4",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Grid container justify="center" spacing={2}>
      <Box width="100%" margin="0.5em">
        <Button className={classes.button} variant="outlined" color="primary" size="small">
          Export
        </Button>
        <Button className={classes.button} variant="outlined" color="secondary" size="small">
          Save
        </Button>
        <Button className={classes.button} variant="outlined" color="light" size="small">
          Load
        </Button>
        <Button className={classes.button} variant="outlined" color="secondary.light" size="small">
          Cancel
        </Button>
        <Button className={classes.button} variant="outlined" color="secondary.dark" size="small">
          Cancel
        </Button>
      </Box>
      <Grid item xs={12} md={4} key="cloud">
        <Typography variant="h6"> Cloud setup </Typography>
        <Paper className={classes.paper}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="storage"
              name="storage"
              value={values.storage}
              onChange={handleChange("storage")}
            >
              <FormControlLabel
                value="AWS 1TB storage"
                control={<Radio />}
                label="AWS 1TB storage"
              />
              <FormControlLabel
                value="AWS 10TB storage"
                control={<Radio />}
                label="AWS 10TB storage"
              />
              <FormControlLabel
                value="AWS 50TB storage"
                control={<Radio />}
                label="AWS 50TB storage"
              />
              <FormControlLabel
                value="Custom data storage"
                disabled
                control={<Radio />}
                label="Custom data storage"
              />
            </RadioGroup>
          </FormControl>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4} key="sorthing method">
        <Typography variant="h6"> Spikesorting </Typography>
        <Paper className={classes.paper}>
          <FormControl component="fieldset">
            {/* <FormLabel component="legend">Spikesorting method</FormLabel> */}
            <RadioGroup
              aria-label="sorting method"
              name="sorting method"
              value={values.sortMethod}
              onChange={handleChange("sortMethod")}
            >
              <FormControlLabel
                value="Mountainsort4"
                control={<Radio />}
                label="Mountainsort4"
              />
              <FormControlLabel
                value="Kilosort2"
                control={<Radio />}
                label="Kilosort2"
              />
              <FormControlLabel
                value="KlustaKwik"
                control={<Radio />}
                label="KlustaKwik"
              />
              <FormControlLabel
                value="disabled"
                disabled
                control={<Radio />}
                label="Custom method"
              />
            </RadioGroup>
          </FormControl>
          <Typography variant="body1" gutterBottom>
            Thresholding:
          </Typography>
          <Typography variant="body2" color="secondary">
            spike_amplitude
          </Typography>
          <Typography variant="body1" gutterBottom>
            Single-unit criteria:
          </Typography>
          <Typography variant="body2" color="secondary">
            spike_count
          </Typography>
          <Typography variant="body2" color="secondary">
            spike_amplitude
          </Typography>
          <Typography variant="body2" color="secondary">
            L-ratio
          </Typography>
          <Typography variant="body2" color="secondary" gutterBottom>
            ISI index
          </Typography>

          <Typography variant="body1" gutterBottom>
            {" "}
            Automerge{" "}
          </Typography>
          <Typography variant="body2" color="secondary" gutterBottom>
            {" "}
            CCG properties{" "}
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4} key="LFP analysis">
        <Typography variant="h6">LFP analysis</Typography>
        <Paper className={classes.paper}>
          <Typography variant="body1">Bandpass filter select</Typography>
          <Typography variant="body1">Ripple detection?</Typography>
          <Typography variant="body1">Wavelet transform parameters</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4} key="database">
        <Typography variant="h6"> Database </Typography>
        <Paper className={classes.paper}>
          <FormControl component="fieldset">
            {/* <FormLabel component="legend">Spikesorting method</FormLabel> */}
            <RadioGroup
              aria-label="database"
              name="database"
              value={values.database}
              onChange={handleChange("database")}
            >
              <FormControlLabel
                value="User Private"
                control={<Radio />}
                label="User Private"
              />
              <FormControlLabel
                value="Group 1 Shared"
                control={<Radio />}
                label="Group 1 Shared"
              />
              <FormControlLabel
                value="Labbox Cloud Shared"
                control={<Radio />}
                label="Labbox Cloud Shared"
              />
            </RadioGroup>
          </FormControl>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} key="GUI">
        <Typography variant="h6"> GUI setting </Typography>
        <Paper className={classes.paper}>
          <Typography variant="body1" gutterBottom>
            Recording view: num of columns
          </Typography>
          <Typography variant="body1" gutterBottom>
            Hide channels:
          </Typography>
          <Typography variant="body1" gutterBottom>
            Time series default viewing window: 1 second
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4} key="cell classification">
        <Typography variant="h6"> Cell classification </Typography>
        <Paper className={classes.paper}>
          <Typography variant="body1" gutterBottom>
            {" "}
            Narrow interneuron{" "}
          </Typography>
          <Typography variant="body2" color="secondary">
            {" "}
            acg_tau_decay{" "}
          </Typography>
          <Typography variant="body2" color="secondary">
            {" "}
            acg_tau_rise{" "}
          </Typography>
          <Typography variant="body2" color="secondary" gutterBottom>
            {" "}
            trough_to_peak{" "}
          </Typography>

          <Typography variant="body1" gutterBottom>
            {" "}
            Wide interneuron{" "}
          </Typography>
          <Typography variant="body2" color="secondary">
            {" "}
            acg_tau_decay{" "}
          </Typography>
          <Typography variant="body2" color="secondary">
            {" "}
            acg_tau_rise{" "}
          </Typography>
          <Typography variant="body2" color="secondary" gutterBottom>
            {" "}
            trough_to_peak{" "}
          </Typography>

          <Typography variant="body1" gutterBottom>
            {" "}
            Pyramidal{" "}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Config;
