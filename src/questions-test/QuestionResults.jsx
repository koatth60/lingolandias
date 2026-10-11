import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Arrow } from "../nevera/ui";

const QuestionResults = ({ results }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const totalCorrect = results.filter((result) => result).length;
  const totalQuestions = results.length;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/englishscore`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          percentage: ((totalCorrect / totalQuestions) * 100).toFixed(2),
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

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="qcard" style={{ "--qm": "#d0343f" }}>
      {!emailSent ? (
        <div className="qresult">
          <h2>{t("congratulations")}</h2>
          <p className="qtext">{t("completedEngTest")}</p>
          <p className="qsource">{t("resultReady")}</p>
          <p className="qtext">{t("enterEmailHint")}</p>

          <form
            className="qform"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              handleEmailSubmit();
            }}
          >
            <label htmlFor="en-score-email" className="sr">Email</label>
            <input
              id="en-score-email"
              type="email"
              className="qinput"
              placeholder="your@email.com"
              autoComplete="email"
              value={email}
              onChange={handleEmailChange}
            />
            <button type="submit" className="btn btn-ink">
              {t("sendScore")} <Arrow />
            </button>
          </form>

          <button type="button" className="btn btn-ink-line" onClick={handleReload}>
            {t("restartTest")}
          </button>
        </div>
      ) : (
        <div className="qresult" role="status">
          <h2>{t("checkYourEmail")}</h2>
          <p className="qtext">{t("resultSentTo")}</p>
          <p className="qsource teal">{email}</p>
          <p className="qnote">{t("teamWillContact")}</p>
          <button type="button" className="btn btn-ink-line" onClick={handleReload}>
            {t("restartTest")}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionResults;
