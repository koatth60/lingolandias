import Answer from "./Answer";
import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  const answered = !!quizState.currentAnswer;
  const isRight = answered && quizState.currentAnswer === currentQuestion.correctAnswer;

  return (
    <>
      <h2 className="qsource pink" id="es-question">{currentQuestion.question.trim()}</h2>
      <ul className="qopts" aria-labelledby="es-question">
        {quizState.answers.map((answer, index) => (
          <Answer
            answerText={answer}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            key={index}
            index={index}
            onSelectAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANSWER", payload: answerText })
            }
          />
        ))}
      </ul>
      <div role="status" aria-live="polite">
        {answered && (
          <p className={`qfeedback ${isRight ? "ok" : "ko"}`}>
            {isRight ? "¡Correcto!" : `La respuesta correcta es: ${currentQuestion.correctAnswer}`}
          </p>
        )}
      </div>
    </>
  );
};

export default Question;
