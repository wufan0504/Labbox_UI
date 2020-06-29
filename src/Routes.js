import React from "react";
import { Switch, Route } from "react-router-dom";

import RecordingView from "./RecordingView";

import Home from "./Home";
import About from "./About";
import Prototypes from "./Prototypes";
import Config from "./Config";

const Routes = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/prototypes">
        <Prototypes />
      </Route>
      <Route path="/config">
        <Config />
      </Route>
      <Route path="/database">
        <RecordingView />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
