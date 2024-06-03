// EnglishQuiz.js
import { useState, createElement } from "react"; // Import createElement
import Header from "../sections/Header";
import Footer from "../sections/Footer";
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

const EnglishQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [results, setResults] = useState([]);
  const questions = [Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10];

  const handleNextQuestion = (isCorrect) => {
    setResults([...results, isCorrect]);
    setCurrentQuestion(currentQuestion + 1);
  };

  // Calculate the overall percentage of correct answers
  // const totalCorrect = results.filter(result => result).length;
  // const totalQuestions = results.length;
  // const overallPercentage = (totalCorrect / totalQuestions) * 100;

  return (
    <div>
      <Header />
      <Header />
      <section
        className={`teachers ${
          currentQuestion === 7 || currentQuestion === 8 ? "h-auto" : "h-screen"
        } flex justify-center md:px-[30px]`}
      >
        <div className="h-auto font-satoshi lg:max-w-[1245px] relative lg:my-[80px] max-lg:mb-[260px] max-md:mb-[360px] md:mx-[30px] max-md:px-2">
        <h2 className="score">
  {currentQuestion <= questions.length ? (
    `Question ${currentQuestion}/${questions.length}`
  ) : (
    "RESULTS"
  )}
</h2>

          {currentQuestion <= questions.length ? (
            createElement(questions[currentQuestion - 1], { onNext: handleNextQuestion }) // Use createElement to render components dynamically
          ) : (
            <QuestionResults results={results} />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnglishQuiz;
