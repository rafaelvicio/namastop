import React, { Component } from "react";
import { Link } from "react-router-dom";

import { getFeedbacksByID } from "../api/NamastopAPI";

import Moment from "react-moment";

class Home extends Component {
  state = {
    feedback: {}
  };

  componentDidMount() {
    console.log("--------->", this.props.match.params.id);
    getFeedbacksByID(this.props.match.params.id).then(feedback => {
      this.setState({ feedback });
      console.log("Andamento: ", feedback);
    });
  }

  render() {
    return (
      <div>
        <h1>Detalhar Feedback: {this.state.feedback._id}</h1>
      </div>
    );
  }
}

export default Home;
