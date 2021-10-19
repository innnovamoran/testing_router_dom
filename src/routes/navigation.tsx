import React, { Fragment, FC } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashBoard from "../pages/dashboard";
import PageOne from "../pages/stackone/pageOne";
import PageThree from "../pages/stackone/PageThree";
import PageTwo from "../pages/stackone/pageTwo";

const Navigation: FC = (): JSX.Element => {
  return (
    <Router>
      <Fragment>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/one">pageOne</Link>
            </li>
            <li>
              <Link to="/two">pageTwo</Link>
            </li>
            <li>
              <Link to="/three">pageThree</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/one">
            <PageOne />
          </Route>
          <Route path="/two">
            <PageTwo />
          </Route>
          <Route path="/three">
            <PageThree />
          </Route>
          <Route path="/">
            <DashBoard />
          </Route>
        </Switch>
      </Fragment>
    </Router>
  );
};

export default Navigation;
