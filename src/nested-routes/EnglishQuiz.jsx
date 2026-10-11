import { useState, useEffect, useRef, createElement } from "react";
import { useTranslation } from "react-i18next";
import QuizShell, { QuizProgress } from "../nevera/QuizShell";
import "../nevera/quiz-en.css";
import Question1 from "../questions-test/Question1";
import Question2 from "../questions-test/Question2";
import Question3 from "../questions-test/Question3";
import Question4 from "../questions-test/Question4";
import Question5 from "../questions-test/Question5";
import Question6 from "../questions-test/Question6";
import Question7 from "../questions-test/Question7";
import Question8 from "../questions-test/Question8";
import Question9 from "../questions-test/Question9";
import Question10 from "../questions-test/Question10";
import QuestionResults from "../questions-test/QuestionResults";

const questions = [
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  Question6,
  Question7,
  Question8,
  Question9,
  Question10,
];

const EnglishQuiz = () => {
  const { t } = useTranslation();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [results, setResults] = useState([]);
  const top = useRef(null);
  const first = useRef(true);

  const handleNextQuestion = (isCorrect) => {
    setResults([...results, isCorrect]);
    setCurrentQuestion(currentQuestion + 1);
  };

  // Long questions leave the reader at the bottom: bring the next one into view.
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const el = top.current;
    if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ block: "start" });
  }, [currentQuestion]);

  return (
    <QuizShell hand={t("engTestBadge")} title={`${t("engTestTitle1")} ${t("engTestTitle2")}`} text={t("engTestSubText")}>
      <div className="qen" ref={top}>
        {currentQuestion <= questions.length ? (
          <>
            <QuizProgress current={currentQuestion} total={questions.length} label={t("question")} />
            {createElement(questions[currentQuestion - 1], {
              onNext: handleNextQuestion,
            })}
          </>
        ) : (
          <QuestionResults results={results} />
        )}
      </div>
    </QuizShell>
  );
};

export default EnglishQuiz;
