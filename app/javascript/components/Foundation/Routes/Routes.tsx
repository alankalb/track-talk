import React from "react";

import { Homepage } from "../../Homepage";
import { PasswordReset } from "../../PasswordReset";

import { Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <Homepage />
      </Route>
      <Route path="/password_reset">
        <PasswordReset />
      </Route>
    </Switch>
  );
}
