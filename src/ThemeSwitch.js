import React from "react";

import { connect } from "react-redux";
import { Switch } from "@material-ui/core";
import { switchTheme } from "./Actions/switchThemeAction";

const SwitchThemeButton = (props) => {
  return <Switch checked={props.darkMode} onChange={props.switchTheme} />;
};

// redux learning
const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchTheme: () => {
      dispatch(switchTheme());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SwitchThemeButton);
