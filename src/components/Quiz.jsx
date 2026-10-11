import { useContext, useEffect, useRef, useState } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";
import { QuizProgress } from "../nevera/QuizShell.jsx";
import { Arrow } from "../nevera/ui.jsx";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [sendError, setSendError] = useState(false);
  const card = useRef(null);
  const step = `${quizState.currentQuestionIndex}-${quizState.showResults}`;
  const lastStep = useRef(step);

  // Move focus to the new card when the question (or the results screen) changes
  useEffect(() => {
    if (lastStep.current === step) return;
    lastStep.current = step;
    card.current?.focus();
  }, [step]);

  // The chosen option becomes disabled, so hand focus to the "next" button
  const nextBtn = useRef(null);
  useEffect(() => {
    if (quizState.currentAnswer) nextBtn.current?.focus();
  }, [quizState.currentAnswer]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = async () => {
    setSendError(false);
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
        setSendError(true);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSendError(true);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleEmailSubmit();
  };

  const restart = () => {
    setSendError(false);
    dispatch({ type: "RESTART" });
  };

  const total = quizState.questions.length;

  if (quizState.showResults) {
    return (
      <>
        <QuizProgress current={total + 1} total={total} label="Pregunta" />
        <div className="qcard" style={{ "--qm": "#6b1fa6" }} ref={card} tabIndex={-1}>
          {!emailSent ? (
            <>
              <div className="qscore">
                <p className="hand">Has terminado el test de español</p>
                <h2 className="big">¡Completado!</h2>
              </div>
              <p className="qtext">
                Tu resultado está listo. Introduce tu email para recibirlo: te lo enviamos al instante.
              </p>
              <form className="qform" onSubmit={onSubmit}>
                <label>
                  Email
                  <input
                    className="qinput"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="tu@email.com"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </label>
                {sendError && (
                  <p className="qstatus ko" role="alert">
                    No hemos podido enviar tu resultado. Inténtalo de nuevo en unos minutos.
                  </p>
                )}
                <div className="qactions">
                  <button type="button" className="btn btn-ink-line" onClick={restart}>
                    Repetir el test
                  </button>
                  <button type="submit" className="btn btn-ink">
                    Recibir resultado <Arrow />
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <div className="qscore">
                <p className="hand">Hemos enviado tu resultado a</p>
                <h2 className="big" style={{ fontSize: "clamp(1.6rem,5vw,2.4rem)", wordBreak: "break-word" }}>{email}</h2>
              </div>
              <p className="qstatus ok" role="status">
                ¡Revisa tu email! Nuestro equipo se pondrá en contacto contigo pronto con más información.
              </p>
              <div className="qactions">
                <button type="button" className="btn btn-ink-line" onClick={restart}>
                  Repetir el test
                </button>
              </div>
            </>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <QuizProgress current={quizState.currentQuestionIndex + 1} total={total} label="Pregunta" />
      <div className="qcard" style={{ "--qm": "#6b1fa6" }} ref={card} tabIndex={-1}>
        <Question />
        {quizState.currentAnswer && (
          <div className="qactions">
            <button
              ref={nextBtn}
              type="button"
              className="btn btn-ink"
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
            >
              {quizState.currentQuestionIndex === total - 1 ? "Ver resultado" : "Siguiente pregunta"} <Arrow />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
