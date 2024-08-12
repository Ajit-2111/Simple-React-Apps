// Question.js

import React, { Component } from "react";
import Options from "./option";

class Question extends Component {
  render() {
    const { question, selectedOption, onOptionChange, onSubmit } = this.props;

    return (
      <div className="">
        <h5 className="mt-2">
          {question.id}.&nbsp; {question.question}
        </h5>
        <form onSubmit={onSubmit} className="mt-2 ">
          <Options
            options={question.options}
            selectedOption={selectedOption}
            onOptionChange={onOptionChange}
          />
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary mt-2 w-100 rounded-0"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Question;
