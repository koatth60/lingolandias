import { useState } from "react";
import { useTranslation } from 'react-i18next';

const Question2 = ({ onNext }) => {
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
    { value: "a", label: "I am, You are, He is, She is, It is, We are, You are, They are." },
    { value: "b", label: "I are, You are, He is, She is, It is, We am, You am, They am." },
    { value: "c", label: "I am, You is, He is, She are, It am, We are, You are, They are." },
    { value: "d", label: "I is, You are, He is, She is, It is, We are, You are, They are." },
    { value: "e", label: "I am, You am, He are, She are, It are, We is, You is, They is" },
  ];

  return (
    <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-2xl">
      <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 absolute top-0 left-0 right-0 rounded-t-2xl"></div>

      <p className="text-white/80 text-lg font-medium mb-6 mt-2">Wybierz poprawne tłumaczenie:</p>

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

export default Question2;
