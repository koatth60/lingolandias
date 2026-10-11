import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Option } from "../nevera/QuizShell";
import { Arrow } from "../nevera/ui";

const options = [
  { value: "a", label: "co, gdzie, dlaczego, który, jak, kiedy" },
  { value: "b", label: "kiedy, jak, dlaczego, co, który, gdzie" },
  { value: "c", label: "dlaczego, co, który, gdzie, jak, kiedy" },
];

const Question1 = ({ onNext }) => {
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
    <div className="qcard" style={{ "--qm": "#d0343f" }}>
      <h2 className="qprompt" lang="pl" id="q1-prompt">Wybierz pasujące tłumaczenie:</h2>
      <p className="qsource" lang="en">What, Where, Why, Which, How, When</p>
      <div className="qopts" role="group" aria-labelledby="q1-prompt">
        {options.map((opt) => (
          <Option
            key={opt.value}
            letter={opt.value.toUpperCase()}
            state={selectedAnswer === opt.value ? "selected" : "idle"}
            aria-pressed={selectedAnswer === opt.value}
            onClick={() => handleSelect(opt.value)}
          >
            <span lang="pl">{opt.label}</span>
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

export default Question1;
