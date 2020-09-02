import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Visualize from "./Visualize";
import About from "./About";
import Breadcrumbs from "./Breadcrumbs";
import Sorting from "./Sorting";
import Bubble from "./../sort/Bubble";
import Selection from "./../sort/Selection";
import Merge from "./../sort/Merge";

export default function Bread() {
  return (
    <div>
      <BrowserRouter>
        <Breadcrumbs />
        <Switch>
          <Route exact from="/" render={(props) => <Visualize {...props} />} />
          <Route exact path="/about" render={(props) => <About {...props} />} />
          <Route
            exact
            path="/sort"
            render={(props) => <Sorting {...props} />}
          />
          <Route
            exactpath="/sorting/bubble"
            render={(props) => <Bubble {...props} />}
          />
          <Route
            exact
            path="/sorting/merge"
            render={(props) => <Merge {...props} />}
          />
          <Route
            exact
            path="/sorting/selection"
            render={(props) => <Selection {...props} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
