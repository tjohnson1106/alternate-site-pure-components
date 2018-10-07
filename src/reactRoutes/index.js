import React from "react";

const routes = [
  { path: "/ Menu", action: () => <Menu /> },
  { path: "/Footer", action: () => <Footer /> },
  { path: "/Contact", action: () => <Contact /> }
];

export default routes;

/*import React from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

export default () => {
  <BrowserRouter>
    <Switch>
      <Route path="/Menu" exact component={props => <Menu {...props} />} />
      <Route path="/Contact" exact component={Contact} />
      <Route path="/Footer" exact component={Footer} />
    </Switch>
  </BrowserRouter>;
};*/
