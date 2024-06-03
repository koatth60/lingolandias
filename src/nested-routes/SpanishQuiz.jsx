import React from "react";
import Quiz from "../components/Quiz";
import { QuizProvider } from "../contexts/quiz";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const SpanishQuiz = () => {
  return (
    <div>
      <Header/>
    <section className=" teachers w-full h-screen  flex justify-center md:px-[30x]">
      <div className="h-auto font-satoshi lg:max-w-[1245px] relative lg:my-[80px] max-lg:mb-[260px] max-md:mb-[360px] md:mx-[30px] max-md:px-2">
        <QuizProvider>
          <Quiz />
        </QuizProvider>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default SpanishQuiz;
