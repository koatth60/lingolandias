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

const DroppableSpace = ({ index, onDrop, currentWord }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.WORD,
    drop: (item) => onDrop(item.word, index),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        display: 'inline-block',
        minHeight: '25px',
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

const correctOrder = ['name', 'am', 'in', 'like', 'wife', 'works', 'nurse', 'daughters'];

const Question4 = ({ onNext }) => {
  const words = ['name', 'am', 'in', 'like', 'works', 'wife', 'nurse', 'daughters'];
  const [usedWords, setUsedWords] = useState(Array(words.length).fill(null));

  const handleDrop = (word, index) => {
    const newUsedWords = [...usedWords];
    if (!newUsedWords.includes(word)) {
      newUsedWords[index] = word;
      setUsedWords(newUsedWords);
    }
  };

  const handleNext = () => {
    if (usedWords.includes(null)) {
      alert('Please place all the words before proceeding.');
      return;
    }

    const isCorrect = JSON.stringify(usedWords) === JSON.stringify(correctOrder);
    onNext(isCorrect); 
  };

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

  return (
    <DndProvider backend={isTouchDevice ? TouchBackend : HTML5Backend}>
      <div>
        <p className="question">Uzupełnij luki podanymi wyrazami:</p>
        <div className="flex flex-wrap mb-4">
          {words.map((word, index) => (
            <DraggableWord key={index} word={word} isUsed={usedWords.includes(word)} />
          ))}
        </div>
        <p className='bg-[#EEEEEE] p-4 my-6 border-2 border-solid border-blue-500 lg:w-[975px]'>
          Hi! My <DroppableSpace index={0} onDrop={handleDrop} currentWord={usedWords[0]} /> is Michał and I live in Newcastle. Newcastle is located in the UK. I was born in Warsaw, Poland. I <DroppableSpace index={1} onDrop={handleDrop} currentWord={usedWords[1]} /> 36 years old. I work <DroppableSpace index={2} onDrop={handleDrop} currentWord={usedWords[2]} /> a bank. I <DroppableSpace index={3} onDrop={handleDrop} currentWord={usedWords[3]} /> my job a lot. I have a <DroppableSpace index={4} onDrop={handleDrop} currentWord={usedWords[4]} /> her name is Michalina. She is also 36 years old. She <DroppableSpace index={5} onDrop={handleDrop} currentWord={usedWords[5]} /> in a hospital as a <DroppableSpace index={6} onDrop={handleDrop} currentWord={usedWords[6]} />. We have two children - Iza who is 10 years old and Wiktoria who is also 10 years old. Our <DroppableSpace index={7} onDrop={handleDrop} currentWord={usedWords[7]} /> are twins.
        </p>
        <div className="flex justify-center">
          <button onClick={handleNext} className="next-button">
            Next
          </button>
        </div>
      </div>
    </DndProvider>
  );
};

export default Question4;
