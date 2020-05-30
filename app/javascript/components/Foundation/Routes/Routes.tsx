import React from "react";

import { Homepage } from "../../Homepage";

import { Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Switch>
      <Route path="/">
        <Homepage />
      </Route>
    </Switch>
  );
}
