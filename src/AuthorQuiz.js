import React, { Component } from "react";
import { Link } from "react-router-dom";
import Test from "./Test";
import "./App.css";
import "./bootstrap.min.css";

class AuthorQuiz extends Component {
  render() {
    return (
      <React.Fragment>
        <Test a={4} b={3} />
        <div> Test</div>
        <p>
          <Link to="/add"> add link</Link>{" "}
        </p>
      </React.Fragment>
    );
  }
}

export default AuthorQuiz;
