import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Option } from "../nevera/QuizShell";
import { Arrow } from "../nevera/ui";

const options = [
  { value: "a", label: "I am, You are, He is, She is, It is, We are, You are, They are." },
  { value: "b", label: "I are, You are, He is, She is, It is, We am, You am, They am." },
  { value: "c", label: "I am, You is, He is, She are, It am, We are, You are, They are." },
  { value: "d", label: "I is, You are, He is, She is, It is, We are, You are, They are." },
  { value: "e", label: "I am, You am, He are, She are, It are, We is, You is, They is" },
];

const Question2 = ({ onNext }) => {
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
    <div className="qcard" style={{ "--qm": "#2c6fd1" }}>
      <h2 className="qprompt" lang="pl" id="q2-prompt">Wybierz poprawne tłumaczenie:</h2>
      <div className="qopts" role="group" aria-labelledby="q2-prompt">
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

export default Question2;
