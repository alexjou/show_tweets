import React from "react";
import { Switch, Route } from "react-router-dom";

import TwitterMonitor from "./components/views/TwitterMonitor";
import ControlPainel from "./components/views/ControlPainel";

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={TwitterMonitor} />
      <Route path='/painel' component={ControlPainel} />
    </Switch>
  );
}
