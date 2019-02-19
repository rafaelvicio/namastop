import React, { Component, Fragment } from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeComponent from "./components/Home";
import Feedback from "./components/Feedback";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={HomeComponent} />
            <Route path="/feedbacks/:id" component={Feedback} />
            <Route path="*" exact={true} component={HomeComponent} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
