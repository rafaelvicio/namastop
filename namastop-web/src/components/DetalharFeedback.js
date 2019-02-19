import React, { Component } from "react";

import { Link } from "react-router-dom";

import { getFeedbacksByID } from "../api/NamastopAPI";

import Moment from "react-moment";
import Gravatar from "react-gravatar";

class DetalharFeedback extends Component {
  state = {
    feedback: {}
  };

  componentDidMount() {
    getFeedbacksByID(this.props.match.params.id).then(feedback => {
      this.setState({ feedback });
    });
  }

  render() {
    const { feedback } = this.state;
    return (
      <div>
        <section className="nes-container">
          <div className="containers" id="containers">
            <p className="title">
              Date: <Moment format="DD/MM/YYYY">{feedback.createAt}</Moment>
            </p>
            <p>
              From:
              <Gravatar
                email={feedback.fromEmail}
                size={100}
                rating="pg"
                className="nes-avatar is-rounded"
              />
            </p>
            <p>
              To:
              <Gravatar
                email={feedback.toEmail}
                size={100}
                rating="pg"
                className="nes-avatar is-rounded"
              />
            </p>
            <hr />
            <p>Message: {feedback.message}</p>
          </div>
        </section>
        <Link to={`/`} className="nes-btn">
          Return
        </Link>
      </div>
    );
  }
}

export default DetalharFeedback;
