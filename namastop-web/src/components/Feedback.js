import React, { Component, Fragment } from "react";

import { Link } from "react-router-dom";

import Moment from "react-moment";
import Gravatar from "react-gravatar";

class Home extends Component {
  render() {
    const { feedback } = this.props;
    return (
      <Fragment>
        <div className="nes-container with-title left cardNamastop">
          <p className="title">
            <Moment format="DD/MM/YYYY">{feedback.createAt}</Moment>
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
          <p>{feedback.message.substring(0, 100)}</p>
          <p align="right">
            To:
            <Gravatar
              email={feedback.toEmail}
              size={100}
              rating="pg"
              className="nes-avatar is-rounded"
            />
          </p>
          <Link
            to={`/feedbacks/${feedback._id}`}
            className="nes-btn show-code copy link-more"
          >
            More
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default Home;
