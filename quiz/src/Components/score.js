// Score.js

import React, { Component } from "react";
import "../App.css";

class Score extends Component {
  render() {
    const { score, totalquestion } = this.props;

    return (
      <div>
        <h4>
          You answered {score}/{totalquestion} questions correctly
        </h4>
        <div className="text-center">
          <button
            className="btn btn-primary mt-2 w-100 rounded-0"
            onClick={() => window.location.reload(false)}
          >
            Reload!
          </button>
        </div>
      </div>
    );
  }
}

export default Score;
