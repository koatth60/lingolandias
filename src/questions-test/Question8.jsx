import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Question8 = ({ onNext }) => {
  const { t } = useTranslation();
  const pronouns = ["I", "You", "He", "She", "It", "We", "You", "They"];
  const correctAnswers = ["was", "were", "was", "was", "was", "were", "were", "were"];
  const [inputs, setInputs] = useState(Array(pronouns.length).fill(''));

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleNext = () => {
    if (inputs.some(input => input.trim() === '')) {
      alert(t("pleaseFillAll"));
      return;
    }
    const allCorrect = inputs.every((input, index) => input.trim().toLowerCase() === correctAnswers[index]);
    onNext(allCorrect);
  };

  return (
    <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-2xl">
      <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 absolute top-0 left-0 right-0 rounded-t-2xl"></div>

      <p className="text-white/80 text-lg font-medium mb-2 mt-2">Uzupełnij odpowiednią formę czasownika „to be" w czasie przeszłym.</p>
      <p className="text-white/50 text-sm mb-6">Type <span className="text-purple-300 font-semibold">was</span> or <span className="text-purple-300 font-semibold">were</span> for each pronoun.</p>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {pronouns.map((pronoun, index) => (
          <div key={index} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
            <span className="text-white font-semibold w-12 flex-shrink-0">{pronoun}</span>
            <span className="text-white/30">→</span>
            <input
              type="text"
              value={inputs[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder="was / were"
              className="flex-1 bg-transparent border-b border-white/30 text-white placeholder-white/30 focus:outline-none focus:border-purple-400 transition-colors pb-1 text-sm"
            />
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
  );
};

export default Question8;
