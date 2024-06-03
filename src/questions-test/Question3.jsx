import React, { useState } from 'react';

const Question3 = ({ onNext }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      // Check if the selected answer is correct
      const isCorrect = selectedAnswer === "a"; // Correct answer is "a"
      onNext(isCorrect);
    } else {
      // Provide some feedback to the user that they need to select an answer
      alert("Please select an answer before moving to the next question.");
    }
  };

  return (
    <div>
      <p className='question'>Wybierz błędne zdanie:</p>
      <ul className='ul'>
        <li className='li'>
          <input
            type="radio"
            id="option-a"
            name="answer"
            value="a"
            onChange={() => handleAnswerSelection("a")}
          />
          <label htmlFor="option-a" className='answer-text'>I live in London.</label>
        </li>
        <li className='li'>
          <input
            type="radio"
            id="option-b"
            name="answer"
            value="b"
            onChange={() => handleAnswerSelection("b")}
          />
          <label htmlFor="option-b" className='answer-text'>I am living in London at the moment. </label>
        </li>
        <li className='li'>
          <input
            type="radio"
            id="option-c"
            name="answer"
            value="c"
            onChange={() => handleAnswerSelection("c")}
          />
          <label htmlFor="option-c" className='answer-text'>I am live in London.</label>
        </li>
      </ul>
      <div className="flex">
        <button onClick={handleNext} className="next-button ">
          Next
        </button>
      </div>
    </div>
  );
};

export default Question3;
