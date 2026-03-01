import { useState, createElement } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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

  const progress = ((currentQuestion - 1) / questions.length) * 100;

  return (
    <div>
      <Header />
      <section className="relative min-h-screen overflow-hidden pt-32 pb-24">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-purple-950/40 backdrop-blur-sm"></div>

        {/* Floating symbols */}
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-40 left-20 text-8xl animate-bounce">🇬🇧</div>
          <div className="absolute bottom-40 right-20 text-8xl" style={{ animation: "bounce 3s ease-in-out 1s infinite" }}>📝</div>
          <div className="absolute top-1/3 right-1/4 text-7xl" style={{ animation: "bounce 4s ease-in-out 2s infinite" }}>✏️</div>
          <div className="absolute bottom-1/3 left-1/4 text-7xl" style={{ animation: "bounce 3.5s ease-in-out 0.5s infinite" }}>🎓</div>
        </div>

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.25,
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4 max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm px-5 py-2 rounded-full border border-purple-500/30 mb-5">
              <span className="text-xl">🇬🇧</span>
              <span className="text-white/90 text-sm font-medium tracking-wider">{t("engTestBadge")}</span>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              {t("engTestTitle1")}{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t("engTestTitle2")}
              </span>
            </h1>
            <p className="text-white/60 text-lg">{t("engTestSubText")}</p>
          </div>

          {currentQuestion <= questions.length ? (
            <div className="space-y-6">
              {/* Progress header */}
              <div className="bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl rounded-2xl border border-white/20 p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/60 text-sm">{t("question")}</span>
                  <span className="text-white font-bold">
                    {currentQuestion}
                    <span className="text-white/40">/{questions.length}</span>
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2.5">
                  <div
                    className="h-2.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Question component */}
              {createElement(questions[currentQuestion - 1], {
                onNext: handleNextQuestion,
              })}
            </div>
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
