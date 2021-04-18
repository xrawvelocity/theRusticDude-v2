import React, { Component, Fragment } from "react";
import Navigation from './pages/Navigation'
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Footer from "./pages/Footer";
import { Route, Switch } from "react-router";

export default class App extends Component {


  render() {
    return (
      <Fragment>
        <Navigation />
        <Switch>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}
