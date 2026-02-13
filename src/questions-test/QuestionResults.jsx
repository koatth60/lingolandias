import React, { useState } from "react";

const QuestionResults = ({ results }) => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const totalCorrect = results.filter((result) => result).length;
  const totalQuestions = results.length;
  const percentageCorrect = (totalCorrect / totalQuestions) * 100;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = async () => {
    try {
      const response = await fetch("https://api.srv570363.hstgr.cloud:3000/englishscore", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          percentage: percentageCorrect.toFixed(2),
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
    <section className="w-full flex justify-center md:px-0">
      <div className="h-auto font-satoshi lg:max-w-[1245px] lg:w-auto w-full relative md:my-[90px]  ">
        <div className="text-center bg-white lg:w-[975px] md:w-full pb-4 mb-4 ">
          <h2 className="text-4xl bg-[#0094da] text-white py-7">
            Congratulations!
          </h2>
          <p className="mt-8 text-lg">You have completed the quiz.</p>

          {!emailSent ? (
            <div className="">
              <p className="text-lg">
                To receive your score, please enter your email below:
              </p>
              <div className="lg:flex justify-center">
                <input
                  type="email"
                  className="p-2 border border-gray-300 rounded"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />

                <button
                  className="mt-2 md:mt-0 md:ml-2 p-2 bg-black text-white rounded"
                  onClick={handleEmailSubmit}
                >
                  Send score
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-2 text-black text-lg">
              <p>Your score has been sent to {email}.</p>
              <p>Please make sure the email entered is correct!</p>
              <button
                className="mt-4 py-2 px-6 bg-black text-white rounded"
                onClick={handleReload}
              >
                RESTART
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuestionResults;
