import { useState, createElement } from "react";
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

  const handleNextQuestion = (isCorrect) => {
    setResults([...results, isCorrect]);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      <Header />
      <section className="teachers h-auto flex justify-center">
        <div className="h-auto font-satoshi lg:max-w-[1245px] lg:w-auto w-full relative md:my-[90px] mt-[80px] md:mx-[30px] px-3">
          {currentQuestion <= questions.length ? (
            <>
              <h2 className="score">
                {`Question ${currentQuestion}/${questions.length}`}
              </h2>
              {createElement(questions[currentQuestion - 1], {
                onNext: handleNextQuestion,
              })}
            </>
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
