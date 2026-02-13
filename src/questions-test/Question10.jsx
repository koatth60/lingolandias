import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

const ItemTypes = {
  WORD: 'word',
};

const DraggableWord = ({ word, isUsed }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.WORD,
    item: { word },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: '8px',
        margin: '4px',
        backgroundColor: isUsed ? 'lightgrey' : 'lightblue',
        cursor: isUsed ? 'not-allowed' : 'move',
      }}
    >
      {word}
    </div>
  );
};

const DroppableSpace = ({ index, onDrop, currentWord, part }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.WORD,
    drop: (item) => onDrop(item.word, index, part),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        display: 'inline-block',
        height: '25px',
        minWidth: '80px',
        padding: '4px',
        margin: '2px',
        backgroundColor: isOver ? 'lightblue' : 'white',
        border: '1px solid black',
      }}
    >
      {currentWord}
    </div>
  );
};

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

  const [selectedWords, setSelectedWords] = useState(sentences.map(() => ({ main: '', rest2: '' })));
  const [usedWords, setUsedWords] = useState([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const onTouchStart = () => {
      setIsTouchDevice(true);
    };
    document.addEventListener('touchstart', onTouchStart);
    return () => {
      document.removeEventListener('touchstart', onTouchStart);
    };
  }, []);

  const handleDrop = (word, sentenceIndex, part) => {
    const newSelectedWords = [...selectedWords];
    const updatedUsedWords = [...usedWords];

    if (!usedWords.includes(word)) {
      newSelectedWords[sentenceIndex][part] = word;
      setUsedWords([...usedWords, word]);
      setSelectedWords(newSelectedWords);
    } else {
      const index = usedWords.indexOf(word);
      updatedUsedWords.splice(index, 1);

      if (newSelectedWords[sentenceIndex][part] !== '') {
        words.push(newSelectedWords[sentenceIndex][part]);
      }

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
    <DndProvider backend={isTouchDevice ? TouchBackend : HTML5Backend}>
      <div className="md:p-4">
        <h2 className="question">Uzupełnij zdania podanymi wyrazami.</h2>
        <div className="flex justify-center items-center flex-wrap gap-y-1 space-x-4 mb-4">
          {words.map((word, index) => (
            <DraggableWord key={index} word={word} isUsed={usedWords.includes(word)} />
          ))}
        </div>
        <div className="ul">
          {sentences.map((sentence, index) => (
            <div key={index} className="flex items-center space-x-2 mb-4">
              <span className="mr-2 w-4 text-blue-500">{sentence.prefix.toUpperCase()}.</span>
              <div className="sentence bg-gray-200 p-2 flex space-x-2">
                {sentence.sentence}
                <DroppableSpace index={index} onDrop={handleDrop} currentWord={selectedWords[index].main} part="main" />
                {sentence.rest && <span>{sentence.rest}</span>}
                {sentence.rest2 && (
                  <DroppableSpace index={index} onDrop={handleDrop} currentWord={selectedWords[index].rest2} part="rest2" />
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
    </DndProvider>
  );
};

export default Question10;
