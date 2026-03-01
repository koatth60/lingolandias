import { useState } from "react";
import { useTranslation } from 'react-i18next';

const subQuestions = [
  {
    question: "1. How often does she ride her bike?",
    options: [
      { value: "a", label: "She never rides her bike" },
      { value: "b", label: "She never ride her bike." },
      { value: "c", label: "She never riding her bike" },
    ],
  },
  {
    question: "2. Have you got any cereal? I'm hungry.",
    options: [
      { value: "a", label: "No, I don't have any cereal but I have got eggs." },
      { value: "b", label: "No, I doesn't have any cereal but I have got eggs." },
      { value: "c", label: "Yes, I've got cheese, it is in the fridge." },
    ],
  },
  {
    question: "3. Do you like lemon?",
    options: [
      { value: "a", label: "No, it is too sour." },
      { value: "b", label: "No, it is most sour." },
      { value: "c", label: "No, it isn't sour." },
    ],
  },
  {
    question: "4. What are you doing?",
    options: [
      { value: "a", label: "I'm cooking dinner." },
      { value: "b", label: "I cooking dinner." },
      { value: "c", label: "I cooked dinner." },
    ],
  },
  {
    question: "5. Why do you like swimming?",
    options: [
      { value: "a", label: "I like swimming because it's good for my body." },
      { value: "b", label: "I'm liking swimming because it's good for my body." },
      { value: "c", label: "I like swimming because it's good to my body." },
    ],
  },
];

const correctAnswers = ["a", "a", "a", "a", "a"];

const Question7 = ({ onNext }) => {
  const { t } = useTranslation();
  const [selectedAnswers, setSelectedAnswers] = useState(Array(subQuestions.length).fill(null));

  const handleAnswerSelection = (questionIndex, answer) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = answer;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNext = () => {
    if (selectedAnswers.includes(null)) {
      alert(t("pleaseAnswerAll"));
      return;
    }
    const allCorrect = selectedAnswers.every((answer, index) => answer === correctAnswers[index]);
    onNext(allCorrect);
  };

  return (
    <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-2xl">
      <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 absolute top-0 left-0 right-0 rounded-t-2xl"></div>

      <p className="text-white/80 text-lg font-medium mb-6 mt-2">Choose the correct answer for each question:</p>

      <div className="space-y-8">
        {subQuestions.map((sq, qIndex) => (
          <div key={qIndex} className="bg-white/5 rounded-xl border border-white/10 p-5">
            <p className="text-white font-semibold mb-4">{sq.question}</p>
            <div className="space-y-2">
              {sq.options.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-all duration-300
                    ${selectedAnswers[qIndex] === opt.value
                      ? "border-purple-400/70 bg-purple-500/20"
                      : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-400/30"
                    }`}
                >
                  <input type="radio" name={`answer${qIndex}`} value={opt.value} onChange={() => handleAnswerSelection(qIndex, opt.value)} className="hidden" />
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 border-2 transition-all
                    ${selectedAnswers[qIndex] === opt.value ? "bg-purple-500 border-purple-400 text-white" : "bg-purple-900/60 border-white/20 text-white/60"}`}>
                    {opt.value.toUpperCase()}
                  </div>
                  <span className="text-white/90 text-sm">{opt.label}</span>
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

export default Question7;
