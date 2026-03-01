import Quiz from "../components/Quiz";
import { QuizProvider } from "../contexts/quiz";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const SpanishQuiz = () => {
  return (
    <div>
      <Header />
      <section className="relative min-h-screen overflow-hidden pt-32 pb-24">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-purple-950/40 backdrop-blur-sm"></div>

        {/* Floating symbols */}
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-40 left-20 text-8xl animate-bounce">🇪🇸</div>
          <div className="absolute bottom-40 right-20 text-8xl" style={{ animation: "bounce 3s ease-in-out 1s infinite" }}>📝</div>
          <div className="absolute top-1/3 right-1/4 text-7xl" style={{ animation: "bounce 4s ease-in-out 2s infinite" }}>✏️</div>
          <div className="absolute bottom-1/3 left-1/4 text-7xl" style={{ animation: "bounce 3.5s ease-in-out 0.5s infinite" }}>🎓</div>
        </div>

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-orange-500 to-purple-600"
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-purple-600/20 backdrop-blur-sm px-5 py-2 rounded-full border border-orange-500/30 mb-5">
              <span className="text-xl">🇪🇸</span>
              <span className="text-white/90 text-sm font-medium tracking-wider">EXAMEN DE ESPAÑOL</span>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              ¿Cuál es tu{" "}
              <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                nivel de español?
              </span>
            </h1>
            <p className="text-white/60 text-lg">Responde cada pregunta y descubre tu nivel real</p>
          </div>

          {/* Quiz */}
          <QuizProvider>
            <Quiz />
          </QuizProvider>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SpanishQuiz;
