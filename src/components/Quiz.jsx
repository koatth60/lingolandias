import { useContext, useState } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/spanishscore`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          score: quizState.correctAnswersCount,
          totalQuestions: quizState.questions.length,
        }),
      });
      if (response.ok) {
        setEmailSent(true);
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const progress = quizState.showResults
    ? 100
    : ((quizState.currentQuestionIndex) / quizState.questions.length) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {quizState.showResults ? (
        /* ── RESULTS SCREEN ── */
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl blur-xl opacity-40"></div>
          <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
            {/* Top bar */}
            <div className="h-2 bg-gradient-to-r from-orange-500 to-purple-600"></div>

            <div className="p-10 text-center">
              {!emailSent ? (
                <>
                  {/* Trophy */}
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full blur-2xl opacity-60"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center text-5xl shadow-2xl ring-4 ring-white/20">
                      🏆
                    </div>
                  </div>

                  <h2 className="text-4xl font-bold text-white mb-2">¡Completado!</h2>
                  <p className="text-white/60 mb-8">Has finalizado el examen de español</p>

                  <div className="bg-white/5 rounded-2xl border border-white/10 px-8 py-6 mb-8 w-full">
                    <p className="text-white/70 text-base mb-1">Tu resultado está listo</p>
                    <p className="text-white/40 text-sm">Introduce tu email para recibirlo — te lo enviamos al instante.</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={handleEmailChange}
                      className="w-full sm:w-72 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-400/60 focus:bg-white/15 transition-all"
                    />
                    <button
                      onClick={handleEmailSubmit}
                      className="px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 rounded-xl text-white font-semibold hover:scale-105 transition-transform shadow-lg whitespace-nowrap"
                    >
                      Recibir resultado
                    </button>
                  </div>

                  <button
                    onClick={() => dispatch({ type: "RESTART" })}
                    className="px-8 py-3 bg-white/10 border border-white/20 rounded-xl text-white/80 hover:bg-white/15 hover:text-white transition-all duration-300"
                  >
                    Reiniciar examen
                  </button>
                </>
              ) : (
                <>
                  {/* Sent confirmation */}
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full blur-2xl opacity-60"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center text-5xl shadow-2xl ring-4 ring-white/20">
                      📬
                    </div>
                  </div>

                  <h2 className="text-4xl font-bold text-white mb-2">¡Revisa tu email!</h2>
                  <p className="text-white/60 mb-8">Hemos enviado tu resultado a</p>

                  <div className="bg-white/5 rounded-2xl border border-white/10 px-8 py-4 mb-8 inline-block">
                    <p className="text-orange-400 font-semibold text-lg">{email}</p>
                  </div>

                  <p className="text-white/40 text-sm mb-8">Nuestro equipo se pondrá en contacto contigo pronto con más información.</p>

                  <button
                    onClick={() => dispatch({ type: "RESTART" })}
                    className="px-8 py-3 bg-white/10 border border-white/20 rounded-xl text-white/80 hover:bg-white/15 hover:text-white transition-all duration-300"
                  >
                    Reiniciar examen
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* ── QUESTION SCREEN ── */
        <div className="space-y-6">
          {/* Progress header */}
          <div className="bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl rounded-2xl border border-white/20 p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white/60 text-sm">Pregunta</span>
              <span className="text-white font-bold">
                {quizState.currentQuestionIndex + 1}
                <span className="text-white/40">/{quizState.questions.length}</span>
              </span>
            </div>
            {/* Progress bar */}
            <div className="w-full bg-white/10 rounded-full h-2.5">
              <div
                className="h-2.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question + Answers */}
          <Question />

          {/* Next button */}
          {quizState.currentAnswer && (
            <div className="flex justify-end">
              <button
                onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 rounded-xl text-white font-semibold hover:scale-105 transition-transform shadow-xl inline-flex items-center gap-3"
              >
                <span>Siguiente pregunta</span>
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
