import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

const ItemTypes = { WORD: 'word' };

const DraggableWord = ({ word, isUsed }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.WORD,
    item: { word },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  });

  return (
    <div
      ref={drag}
      className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all
        ${isUsed ? "opacity-40 cursor-not-allowed border-white/10 bg-white/5 text-white/40" : "cursor-move border-purple-400/40 bg-purple-500/20 text-white hover:bg-purple-500/30 hover:scale-105"}
        ${isDragging ? "opacity-50 scale-95" : ""}`}
    >
      {word}
    </div>
  );
};

const DroppableSpace = ({ index, onDrop, currentWord }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.WORD,
    drop: (item) => onDrop(item.word, index),
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  return (
    <span
      ref={drop}
      className={`inline-block min-w-[80px] min-h-[28px] mx-1 px-2 py-0.5 rounded border-b-2 text-center align-middle transition-all
        ${isOver ? "border-purple-400 bg-purple-500/30" : "border-white/40 bg-white/10"}
        ${currentWord ? "text-white font-semibold" : "text-white/30"}`}
    >
      {currentWord || "___"}
    </span>
  );
};

const correctOrder = ['name', 'am', 'in', 'like', 'wife', 'works', 'nurse', 'daughters'];

const Question4 = ({ onNext }) => {
  const { t } = useTranslation();
  const words = ['name', 'am', 'in', 'like', 'works', 'wife', 'nurse', 'daughters'];
  const [usedWords, setUsedWords] = useState(Array(words.length).fill(null));
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const onTouchStart = () => setIsTouchDevice(true);
    document.addEventListener('touchstart', onTouchStart);
    return () => document.removeEventListener('touchstart', onTouchStart);
  }, []);

  const handleDrop = (word, index) => {
    const newUsedWords = [...usedWords];
    if (!newUsedWords.includes(word)) {
      newUsedWords[index] = word;
      setUsedWords(newUsedWords);
    }
  };

  const handleNext = () => {
    if (usedWords.includes(null)) {
      alert(t("pleasePlaceAll"));
      return;
    }
    onNext(JSON.stringify(usedWords) === JSON.stringify(correctOrder));
  };

  return (
    <DndProvider backend={isTouchDevice ? TouchBackend : HTML5Backend}>
      <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-2xl">
        <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 absolute top-0 left-0 right-0 rounded-t-2xl"></div>

        <p className="text-white/80 text-lg font-medium mb-6 mt-2">Uzupełnij luki podanymi wyrazami:</p>

        {/* Word bank */}
        <div className="flex flex-wrap gap-2 mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
          {words.map((word, index) => (
            <DraggableWord key={index} word={word} isUsed={usedWords.includes(word)} />
          ))}
        </div>

        {/* Passage */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-6 text-white/90 leading-relaxed text-base">
          Hi! My <DroppableSpace index={0} onDrop={handleDrop} currentWord={usedWords[0]} /> is Michał and I live in Newcastle. Newcastle is located in the UK. I was born in Warsaw, Poland. I <DroppableSpace index={1} onDrop={handleDrop} currentWord={usedWords[1]} /> 36 years old. I work <DroppableSpace index={2} onDrop={handleDrop} currentWord={usedWords[2]} /> a bank. I <DroppableSpace index={3} onDrop={handleDrop} currentWord={usedWords[3]} /> my job a lot. I have a <DroppableSpace index={4} onDrop={handleDrop} currentWord={usedWords[4]} /> her name is Michalina. She is also 36 years old. She <DroppableSpace index={5} onDrop={handleDrop} currentWord={usedWords[5]} /> in a hospital as a <DroppableSpace index={6} onDrop={handleDrop} currentWord={usedWords[6]} />. We have two children - Iza who is 10 years old and Wiktoria who is also 10 years old. Our <DroppableSpace index={7} onDrop={handleDrop} currentWord={usedWords[7]} /> are twins.
        </div>

        <div className="flex justify-end">
          <button onClick={handleNext} className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl text-white font-semibold hover:scale-105 transition-transform shadow-xl inline-flex items-center gap-3">
            <span>{t("next")}</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </DndProvider>
  );
};

export default Question4;
