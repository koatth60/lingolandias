import React, { useState } from 'react';

const Question8 = ({ onNext }) => {
  const pronouns = ["I", "You", "He", "She", "It", "We", "You", "They"];
  const correctAnswers = ["was", "were", "was", "was", "was", "were", "were", "were"];

  const [inputs, setInputs] = useState(Array(pronouns.length).fill(''));

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleNext = () => {
    const allMatchesCorrect = inputs.every((input, index) => 
      input.trim().toLowerCase() === correctAnswers[index]
    );

    if (allMatchesCorrect) {
      onNext(true);
    } else {
      
      onNext(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="question">Uzupełnij odpowiednia forma czasownika „to be” w czasie przeszłym.</h2>
      <div className="ul">
        {pronouns.map((pronoun, index) => (
          <div key={index} className="flex justify-center items-center space-x-2">
            <span className="liQ5 answer-text">{pronoun}</span>
            <input
              type="text"
              className="liQ5 answer-text"
              value={inputs[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>
      <div className="flex mt-8">
        <button onClick={handleNext} className="next-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default Question8;
