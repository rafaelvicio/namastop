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
        <section className="nes-container">
          <div className="containers" id="containers">
            {this.state.feedbacks.map(feedback => (
              <Feedback feedback={feedback} />
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
