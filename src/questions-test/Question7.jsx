import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Option } from "../nevera/QuizShell";
import { Arrow } from "../nevera/ui";

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
  const [hint, setHint] = useState(false);

  const handleAnswerSelection = (questionIndex, answer) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = answer;
    setSelectedAnswers(newSelectedAnswers);
    setHint(false);
  };

  const handleNext = () => {
    if (selectedAnswers.includes(null)) {
      setHint(true);
      return;
    }
    const allCorrect = selectedAnswers.every((answer, index) => answer === correctAnswers[index]);
    onNext(allCorrect);
  };

  return (
    <div className="qcard" style={{ "--qm": "#2c6fd1" }}>
      <h2 className="qprompt">Choose the correct answer for each question:</h2>

      <div className="qsubs" lang="en">
        {subQuestions.map((sq, qIndex) => (
          <fieldset key={qIndex} className="qsub">
            <legend>{sq.question}</legend>
            <div className="qopts">
              {sq.options.map((opt) => (
                <Option
                  key={opt.value}
                  letter={opt.value.toUpperCase()}
                  state={selectedAnswers[qIndex] === opt.value ? "selected" : "idle"}
                  aria-pressed={selectedAnswers[qIndex] === opt.value}
                  onClick={() => handleAnswerSelection(qIndex, opt.value)}
                >
                  {opt.label}
                </Option>
              ))}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="qactions">
        {hint && <p className="qhint" role="alert">{t("pleaseAnswerAll")}</p>}
        <button type="button" className="btn btn-ink" onClick={handleNext}>
          {t("next")} <Arrow />
        </button>
      </div>
    </div>
  );
};

export default Question7;
