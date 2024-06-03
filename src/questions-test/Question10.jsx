import React, { useState } from 'react';

const Question10 = ({ onNext }) => {
  const words = ['used', 'have', 'being', 'will', 'making', 'favourite', 'city', 'be', 'tomorrow', 'love'];
  const sentences = [
    { prefix: 'a', sentence: 'I ', rest: ' Tom.' },
    { prefix: 'b', sentence: 'I am ', rest: ' dinner at the moment.' },
    { prefix: 'c', sentence: 'My ', rest: ' restaurant is in the ', rest2: ' centre.' },
    { prefix: 'd', sentence: 'Where ', rest: ' you been all summer?' },
    { prefix: 'e', sentence: 'She ', rest: ' tell you the plan ', rest2: '.' },
    { prefix: 'f', sentence: 'It isn’t easy ', rest: ' awesome.' },
    { prefix: 'g', sentence: 'I have always wanted to ', rest: ' a firefighter but I am a teacher now.' },
    { prefix: 'i', sentence: 'Micah ', rest: ' to be very good at volleyball.' },
  ];

  const correctAnswers = [
    { main: 'love', rest2: '' },
    { main: 'making', rest2: '' },
    { main: 'favourite', rest2: 'city' },
    { main: 'have', rest2: '' },
    { main: 'will', rest2: 'tomorrow' },
    { main: 'being', rest2: '' },
    { main: 'be', rest2: '' },
    { main: 'used', rest2: '' }
  ];

  const [selectedWords, setSelectedWords] = useState(sentences.map(() => ({ main: '', rest2: '' })));
  const [usedWords, setUsedWords] = useState([]);

  const handleDragStart = (event, word) => {
    event.dataTransfer.setData('word', word);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, sentenceIndex, part) => {
    event.preventDefault();
    const word = event.dataTransfer.getData('word');
    const newSelectedWords = [...selectedWords];
    const updatedUsedWords = [...usedWords];
  
    // Check if the word is already used
    if (!usedWords.includes(word)) {
      // If the word is not already used, update the selected words and used words
      newSelectedWords[sentenceIndex][part] = word;
      setUsedWords([...usedWords, word]);
      setSelectedWords(newSelectedWords);
    } else {
      const index = usedWords.indexOf(word);
      updatedUsedWords.splice(index, 1); // Remove the word from usedWords
  
      // If a word is already dropped in the slot, return it to the words array
      if (newSelectedWords[sentenceIndex][part] !== '') {
        words.push(newSelectedWords[sentenceIndex][part]); // Make the previous word available again
      }
  
      // Add the new word and update the selected words
      newSelectedWords[sentenceIndex][part] = word;
      setSelectedWords(newSelectedWords);
      setUsedWords(updatedUsedWords);
    }
  };
  
  
  
  
  

  const handleNext = () => {
    const isFilled = selectedWords.every(
      words => words.main !== '' && (words.rest2 === '' || words.rest2 !== '')
    );

    if (isFilled) {
      const allCorrect = selectedWords.every((words, index) => 
        words.main === correctAnswers[index].main && (words.rest2 === '' || words.rest2 === correctAnswers[index].rest2)
      );

      if (allCorrect) {
        onNext(true);
      } else {
        onNext(false);
      }
    } else {
      alert('Please complete all sentences before moving to the next question.');
    }
  };

  return (
    <div className="p-4">
      <h2 className="question">Uzupełnij zdania podanymi wyrazami.</h2>
      <div className="flex items-center space-x-4 mb-4">
        {words.map((word, index) => (
          <div
            key={index}
            className={`word bg-gray-200 p-2 ${usedWords.includes(word) ? 'opacity-50 cursor-not-allowed' : ''}`}
            draggable={!usedWords.includes(word)}
            onDragStart={(event) => handleDragStart(event, word)}
          >
            {word}
          </div>
        ))}
      </div>
      <div className="ul">
        {sentences.map((sentence, index) => (
          <div key={index} className="flex items-center space-x-2 mb-4">
            <span className="mr-2 w-4 text-blue-500">{sentence.prefix.toUpperCase()}.</span>
            <div className="sentence bg-gray-200 p-2 flex space-x-2">
              {sentence.sentence}
              <div
                className="input-container"
                onDragOver={handleDragOver}
                onDrop={(event) => handleDrop(event, index, 'main')}
              >
                <input
                  type="text"
                  className="inline-input bg-white w-20 h-8 px-1 border border-solid border-blue-500 ml-3"
                  value={selectedWords[index].main}
                  readOnly
                />
              </div>
              {sentence.rest && <span>{sentence.rest}</span>}
              {sentence.rest2 && (
                <div
                  className="input-container"
                  onDragOver={handleDragOver}
                  onDrop={(event) => handleDrop(event, index, 'rest2')}
                >
                  <input
                    type="text"
                    className="inline-input bg-white w-20 h-8 px-1 border border-solid border-blue-500 ml-3"
                    value={selectedWords[index].rest2}
                    readOnly
                  />
                </div>
              )}
            </div>
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

export default Question10;
