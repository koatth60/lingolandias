import { useState } from "react";
import { useTranslation } from 'react-i18next';

const Question6 = ({ onNext }) => {
  const { t } = useTranslation();
  const phrases = ["How much", "How many", "How long", "How big"];
  const sentences = [
    "sausages are you going to grill?",
    "money does it cost?",
    "is the Great Wall of China?",
    "is the Sphinx?",
  ];
  const correctMatches = {
    "How much": "money does it cost?",
    "How long": "is the Great Wall of China?",
    "How many": "sausages are you going to grill?",
    "How big": "is the Sphinx?",
  };

  const [selectedPhrase, setSelectedPhrase] = useState(null);
  const [matches, setMatches] = useState(Array(phrases.length).fill(null));
  const [matchColors] = useState([
    "from-purple-500 to-blue-500",
    "from-orange-500 to-pink-500",
    "from-green-500 to-teal-500",
    "from-yellow-500 to-orange-500",
  ]);

  const handlePhraseClick = (index) => {
    if (selectedPhrase === null) setSelectedPhrase(index);
  };

  const handleSentenceClick = (index) => {
    if (selectedPhrase !== null) {
      const newMatches = [...matches];
      newMatches[selectedPhrase] = index;
      setMatches(newMatches);
      setSelectedPhrase(null);
    }
  };

  const handleNext = () => {
    if (matches.includes(null)) {
      alert(t("pleaseMatchAll"));
      return;
    }
    const allCorrect = phrases.every((phrase, index) => sentences[matches[index]] === correctMatches[phrase]);
    onNext(allCorrect);
  };

  return (
    <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-2xl">
      <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 absolute top-0 left-0 right-0 rounded-t-2xl"></div>

      <p className="text-white/80 text-lg font-medium mb-2 mt-2">Dopasuj pytajnik do odpowiedniego zdania:</p>
      <p className="text-white/50 text-sm mb-6">Click a question word on the left, then click its matching sentence on the right.</p>

      <div className="flex gap-6 justify-center mb-6">
        {/* Phrases column */}
        <div className="space-y-2 flex-1">
          <p className="text-white/40 text-xs uppercase tracking-wider text-center mb-3">{t("questionWord")}</p>
          {phrases.map((phrase, index) => {
            const matchedColor = matches[index] !== null ? matchColors[index] : null;
            const isSelected = selectedPhrase === index;
            return (
              <div
                key={index}
                onClick={() => handlePhraseClick(index)}
                className={`px-4 py-3 rounded-xl border cursor-pointer text-center font-semibold transition-all duration-200
                  ${isSelected ? "border-yellow-400 bg-yellow-400/20 text-yellow-300 scale-105" : ""}
                  ${!isSelected && matchedColor ? `border-white/30 bg-gradient-to-r ${matchedColor} bg-opacity-30 text-white` : ""}
                  ${!isSelected && !matchedColor ? "border-white/20 bg-white/5 text-white/80 hover:bg-white/10" : ""}
                `}
              >
                {phrase}
              </div>
            );
          })}
        </div>

        {/* Sentences column */}
        <div className="space-y-2 flex-1">
          <p className="text-white/40 text-xs uppercase tracking-wider text-center mb-3">{t("sentenceEnding")}</p>
          {sentences.map((sentence, index) => {
            const matchedByPhrase = matches.indexOf(index);
            const matchedColor = matchedByPhrase !== -1 ? matchColors[matchedByPhrase] : null;
            return (
              <div
                key={index}
                onClick={() => handleSentenceClick(index)}
                className={`px-4 py-3 rounded-xl border cursor-pointer text-sm transition-all duration-200
                  ${matchedColor ? `border-white/30 bg-gradient-to-r ${matchedColor} bg-opacity-20 text-white font-medium` : "border-white/20 bg-white/5 text-white/80 hover:bg-white/10 hover:border-purple-400/40"}
                `}
              >
                {sentence}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button onClick={handleNext} className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl text-white font-semibold hover:scale-105 transition-transform shadow-xl inline-flex items-center gap-3">
          <span>{t("next")}</span>
          <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </div>
  );
};

export default Question6;
