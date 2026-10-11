import { Option } from "../nevera/QuizShell.jsx";

const letterMapping = ["A", "B", "C", "D"];

const Answer = ({
  answerText,
  index,
  onSelectAnswer,
  currentAnswer,
  correctAnswer,
}) => {
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer = currentAnswer === answerText && currentAnswer !== correctAnswer;
  const isDisabled = !!currentAnswer;

  let state = "idle";
  if (isCorrectAnswer) state = "correct";
  else if (isWrongAnswer) state = "wrong";
  else if (isDisabled) state = "dim";

  return (
    <li>
      <Option
        letter={letterMapping[index]}
        state={state}
        disabled={isDisabled}
        onClick={() => !isDisabled && onSelectAnswer(answerText)}
      >
        {answerText}
      </Option>
    </li>
  );
};

export default Answer;
