const Answer = ({
  answerText,
  index,
  onSelectAnswer,
  currentAnswer,
  correctAnswer,
}) => {
  const letterMapping = ["A", "B", "C", "D"];
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer = currentAnswer === answerText && currentAnswer !== correctAnswer;
  const isDisabled = !!currentAnswer;

  let stateClasses = "border-white/20 bg-white/5 hover:bg-white/10 hover:border-purple-400/50 hover:scale-[1.02]";
  if (isCorrectAnswer) stateClasses = "border-green-400/70 bg-green-500/20 scale-[1.01]";
  else if (isWrongAnswer) stateClasses = "border-red-400/70 bg-red-500/20";
  else if (isDisabled) stateClasses = "border-white/10 bg-white/5 opacity-60";

  return (
    <div
      className={`flex items-center gap-4 px-5 py-4 rounded-xl border backdrop-blur-sm transition-all duration-300 ${stateClasses} ${!isDisabled ? "cursor-pointer" : "cursor-default"}`}
      onClick={() => !isDisabled && onSelectAnswer(answerText)}
    >
      <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 border-2 transition-colors duration-300
        ${isCorrectAnswer ? "bg-green-500 border-green-400 text-white" : ""}
        ${isWrongAnswer ? "bg-red-500 border-red-400 text-white" : ""}
        ${!isCorrectAnswer && !isWrongAnswer ? "bg-purple-900/60 border-white/20 text-white/70" : ""}
      `}>
        {isCorrectAnswer ? "✓" : isWrongAnswer ? "✗" : letterMapping[index]}
      </div>
      <span className="text-white/90 text-base leading-relaxed">{answerText}</span>
    </div>
  );
};

export default Answer;
