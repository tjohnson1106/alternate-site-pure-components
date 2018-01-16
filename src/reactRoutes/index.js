import React from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

export default () => {
  <BrowserRouter>
    <Switch>
      <Route path="/Menu" exact component={Menu} />
      <Route path="/Contact" exact component={Contact} />
      <Route path="/Footer" exact component={Footer} />
    </Switch>
  </BrowserRouter>;
};
