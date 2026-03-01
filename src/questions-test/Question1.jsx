import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Question1 = ({ onNext }) => {
  const { t } = useTranslation();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleNext = () => {
    if (selectedAnswer !== null) {
      onNext(selectedAnswer === "a");
    } else {
      alert(t("pleaseSelectAnswer"));
    }
  };

  const options = [
    { value: "a", label: "co, gdzie, dlaczego, który, jak, kiedy" },
    { value: "b", label: "kiedy, jak, dlaczego, co, który, gdzie" },
    { value: "c", label: "dlaczego, co, który, gdzie, jak, kiedy" },
  ];

  return (
    <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-2xl">
      <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 absolute top-0 left-0 right-0 rounded-t-2xl"></div>

      <p className="text-white/80 text-lg font-medium mb-4 mt-2">Wybierz pasujące tłumaczenie:</p>

      <div className="bg-white/10 border border-white/20 rounded-xl py-4 px-6 mb-6 text-center">
        <p className="text-white text-xl font-semibold tracking-wide">What, Where, Why, Which, How, When</p>
      </div>

      <div className="space-y-3">
        {options.map((opt) => (
          <label
            key={opt.value}
            className={`flex items-center gap-4 px-5 py-4 rounded-xl border cursor-pointer transition-all duration-300
              ${selectedAnswer === opt.value
                ? "border-purple-400/70 bg-purple-500/20 scale-[1.01]"
                : "border-white/20 bg-white/5 hover:bg-white/10 hover:border-purple-400/40"
              }`}
          >
            <input type="radio" name="answer" value={opt.value} onChange={() => setSelectedAnswer(opt.value)} className="hidden" />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 border-2 transition-all
              ${selectedAnswer === opt.value ? "bg-purple-500 border-purple-400 text-white" : "bg-purple-900/60 border-white/20 text-white/60"}`}>
              {opt.value.toUpperCase()}
            </div>
            <span className="text-white/90 text-base">{opt.label}</span>
          </label>
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

export default Question1;
