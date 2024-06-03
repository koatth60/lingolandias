import React, { useState } from 'react';

const Question9 = ({ onNext }) => {
  const options = [
    { letter: 'a', text: ['always', 'rarely', 'at the moment'], correct: 'at the moment' },
    { letter: 'b', text: ['yesterday', 'last month', 'tomorrow'], correct: 'last month' },
    { letter: 'c', text: ['walk', 'dive', 'painting'], correct: 'painting' },
    { letter: 'd', text: ['rice', 'pasta', 'tomato'], correct: 'tomato' },
    { letter: 'e', text: ['could', 'would', 'will'], correct: 'could' },
    // potato,
    { letter: 'f', text: ['potato', 'kiwi', 'strawberry'], correct: 'kiwi' },
    { letter: 'g', text: ['I', 'We', 'They'], correct: 'They' },
    { letter: 'h', text: ['drizzle', 'rain', 'wind'], correct: 'drizzle' },
    { letter: 'i', text: ['tomorrow', 'sometimes', 'next month'], correct: 'sometimes' },
    { letter: 'j', text: ['Raspberries', 'apple', 'oranges.'], correct: 'Raspberries' },
  ];

  const [selectedOptions, setSelectedOptions] = useState(Array(options.length).fill(null));

  const handleOptionSelect = (index, word) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = word;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNext = () => {
    const allMatchesCorrect = selectedOptions.every((option, index) => option === options[index].correct);

    if (allMatchesCorrect) {
      onNext(true);
    } else {
      
      onNext(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="question">Zaznacz niepasujący wyraz.</h2>
      <div className="ul">
        {options.map((option, index) => (
          <div key={index} className="flex justify-center items-center ">
            <span className="mr-2 w-4 text-blue-500">{option.letter.toUpperCase()}.</span>
            {option.text.map((word, wordIndex) => (
              <div key={wordIndex} style={{ cursor: 'pointer' }}>
                <input
                  type="radio"
                  id={`option-${index}-${wordIndex}`}
                  name={`option-${index}`}
                  value={word}
                  checked={selectedOptions[index] === word}
                  onChange={() => handleOptionSelect(index, word)}
                  style={{ display: 'none' }}
                />
                <label
                  htmlFor={`option-${index}-${wordIndex}`}
                  className={`bg-white w-[150px] my-1 border-2 border-solid min-h-[40px] text-center border-blue-500 px-[5px] answer-text cursor-pointer ${
                    selectedOptions[index] === word ? 'bg-yellow-200' : ''
                  }`}
                >
                  {word}
                </label>
              </div>
            ))}
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

export default Question9;
