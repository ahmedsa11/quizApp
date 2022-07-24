import React, { useState } from "react";
import "./App.css";
function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const questions = [
    {
      text: "What is JavaScript?",
      options: [
        { id: 0, text: "JavaScript is a scripting language used to make the website interactive", isCorrect: true },
        { id: 1, text: "JavaScript is an assembly language used to make the website interactive", isCorrect: false },
        { id: 2, text: "JavaScript is a compiled language used to make the website interactive", isCorrect: false },
        { id: 3, text: "None of the mentioned", isCorrect: false },
      ],
    },
    {
      text: " Which of the following is correct about JavaScript",
      options: [
        { id: 0, text: "JavaScript is an Object-Based language", isCorrect: true },
        { id: 1, text: "JavaScript is Assembly-language", isCorrect: false },
        { id: 2, text: "JavaScript is an Object-Oriented language", isCorrect: false },
        { id: 3, text: "JavaScript is a High-level language", isCorrect: false },
      ],
    },
    {
      text: "Among the given statements, which statement defines closures in JavaScript?",
      options: [
        { id: 0, text: " JavaScript is a function that is enclosed with references to its inner function scope", isCorrect: false },
        { id: 1, text: "JavaScript is a function that is enclosed with references to its lexical environment", isCorrect: true },
        { id: 2, text: "JavaScript is a function that is enclosed with the object to its inner function scope", isCorrect: false },
        { id: 3, text: "None of the mentioned", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is not javascript data types?",
      options: [
        { id: 0, text: "Null type", isCorrect: false },
        { id: 1, text: "Undefined type", isCorrect: false },
        { id: 2, text: "Number type", isCorrect: false },
        { id: 3, text: "All of the mentioned", isCorrect: true },
      ],
    },
  ];
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  return (
    <div className="App">
      <h1>Javascript questions</h1>
      <h2>Score: {score}</h2>
      {showResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          {score === questions.length ? (
          <h2>جامد يجدعاان</h2>)  : (<h2>ذاكرو بقى شويه </h2>)
          }
          <button onClick={() => restartGame()}> حاول تاني </button>
        </div>
      ) : (
        <div className="question-card">
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
export default App;
