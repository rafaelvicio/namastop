import React, { Component, Fragment } from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeComponent from "./components/Home";
import DetalharFeedback from "./components/DetalharFeedback";

class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <div className="menu-novatics">Novatics</div>
          <h1>Namastop</h1>
          <p>Reminding you to be grateful.</p>
        </header>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={HomeComponent} />
            <Route path="/feedbacks/:id" component={DetalharFeedback} />
            <Route path="*" exact={true} component={HomeComponent} />
          </Switch>
        </BrowserRouter>
        <footer className="footer">
          <p>
            <a href="https://www.novatics.com.br" target="_blank">
              Novatics
            </a>
            <span>-</span>
            <a href="https://github.com/rafaelvicio" target="_blank">
              @rafaelvicio
            </a>
          </p>
        </footer>
      </Fragment>
    );
  }
}

export default App;
