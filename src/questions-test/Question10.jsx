import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { Arrow, NOTE_COLORS } from '../nevera/ui';

const ItemTypes = { WORD: 'word' };
const TILT = [-2, 1.5, -1, 2, -1.5, 1, -2.5, 1.5, -1, 2];

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

const DroppableSpace = ({ index, onDrop, currentWord, part }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.WORD,
    drop: (item) => onDrop(item.word, index, part),
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  return (
    <span ref={drop} className="qblank" data-over={isOver} data-filled={!!currentWord}>
      {currentWord || <span aria-hidden="true">___</span>}
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
  const [hint, setHint] = useState(false);

  useEffect(() => {
    const onTouchStart = () => setIsTouchDevice(true);
    document.addEventListener('touchstart', onTouchStart);
    return () => document.removeEventListener('touchstart', onTouchStart);
  }, []);

  const handleDrop = (word, sentenceIndex, part) => {
    const newSelectedWords = [...selectedWords];
    const updatedUsedWords = [...usedWords];
    setHint(false);

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
      setHint(true);
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
      <div className="qcard" style={{ "--qm": "#127a6e" }}>
        <h2 className="qprompt" lang="pl">Uzupełnij zdania podanymi wyrazami.</h2>
        <p className="qhelp">Drag words from the bank into the correct blanks.</p>

        {/* Word bank */}
        <div className="qbank" lang="en">
          {words.map((word, index) => (
            <DraggableWord key={index} index={index} word={word} isUsed={usedWords.includes(word)} />
          ))}
        </div>

        {/* Sentences */}
        <ol className="qlines" lang="en">
          {sentences.map((sentence, index) => (
            <li key={index} className="qline">
              <span className="qletter">{sentence.prefix}.</span>
              <span>{sentence.sentence}</span>
              <DroppableSpace index={index} onDrop={handleDrop} currentWord={selectedWords[index].main} part="main" />
              {sentence.rest && <span>{sentence.rest}</span>}
              {sentence.rest2 !== undefined && sentence.rest2 !== '' && (
                <>
                  <DroppableSpace index={index} onDrop={handleDrop} currentWord={selectedWords[index].rest2} part="rest2" />
                  <span>{sentence.rest2}</span>
                </>
              )}
            </li>
          ))}
        </ol>

        <div className="qactions">
          {hint && <p className="qhint" role="alert">{t("pleaseCompleteAll")}</p>}
          <button type="button" className="btn btn-ink" onClick={handleNext}>
            {t("next")} <Arrow />
          </button>
        </div>
      </div>
    </DndProvider>
  );
};

export default Question10;
