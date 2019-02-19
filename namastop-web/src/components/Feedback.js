import React, { Component, Fragment } from "react";

import Moment from "react-moment";
import Gravatar from "react-gravatar";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <dialog className="nes-dialog" id="dialog-default">
          <form method="dialog">
            <p className="title">Dialog</p>
            <p>Alert: this is a dialog.</p>
          </form>
        </dialog>

        <div className="nes-container with-title left cardNamastop">
          <p className="title">
            <Moment format="DD/MM/YYYY">{this.props.feedback.createAt}</Moment>
          </p>
          <p>
            De:
            <Gravatar
              email={this.props.feedback.fromEmail}
              size={100}
              rating="pg"
              className="nes-avatar is-rounded"
            />
          </p>
          <p>{this.props.feedback.message.substring(0, 100)}</p>
          <p align="right">
            Para:
            <Gravatar
              email={this.props.feedback.toEmail}
              size={100}
              rating="pg"
              className="nes-avatar is-rounded"
            />
          </p>
          <button
            type="button"
            onClick="document.getElementById('dialog-default').showModal();"
            className="nes-btn show-code copy"
          >
            More
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Home;
