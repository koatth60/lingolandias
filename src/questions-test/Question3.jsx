import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Option } from "../nevera/QuizShell";
import { Arrow } from "../nevera/ui";

const options = [
  { value: "a", label: "I live in London." },
  { value: "b", label: "I am living in London at the moment." },
  { value: "c", label: "I am live in London." },
];

const Question3 = ({ onNext }) => {
  const { t } = useTranslation();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [hint, setHint] = useState(false);

  const handleSelect = (value) => {
    setSelectedAnswer(value);
    setHint(false);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      onNext(selectedAnswer === "a");
    } else {
      setHint(true);
    }
  };

  return (
    <div className="qcard" style={{ "--qm": "#6b1fa6" }}>
      <h2 className="qprompt" lang="pl" id="q3-prompt">Wybierz błędne zdanie:</h2>
      <div className="qopts" role="group" aria-labelledby="q3-prompt">
        {options.map((opt) => (
          <Option
            key={opt.value}
            letter={opt.value.toUpperCase()}
            state={selectedAnswer === opt.value ? "selected" : "idle"}
            aria-pressed={selectedAnswer === opt.value}
            onClick={() => handleSelect(opt.value)}
          >
            <span lang="en">{opt.label}</span>
          </Option>
        ))}
      </div>

      <div className="qactions">
        {hint && <p className="qhint" role="alert">{t("pleaseSelectAnswer")}</p>}
        <button type="button" className="btn btn-ink" onClick={handleNext}>
          {t("next")} <Arrow />
        </button>
      </div>
    </div>
  );
};

export default Question3;
