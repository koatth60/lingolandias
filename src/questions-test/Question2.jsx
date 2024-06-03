import React, { useState } from "react";

const Question2 = ({ onNext }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      // Check if the selected answer is correct
      const isCorrect = selectedAnswer === "a"; // Change this to the correct answer
      onNext(isCorrect);
    } else {
      // Provide some feedback to the user that they need to select an answer
      alert("Please select an answer before moving to the next question.");
    }
  };

  return (
    <div>
      <p className="question">Wybierz poprawne tłumaczenie:</p>
      <ul className="ul">
        <li className="li">
          <input
            type="radio"
            id="option-a"
            name="answer"
            value="a"
            onChange={() => handleAnswerSelection("a")}
          />
          <label htmlFor="option-a" className="answer-text">
            I am, You are, He is, She is, It is, We are, You are, They are.
          </label>
        </li>
        <li className="li">
          <input
            type="radio"
            id="option-b"
            name="answer"
            value="b"
            onChange={() => handleAnswerSelection("b")}
          />
          <label htmlFor="option-b" className="answer-text">
            I are, You are, He is, She is, It is, We am, You am, They am.
          </label>
        </li>
        <li className="li">
          <input
            type="radio"
            id="option-c"
            name="answer"
            value="c"
            onChange={() => handleAnswerSelection("c")}
          />
          <label htmlFor="option-c" className="answer-text">
            I am, You is, He is, She are, It am, We are, You are, They are.
          </label>
        </li>
        <li className="li">
          <input
            type="radio"
            id="option-d"
            name="answer"
            value="d"
            onChange={() => handleAnswerSelection("d")}
          />
          <label htmlFor="option-d" className="answer-text">
            I is, You are, He is, She is, It is, We are, You are, They are.
          </label>
        </li>
        <li className="li">
          <input
            type="radio"
            id="option-e"
            name="answer"
            value="e"
            onChange={() => handleAnswerSelection("e")}
          />
          <label htmlFor="option-e" className="answer-text">
            I am, You am, He are, She are, It are, We is, You is, They is
          </label>
        </li>
      </ul>

      <div className="flex justify-end">
        <button onClick={handleNext} className="next-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default Question2;
