import React from 'react';

const QuestionResults = ({ results }) => {
  // Calculate the total correct answers
  const totalCorrect = results.filter(result => result).length;
  const totalQuestions = results.length;

  // Calculate the percentage of correct answers
  const percentageCorrect = (totalCorrect / totalQuestions) * 100;

  // Display result message based on correctness
  const resultMessage = `You answered ${percentageCorrect.toFixed(2)}% of questions correctly. Keep practicing!`;

  return (
    <div>
      <h2>Quiz Results</h2>
      <p>{resultMessage}</p>
    </div>
  );
};

export default QuestionResults;
