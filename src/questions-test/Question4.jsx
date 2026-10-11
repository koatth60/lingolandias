import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { Arrow, NOTE_COLORS } from '../nevera/ui';

const ItemTypes = { WORD: 'word' };
const TILT = [-2, 1.5, -1, 2, -1.5, 1, -2.5, 1.5];

const DraggableWord = ({ word, isUsed, index }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.WORD,
    item: { word },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  });

  return (
    <div
      ref={drag}
      className="qtile"
      data-state={isUsed ? "matched" : undefined}
      data-dragging={isDragging}
      style={{ "--c": NOTE_COLORS[index % NOTE_COLORS.length], "--r": `${TILT[index % TILT.length]}deg` }}
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
    <span ref={drop} className="qblank" data-over={isOver} data-filled={!!currentWord}>
      {currentWord || <span aria-hidden="true">___</span>}
    </span>
  );
};

const correctOrder = ['name', 'am', 'in', 'like', 'wife', 'works', 'nurse', 'daughters'];

const Question4 = ({ onNext }) => {
  const { t } = useTranslation();
  const words = ['name', 'am', 'in', 'like', 'works', 'wife', 'nurse', 'daughters'];
  const [usedWords, setUsedWords] = useState(Array(words.length).fill(null));
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hint, setHint] = useState(false);

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
      setHint(false);
    }
  };

  const handleNext = () => {
    if (usedWords.includes(null)) {
      setHint(true);
      return;
    }
    onNext(JSON.stringify(usedWords) === JSON.stringify(correctOrder));
  };

  const gap = (i) => <DroppableSpace index={i} onDrop={handleDrop} currentWord={usedWords[i]} />;

  return (
    <DndProvider backend={isTouchDevice ? TouchBackend : HTML5Backend}>
      <div className="qcard" style={{ "--qm": "#e8792a" }}>
        <h2 className="qprompt" lang="pl">Uzupełnij luki podanymi wyrazami:</h2>

        {/* Word bank */}
        <div className="qbank" lang="en">
          {words.map((word, index) => (
            <DraggableWord key={index} index={index} word={word} isUsed={usedWords.includes(word)} />
          ))}
        </div>

        {/* Passage */}
        <p className="qpassage" lang="en">
          Hi! My {gap(0)} is Michał and I live in Newcastle. Newcastle is located in the UK. I was born in Warsaw, Poland. I {gap(1)} 36 years old. I work {gap(2)} a bank. I {gap(3)} my job a lot. I have a {gap(4)} her name is Michalina. She is also 36 years old. She {gap(5)} in a hospital as a {gap(6)}. We have two children - Iza who is 10 years old and Wiktoria who is also 10 years old. Our {gap(7)} are twins.
        </p>

        <div className="qactions">
          {hint && <p className="qhint" role="alert">{t("pleasePlaceAll")}</p>}
          <button type="button" className="btn btn-ink" onClick={handleNext}>
            {t("next")} <Arrow />
          </button>
        </div>
      </div>
    </DndProvider>
  );
};

export default Question4;
