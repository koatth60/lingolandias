import { useState } from "react";
import { useTranslation } from "react-i18next";

const QuestionResults = ({ results }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const totalCorrect = results.filter((result) => result).length;
  const totalQuestions = results.length;
  const percentageCorrect = Math.round((totalCorrect / totalQuestions) * 100);

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
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-xl opacity-40"></div>
        <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
          {/* Top bar */}
          <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500"></div>

          <div className="p-10 text-center">
            {!emailSent ? (
              <>
                {/* Trophy */}
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-2xl opacity-60"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-5xl shadow-2xl ring-4 ring-white/20">
                    🏆
                  </div>
                </div>

                <h2 className="text-4xl font-bold text-white mb-2">{t("congratulations")}</h2>
                <p className="text-white/60 mb-8">{t("completedEngTest")}</p>

                <div className="bg-white/5 rounded-2xl border border-white/10 px-8 py-6 mb-8 w-full">
                  <p className="text-white/70 text-base mb-1">{t("resultReady")}</p>
                  <p className="text-white/40 text-sm">{t("enterEmailHint")}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
                  <input
                    type="email"
                    className="w-full sm:w-72 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-400/60 focus:bg-white/15 transition-all"
                    placeholder="your@email.com"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <button
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl text-white font-semibold hover:scale-105 transition-transform shadow-lg whitespace-nowrap"
                    onClick={handleEmailSubmit}
                  >
                    {t("sendScore")}
                  </button>
                </div>

                <button
                  className="px-8 py-3 bg-white/10 border border-white/20 rounded-xl text-white/80 hover:bg-white/15 hover:text-white transition-all duration-300"
                  onClick={handleReload}
                >
                  {t("restartTest")}
                </button>
              </>
            ) : (
              <>
                {/* Sent confirmation */}
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-2xl opacity-60"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-5xl shadow-2xl ring-4 ring-white/20">
                    📬
                  </div>
                </div>

                <h2 className="text-4xl font-bold text-white mb-2">{t("checkYourEmail")}</h2>
                <p className="text-white/60 mb-8">{t("resultSentTo")}</p>

                <div className="bg-white/5 rounded-2xl border border-white/10 px-8 py-4 mb-8 inline-block">
                  <p className="text-purple-400 font-semibold text-lg">{email}</p>
                </div>

                <p className="text-white/40 text-sm mb-8">{t("teamWillContact")}</p>

                <button
                  className="px-8 py-3 bg-white/10 border border-white/20 rounded-xl text-white/80 hover:bg-white/15 hover:text-white transition-all duration-300"
                  onClick={handleReload}
                >
                  {t("restartTest")}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionResults;
