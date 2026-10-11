import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Arrow } from '../nevera/ui';

const options = [
  { letter: 'a', text: ['always', 'rarely', 'at the moment'], correct: 'at the moment' },
  { letter: 'b', text: ['yesterday', 'last month', 'tomorrow'], correct: 'last month' },
  { letter: 'c', text: ['walk', 'dive', 'painting'], correct: 'painting' },
  { letter: 'd', text: ['rice', 'pasta', 'tomato'], correct: 'tomato' },
  { letter: 'e', text: ['could', 'would', 'will'], correct: 'could' },
  { letter: 'f', text: ['potato', 'kiwi', 'strawberry'], correct: 'kiwi' },
  { letter: 'g', text: ['I', 'We', 'They'], correct: 'They' },
  { letter: 'h', text: ['drizzle', 'rain', 'wind'], correct: 'drizzle' },
  { letter: 'i', text: ['tomorrow', 'sometimes', 'next month'], correct: 'sometimes' },
  { letter: 'j', text: ['Raspberries', 'apple', 'oranges.'], correct: 'Raspberries' },
];

const Question9 = ({ onNext }) => {
  const { t } = useTranslation();
  const [selectedOptions, setSelectedOptions] = useState(Array(options.length).fill(null));
  const [hint, setHint] = useState(false);

  const handleOptionSelect = (index, word) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = word;
    setSelectedOptions(newSelectedOptions);
    setHint(false);
  };

  const handleNext = () => {
    if (selectedOptions.some(option => option === null)) {
      setHint(true);
      return;
    }
    const allCorrect = selectedOptions.every((option, index) => option === options[index].correct);
    onNext(allCorrect);
  };

  return (
    <div className="qcard" style={{ "--qm": "#e8792a" }}>
      <h2 className="qprompt" lang="pl">Zaznacz niepasujący wyraz.</h2>
      <p className="qhelp">Select the odd word out in each group.</p>

      <div className="qrows" lang="en">
        {options.map((option, index) => (
          <div key={index} className="qrow" role="radiogroup" aria-labelledby={`q9-row-${index}`}>
            <span className="qletter" id={`q9-row-${index}`}>{option.letter.toUpperCase()}.</span>
            <div className="choices">
              {option.text.map((word, wordIndex) => (
                <label key={wordIndex} className="qchoice">
                  <input
                    type="radio"
                    name={`option-${index}`}
                    value={word}
                    checked={selectedOptions[index] === word}
                    onChange={() => handleOptionSelect(index, word)}
                  />
                  <span>{word}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="qactions">
        {hint && <p className="qhint" role="alert">{t("pleaseSelectOption")}</p>}
        <button type="button" className="btn btn-ink" onClick={handleNext}>
          {t("next")} <Arrow />
        </button>
      </div>
    </div>
  );
};

export default Question9;
