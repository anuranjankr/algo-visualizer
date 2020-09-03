import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Visualize from "./Visualize";
import About from "./../about/About";
import Sorting from "./Sorting";
import Bubble from "./../sort/Bubble";
import Selection from "./../sort/Selection";
import Merge from "./../sort/Merge";
import Ai from "./Ai";
import Minmax from "./../ai/Minmax";
import Csp from "./../ai/Csp";
import Ml from "./Ml";
import Lr from "./../ml/Lr";
import Breadcrumbs from "./Breadcrumbs";
import "./Layout.css";

export default function Bread() {
  return (
    <div>
      <BrowserRouter>
        <div className="app__breadNav">
          <Breadcrumbs />
        </div>
        <Switch>
          <Route exact from="/" render={(props) => <Visualize {...props} />} />
          <Route exact path="/about" render={(props) => <About {...props} />} />

          <Route
            exact
            path="/sorting"
            render={(props) => <Sorting {...props} />}
          />
          <Route exact path="/ai" render={(props) => <Ai {...props} />} />
          <Route exact path="/ml" render={(props) => <Ml {...props} />} />

          <Route
            exact
            path="/sorting/bubble"
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

          <Route
            exact
            path="/ai/minmax"
            render={(props) => <Minmax {...props} />}
          />
          <Route exact path="/ai/csp" render={(props) => <Csp {...props} />} />

          <Route exact path="/ml/lr" render={(props) => <Lr {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
