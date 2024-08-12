// App.js

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./Components/question";
import qBank from "./Components/questionbank";
import Score from "./Components/score";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: qBank,
      currentQuestion: 0,
      selectedOption: "",
      score: 0,
      quizEnd: false,
    };
  }

  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.checkAnswer();
    this.handleNextQuestion();
  };

  checkAnswer = () => {
    const { questionBank, currentQuestion, selectedOption, score } = this.state;
    if (selectedOption === questionBank[currentQuestion].answer) {
      this.setState((prevState) => ({ score: prevState.score + 1 }));
    }
  };

  handleNextQuestion = () => {
    const { questionBank, currentQuestion } = this.state;
    if (currentQuestion + 1 < questionBank.length) {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
        selectedOption: "",
      }));
    } else {
      this.setState({
        quizEnd: true,
      });
    }
  };

  render() {
    const { questionBank, currentQuestion, selectedOption, score, quizEnd } =
      this.state;
    return (
      <div className="App d-flex flex-column align-items-center justify-content-center vh-100">
        <div className=" border border-primary">
          {/* <h1 className="app-title">QUIZ APP</h1> */}
          <div className="m-5">
            {!quizEnd ? (
              <Question
                question={questionBank[currentQuestion]}
                selectedOption={selectedOption}
                onOptionChange={this.handleOptionChange}
                onSubmit={this.handleFormSubmit}
              />
            ) : (
              <Score
                score={score}
                totalquestion={this.state.questionBank.length}
                className="score"
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
