
import Quiz from "../components/Quiz";
import { QuizProvider } from "../contexts/quiz";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const SpanishQuiz = () => {
  return (
    <div>
      <Header/>
    <section className="teachers w-full h-auto flex justify-center md:px-[30x]">
      <div className="h-auto font-satoshi lg:max-w-[1245px] w-full relative lg:my-[40px] md:mx-[30px] px-3">
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
