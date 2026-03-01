import { useState } from 'react';
import { useTranslation } from 'react-i18next';

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

  const handleOptionSelect = (index, word) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = word;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNext = () => {
    if (selectedOptions.some(option => option === null)) {
      alert(t("pleaseSelectOption"));
      return;
    }
    const allCorrect = selectedOptions.every((option, index) => option === options[index].correct);
    onNext(allCorrect);
  };

  return (
    <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-2xl">
      <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 absolute top-0 left-0 right-0 rounded-t-2xl"></div>

      <p className="text-white/80 text-lg font-medium mb-2 mt-2">Zaznacz niepasujący wyraz.</p>
      <p className="text-white/50 text-sm mb-6">Select the odd word out in each group.</p>

      <div className="space-y-3">
        {options.map((option, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-purple-400 font-bold w-6 text-center flex-shrink-0">{option.letter.toUpperCase()}.</span>
            <div className="flex gap-2 flex-wrap">
              {option.text.map((word, wordIndex) => (
                <label key={wordIndex}>
                  <input
                    type="radio"
                    name={`option-${index}`}
                    value={word}
                    checked={selectedOptions[index] === word}
                    onChange={() => handleOptionSelect(index, word)}
                    className="hidden"
                  />
                  <span className={`inline-block px-4 py-2 rounded-lg border cursor-pointer text-sm transition-all duration-200
                    ${selectedOptions[index] === word
                      ? "border-purple-400/70 bg-purple-500/30 text-white font-semibold scale-105"
                      : "border-white/20 bg-white/5 text-white/80 hover:bg-white/10 hover:border-purple-400/30"
                    }`}>
                    {word}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <button onClick={handleNext} className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl text-white font-semibold hover:scale-105 transition-transform shadow-xl inline-flex items-center gap-3">
          <span>{t("next")}</span>
          <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </div>
  );
};

export default Question9;
