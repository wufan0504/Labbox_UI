import React from "react";

import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Hidden from "@material-ui/core/Hidden";
import logo from "./screenshots/DBC_logo_color.svg";

const useStyles = makeStyles({
  root: {
    // when you use it, change to 100vh
    // "100vh" is not perfect for all screen ex. iPhone X

    // 2 solutions
    // https://github.com/ulrichformann/react-div-100vh
    // https://github.com/mvasin/react-div-100vh
    width: "100%",
    textAlign: "left",
    height: "100%", // todo change to "100vh" or use react-div-100vh
    position: "relative",
    
    // background: `url(${cover})`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
  },
  appBar: {
    background: "primary",
  },
  toolbar: {
    
    minHeight: 64,
  },

  container: {
    width: "100%",
    height: "100%",
    // zIndex: 2,
    position: "relative",
  },

  left: {
    flexGrow: 1,
  },
  right: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logo: {
    width: "13em",
    height: "auto",
    marginLeft: "auto",
  },

  input: {
    background: "secondary",
    "&:hover": {
      background: "secondary",
    },
    "&$focused": {
      background: "secondary",
    },
  },
  inputInput: {
    color: 'secondary',
  },

  underline: {
    "&:after": {
      borderColor: "primary",
    },
  },
  focused: {},
  inputLabel: {
    
    opacity: 0.8,
    "&$focused": {
      opacity: 1,
    },
  },
  checkbox: {
    color: "inherit",
  },
  checkboxLabel: {
    color: "inherit",
  },

  bottomSignUp: {
    textAlign: "center",
    marginTop: 24,
    marginBottom: 16,
  },
  forgetPassword: {
    textAlign: "center",

    // [breakpoints.only("xs")]: {
    //   position: "absolute",
    //   bottom: 32,
    //   left: "50%",
    //   transform: "translateX(-50%)",
    // },
    // [breakpoints.up("sm")]: {
    //   marginTop: 40,
    // },
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.container} container justify="center">
      <AppBar className={classes.appBar}  elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Grid container>
            <Grid item xs>
              <img alt="logo" className={classes.logo} src={logo} />
            </Grid>
            <Hidden only={"xs"}>
              <Grid xs item container alignItems="center" justify="flex-end">
                <Typography variant="subtitle1">
                  Not a member?
                </Typography>{" "}
                <Button color={"secondary"}>Sign Up</Button>
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid 
        
        
        xs={12}
        sm={6}
        md={5}
        lg={4}
        container
         
      >
        <form>
          <TextField
            fullWidth
            label={"Username"}
            margin={"normal"}
            variant="filled"
            classes={{}}
            InputLabelProps={{
              classes: {
                root: classes.inputLabel,
                focused: classes.focused,
              },
            }}
            InputProps={{
              classes: {
                root: classes.input,
                focused: classes.focused,
                underline: classes.underline,
              },
            }}
          />
          <TextField
            fullWidth
            label={"Password"}
            margin={"normal"}
            variant="filled"
            type={"password"}
            InputLabelProps={{
              classes: {
                root: classes.inputLabel,
                focused: classes.focused,
              },
            }}
            InputProps={{
              classes: {
                root: classes.input,
                focused: classes.focused,
                underline: classes.underline,
                input: classes.inputInput
              },
            }}
          />
          <FormControl fullWidth>
            <FormControlLabel
              control={
                <Checkbox value="checkedC" className={classes.checkbox} />
              }
              label="Remember Me"
              classes={{
                label: classes.checkboxLabel,
              }}
            />
          </FormControl>
          <FormControl margin={"normal"} fullWidth>
            <Button
              classes={{ label: classes.buttonLabel }}
              fullWidth
              variant={"contained"}
              color={"primary"}
              component={Link}
              to="/database"
            >
              Log in
            </Button>
          </FormControl>
          <Hidden smUp >
            <Grid item container justify="space-around" >
              <Typography color="textSecondary">
                Not a member? <Link color="secondary">Sign Up Now</Link>
              </Typography>
            </Grid>
          </Hidden>
          <div className={classes.forgetPassword}>
            <Typography color="textSecondary">
              <Link color="secondary">Forget your password ?</Link>
            </Typography>
          </div>
        </form>
      </Grid>
    </Grid>
  );
  // </div>
};
export default Home;
