import { useState } from "react";

const Question7 = ({ onNext }) => {
  const correctAnswers = ["a", "a", "a", "a", "a"];
  const [selectedAnswers, setSelectedAnswers] = useState(Array(correctAnswers.length).fill(null));

  const handleAnswerSelection = (questionIndex, answer) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = answer;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNext = () => {
    // Check if all questions have been answered
    if (selectedAnswers.includes(null)) {
      alert('Please select an answer for each question before proceeding.');
      return;
    }

    const allMatchesCorrect = selectedAnswers.every(
      (answer, index) => answer === correctAnswers[index]
    );

    onNext(allMatchesCorrect);
  };

  return (
    <div>
      <div className='mb-20'>
        <p className="question">1. How often does she ride her bike?</p>
        <ul className="ul">
          <li className="li">
            <input
              type="radio"
              id="option-1-a"
              name="answer1"
              value="a"
              onChange={() => handleAnswerSelection(0, "a")}
            />
            <label htmlFor="option-1-a" className="answer-text">
              a. She never rides her bike
            </label>
          </li>
          <li className="li">
            <input
              type="radio"
              id="option-1-b"
              name="answer1"
              value="b"
              onChange={() => handleAnswerSelection(0, "b")}
            />
            <label htmlFor="option-1-b" className="answer-text">
              b. She never ride her bike.
            </label>
          </li>
          <li className="li">
            <input
              type="radio"
              id="option-1-c"
              name="answer1"
              value="c"
              onChange={() => handleAnswerSelection(0, "c")}
            />
            <label htmlFor="option-1-c" className="answer-text">
              c. She never riding her bike
            </label>
          </li>
        </ul>
      </div>

      <div className='mb-20'>
        <p className="question">2. Have you got any cereal? I’m hungry.</p>
        <ul className="ul">
          <li className="li">
            <input
              type="radio"
              id="option-2-a"
              name="answer2"
              value="a"
              onChange={() => handleAnswerSelection(1, "a")}
            />
            <label htmlFor="option-2-a" className="answer-text">
              a. No, I don’t have any cereal but I have got eggs.
            </label>
          </li>
          <li className="li">
            <input
              type="radio"
              id="option-2-b"
              name="answer2"
              value="b"
              onChange={() => handleAnswerSelection(1, "b")}
            />
            <label htmlFor="option-2-b" className="answer-text">
              b. No, I doesn’t have any cereal but I have got eggs.
            </label>
          </li>
          <li className="li">
            <input
              type="radio"
              id="option-2-c"
              name="answer2"
              value="c"
              onChange={() => handleAnswerSelection(1, "c")}
            />
            <label htmlFor="option-2-c" className="answer-text">
              c. Yes, I’ ve got cheese, it is in the fridge.
            </label>
          </li>
        </ul>
      </div>

      <div className='mb-20'>
        <p className="question">3. Do you like lemon?</p>
        <ul className="ul">
          <li className="li">
            <input
              type="radio"
              id="option-3-a"
              name="answer3"
              value="a"
              onChange={() => handleAnswerSelection(2, "a")}
            />
            <label htmlFor="option-3-a" className="answer-text">
              a. No, it is too sour.
            </label>
          </li>
          <li className="li">
            <input
              type="radio"
              id="option-3-b"
              name="answer3"
              value="b"
              onChange={() => handleAnswerSelection(2, "b")}
            />
            <label htmlFor="option-3-b" className="answer-text">
              b. No, it is most sour.
            </label>
          </li>
          <li className="li">
            <input
              type="radio"
              id="option-3-c"
              name="answer3"
              value="c"
              onChange={() => handleAnswerSelection(2, "c")}
            />
            <label htmlFor="option-3-c" className="answer-text">
              c. No, it isn’t sour.
            </label>
          </li>
        </ul>
      </div>

      <div className='mb-20'>
        <p className="question">4. What are you doing?</p>
        <ul className="ul">
          <li className="li">
            <input
              type="radio"
              id="option-4-a"
              name="answer4"
              value="a"
              onChange={() => handleAnswerSelection(3, "a")}
            />
            <label htmlFor="option-4-a" className="answer-text">
              a. I’m cooking dinner.
            </label>
          </li>
          <li className="li">
            <input
              type="radio"
              id="option-4-b"
              name="answer4"
              value="b"
              onChange={() => handleAnswerSelection(3, "b")}
            />
            <label htmlFor="option-4-b" className="answer-text">
              b. I cooking dinner.
            </label>
          </li>
          <li className="li">
            <input
              type="radio"
              id="option-4-c"
              name="answer4"
              value="c"
              onChange={() => handleAnswerSelection(3, "c")}
            />
            <label htmlFor="option-4-c" className="answer-text">
              c. I cooked dinner.
            </label>
          </li>
        </ul>
      </div>

      <div className='mb-10'>
        <p className="question">5. Why do you like swimming?</p>
        <ul className="ul">
          <li className="li">
            <input
              type="radio"
              id="option-5-a"
              name="answer5"
              value="a"
              onChange={() => handleAnswerSelection(4, "a")}
            />
            <label htmlFor="option-5-a" className="answer-text">
              a. I like swimming because it’s good for my body.
            </label>
          </li>
          <li className="li">
            <input
              type="radio"
              id="option-5-b"
              name="answer5"
              value="b"
              onChange={() => handleAnswerSelection(4, "b")}
            />
            <label htmlFor="option-5-b" className="answer-text">
              b. I’m liking swimming because it’s good for my body.
            </label>
          </li>
          <li className="li">
            <input
              type="radio"
              id="option-5-c"
              name="answer5"
              value="c"
              onChange={() => handleAnswerSelection(4, "c")}
            />
            <label htmlFor="option-5-c" className="answer-text">
              c. I like swimming because it’s good to my body.
            </label>
          </li>
        </ul>
      </div>

      <div className="flex">
        <button onClick={handleNext} className="next-button ">
          Next
        </button>
      </div>
    </div>
  );
};

export default Question7;
