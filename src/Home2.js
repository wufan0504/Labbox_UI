import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Hidden from '@material-ui/core/Hidden';
import logo from './screenshots/DBC_logo_color.svg';

const styles = ({ breakpoints, palette }) => {
  // const cover =
  //   'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80';
  const backDropBG = 'rgba(0,0,0,0.7)';
  return {
    root: {
      // when you use it, change to 100vh
      // "100vh" is not perfect for all screen ex. iPhone X

      // 2 solutions
      // https://github.com/ulrichformann/react-div-100vh
      // https://github.com/mvasin/react-div-100vh
      width: '100%',
      textAlign: 'left',
      height: '100%', // todo change to "100vh" or use react-div-100vh
      position: 'relative',
      // background: `url(${cover})`,
      // backgroundSize: 'cover',
      // backgroundPosition: 'center',
      color: '#ffffff',
      [breakpoints.only('xs')]: {
        position: 'relative',
        height: 566,
      },
    },
    appBar: {
      background: 'none',
    },
    toolbar: {
      minHeight: 64,
    },
    backDrop: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: backDropBG,
    },
    container: {
      width:'100%',
      height: '100%',
      zIndex: 2,
      position: 'relative',
    },

    left: {
      flexGrow: 1,
    },
    right: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    logo: {
      width: "10em",
      height: "auto",
      marginLeft: 'auto',
      [breakpoints.up('sm')]: {
        marginRight: 'auto',
      },
    },
    mlNormal: {
      marginLeft: 16,
    },
    content: {
      padding: 16,
    },
    input: {
      background: 'rgba(255,255,255,0.16)',
      '&:hover': {
        background: 'rgba(255,255,255,0.24)',
      },
      '&$focused': {
        background: 'rgba(255,255,255,0.24)',
      },
    },
    inputInput: {
      color: '#ffffff',
    },
    underline: {
      '&:after': {
        borderColor: palette.primary.light,
      },
    },
    focused: {},
    inputLabel: {
      color: '#ffffff',
      opacity: 0.8,
      '&$focused': {
        opacity: 1,
        color: '#ffffff',
      },
    },
    checkbox: {
      color: 'rgba(255,255,255,0.87)',
    },
    checkboxLabel: {
      color: 'rgba(255,255,255,0.87)',
    },

    buttonLabel: {
      textTransform: 'none',
    },
    bottomSignUp: {
      textAlign: 'center',
      marginTop: 24,
      marginBottom: 16,
    },
    forgetPassword: {
      textAlign: 'center',
      color: '#ffffff',
      [breakpoints.only('xs')]: {
        position: 'absolute',
        bottom: 32,
        left: '50%',
        transform: 'translateX(-50%)',
      },
      [breakpoints.up('sm')]: {
        marginTop: 40,
      },
    },
  };
};


const Home = withStyles(styles, { name: 'LoginPage' })(
  ({ classes }) => (
    
    // <div className={classes.root}>
    //   <div className={classes.backDrop} />
      <Grid className={classes.container} container justify={'center'}>
        <AppBar className={classes.appBar} position={'absolute'} elevation={0}>
          <Toolbar className={classes.toolbar}>
            <Grid container>

              <Grid item xs container>
                <img
                  alt={'logo'}
                  className={classes.logo}
                  src={logo}
                />
              </Grid>
              <Hidden only={'xs'}>
                <Grid
                  xs
                  item
                  container
                  alignItems={'center'}
                  justify={'flex-end'}
                >
                  <Typography variant="subtitle1">
                    Not a member?
                  </Typography>{' '}
                  <Button
                    classes={{ label: classes.buttonLabel }}
                    className={classes.mlNormal}
                    color={'secondary'}
                  >
                    Sign Up
                  </Button>
                </Grid>
              </Hidden>
            </Grid>
          </Toolbar>
        </AppBar>
        <Grid
          className={classes.content}
          item
          xs={12}
          sm={6}
          md={5}
          lg={4}
          container
          alignItems={'center'}
        >
          <form>
            <TextField
              fullWidth
              label={'Username'}
              margin={'normal'}
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
                  input: classes.inputInput
                },
              }}
            />
            <TextField
              fullWidth
              label={'Password'}
              margin={'normal'}
              variant="filled"
              type={'password'}
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
            <FormControl margin={'normal'} fullWidth>
              <Button
                classes={{ label: classes.buttonLabel }}
                fullWidth
                variant={'contained'}
                color={'primary'}
                component={Link} to="/database"
              >
                Log in
              </Button>
            </FormControl>
            <Hidden smUp>
              <div className={classes.bottomSignUp}>
                <Typography className={classes.grey}>
                  Not a member ?
                  <Link color={'secondary'} className={classes.mlNormal}>
                    Sign Up Now
                  </Link>
                </Typography>
              </div>
            </Hidden>
            <div className={classes.forgetPassword}>
              <Typography color={'inherit'}>
                <Link color={'inherit'}>Forget your password ?</Link>
              </Typography>
            </div>
          </form>
        </Grid>
      </Grid>
    // </div>
  ),
);
export default Home;
