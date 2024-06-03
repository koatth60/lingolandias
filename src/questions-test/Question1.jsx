import { useState } from 'react';

const Question1 = ({ onNext }) => {
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
      <p className='question'>Wybierz pasujące tłumaczenie:</p>

      <div className='text-center bg-blue-gray-100 py-4 mt-2'>
        <p className='text-lg'> What, Where, Why, Which, How, When</p>
      </div>
      <ul className='ul'>
        <li className='li'>
          <input
            type="radio"
            id="option-a"
            name="answer"
            value="a"
            onChange={() => handleAnswerSelection("a")}
          />
          <label htmlFor="option-a" className='answer-text'>a. co, gdzie, dlaczego, który, jak, kiedy</label>
        </li>
        <li className='li'>
          <input
            type="radio"
            id="option-b"
            name="answer"
            value="b"
            onChange={() => handleAnswerSelection("b")}
          />
          <label htmlFor="option-b" className='answer-text'>b. kiedy, jak, dlaczego, co, który, gdzie</label>
        </li>
        <li className='li'>
          <input
            type="radio"
            id="option-c"
            name="answer"
            value="c"
            onChange={() => handleAnswerSelection("c")}
          />
          <label htmlFor="option-c" className='answer-text'>c. dlaczego, co, który, gdzie, jak, kiedy</label>
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

export default Question1;
