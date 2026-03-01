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

const DroppableSpace = ({ index, onDrop, currentWord, part }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.WORD,
    drop: (item) => onDrop(item.word, index, part),
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  return (
    <span
      ref={drop}
      className={`inline-block min-w-[70px] min-h-[26px] mx-1 px-2 py-0.5 rounded border-b-2 text-center align-middle transition-all
        ${isOver ? "border-purple-400 bg-purple-500/30" : "border-white/40 bg-white/10"}
        ${currentWord ? "text-white font-semibold" : "text-white/30"}`}
    >
      {currentWord || "___"}
    </span>
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
  { main: 'used', rest2: '' },
];

const sentences = [
  { prefix: 'A', sentence: 'I ', rest: ' Tom.' },
  { prefix: 'B', sentence: 'I am ', rest: ' dinner at the moment.' },
  { prefix: 'C', sentence: 'My ', rest: ' restaurant is in the ', rest2: ' centre.' },
  { prefix: 'D', sentence: 'Where ', rest: ' you been all summer?' },
  { prefix: 'E', sentence: 'She ', rest: ' tell you the plan ', rest2: '.' },
  { prefix: 'F', sentence: "It isn't easy ", rest: ' awesome.' },
  { prefix: 'G', sentence: 'I have always wanted to ', rest: ' a firefighter but I am a teacher now.' },
  { prefix: 'I', sentence: 'Micah ', rest: ' to be very good at volleyball.' },
];

const Question10 = ({ onNext }) => {
  const { t } = useTranslation();
  const words = ['used', 'have', 'being', 'will', 'making', 'favourite', 'city', 'be', 'tomorrow', 'love'];
  const [selectedWords, setSelectedWords] = useState(sentences.map(() => ({ main: '', rest2: '' })));
  const [usedWords, setUsedWords] = useState([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const onTouchStart = () => setIsTouchDevice(true);
    document.addEventListener('touchstart', onTouchStart);
    return () => document.removeEventListener('touchstart', onTouchStart);
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
      newSelectedWords[sentenceIndex][part] = word;
      setSelectedWords(newSelectedWords);
      setUsedWords(updatedUsedWords);
    }
  };

  const handleNext = () => {
    const isFilled = selectedWords.every(w => w.main !== '');
    if (!isFilled) {
      alert(t("pleaseCompleteAll"));
      return;
    }
    const allCorrect = selectedWords.every((w, index) =>
      w.main === correctAnswers[index].main &&
      (!correctAnswers[index].rest2 || w.rest2 === correctAnswers[index].rest2)
    );
    onNext(allCorrect);
  };

  return (
    <DndProvider backend={isTouchDevice ? TouchBackend : HTML5Backend}>
      <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-2xl">
        <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 absolute top-0 left-0 right-0 rounded-t-2xl"></div>

        <p className="text-white/80 text-lg font-medium mb-2 mt-2">Uzupełnij zdania podanymi wyrazami.</p>
        <p className="text-white/50 text-sm mb-6">Drag words from the bank into the correct blanks.</p>

        {/* Word bank */}
        <div className="flex flex-wrap gap-2 mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
          {words.map((word, index) => (
            <DraggableWord key={index} word={word} isUsed={usedWords.includes(word)} />
          ))}
        </div>

        {/* Sentences */}
        <div className="space-y-3 mb-6">
          {sentences.map((sentence, index) => (
            <div key={index} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/90 flex-wrap">
              <span className="text-purple-400 font-bold w-6 flex-shrink-0">{sentence.prefix}.</span>
              <span className="text-sm">{sentence.sentence}</span>
              <DroppableSpace index={index} onDrop={handleDrop} currentWord={selectedWords[index].main} part="main" />
              {sentence.rest && <span className="text-sm">{sentence.rest}</span>}
              {sentence.rest2 !== undefined && sentence.rest2 !== '' && (
                <DroppableSpace index={index} onDrop={handleDrop} currentWord={selectedWords[index].rest2} part="rest2" />
              )}
            </div>
          ))}
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

export default Question10;
