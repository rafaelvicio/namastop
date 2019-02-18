import React, { Component } from "react";
import { Link } from "react-router-dom";

import { getFeedbacks } from "../api/NamastopAPI";

import Moment from "react-moment";

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
        <h1>Lista de Feedbacks:</h1>
        <table>
          <thead>
            <tr>
              <th>Data de Envio</th>
              <th>Mesagem</th>
              <th>De</th>
            </tr>
          </thead>
          <tbody>
            {this.state.feedbacks.map(feedback => (
              <tr key={feedback._id}>
                <td>
                  <Moment format="DD/MM/YYYY HH:mm">{feedback.createAt}</Moment>
                </td>
                <td>{feedback.message}</td>
                <td>{feedback.from}</td>
                <td>
                  {" "}
                  <Link to={`/feedbacks/${feedback._id}`}>Detalhar</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
