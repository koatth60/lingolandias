import Quiz from "../components/Quiz";
import { QuizProvider } from "../contexts/quiz";
import QuizShell from "../nevera/QuizShell.jsx";

const SpanishQuiz = () => {
  return (
    <QuizShell
      hand="Test de español"
      title="¿Cuál es tu nivel de español?"
      text="Responde cada pregunta y descubre tu nivel real"
    >
      <div lang="es">
        <QuizProvider>
          <Quiz />
        </QuizProvider>
      </div>
    </QuizShell>
  );
};

export default SpanishQuiz;
