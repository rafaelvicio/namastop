import React, { Component } from "react";

import { getFeedbacks } from "../api/NamastopAPI";

import Feedback from "./Feedback";

class Home extends Component {
  state = {
    feedbacks: []
  };

  componentDidMount() {
    getFeedbacks().then(feedbacks => {
      this.setState({ feedbacks });
    });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Namastop</h1>
          <p>Reminding you to be grateful.</p>
        </header>

        <section className="nes-container">
          <div className="containers" id="containers">
            {this.state.feedbacks.map(feedback => (
              <Feedback feedback={feedback} />
            ))}
          </div>
        </section>

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
      </div>
    );
  }
}

export default Home;
