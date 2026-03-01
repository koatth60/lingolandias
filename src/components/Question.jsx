import Answer from "./Answer";
import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  return (
    <div className="space-y-6">
      <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 px-8 py-6">
        <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full text-white text-xs font-bold tracking-wider">
          PREGUNTA
        </div>
        <p className="text-white text-xl leading-relaxed mt-2">{currentQuestion.question}</p>
      </div>
      <div className="space-y-3">
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
      </div>
    </div>
  );
};

export default Question;
