import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Metod = () => {
  const { t } = useTranslation();
  const [openQuestion, setOpenQuestion] = useState(null);

  const questions = [
    { id: 1,  icon: "😰", question: t("methodQ1"),  answer: t("methodQ1P"),  color: "from-orange-500 to-orange-400" },
    { id: 2,  icon: "🗣️", question: t("methodQ2"),  answer: t("methodQ2P"),  color: "from-purple-500 to-purple-400" },
    { id: 3,  icon: "🧠", question: t("methodQ3"),  answer: t("methodQ3P"),  color: "from-orange-500 to-purple-600" },
    { id: 4,  icon: "😬", question: t("methodQ4"),  answer: t("methodQ4P"),  color: "from-purple-600 to-orange-500" },
    { id: 5,  icon: "📚", question: t("methodQ5"),  answer: t("methodQ5P"),  color: "from-indigo-500 to-purple-500" },
    { id: 6,  icon: "📱", question: t("methodQ6"),  answer: t("methodQ6P"),  color: "from-orange-400 to-pink-500" },
    { id: 7,  icon: "⏰", question: t("methodQ7"),  answer: t("methodQ7P"),  color: "from-purple-500 to-indigo-400" },
    { id: 8,  icon: "💔", question: t("methodQ8"),  answer: t("methodQ8P"),  color: "from-pink-500 to-purple-500" },
    { id: 9,  icon: "🧭", question: t("methodQ9"),  answer: t("methodQ9P"),  color: "from-orange-500 to-amber-400" },
    { id: 10, icon: "💻", question: t("methodQ10"), answer: t("methodQ10P"), color: "from-violet-500 to-purple-400" },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-purple-950/40"></div>

      {/* Decorative rings */}
      <div className="hidden lg:block absolute top-20 right-20 opacity-20">
        <div className="relative">
          <div className="w-64 h-64 border-2 border-orange-500/30 rounded-full animate-ping-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-purple-500/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-orange-500/20 to-purple-600/20 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute text-xl opacity-5 animate-float-random"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s`, animationDuration: `${10 + Math.random() * 10}s` }}>
            {['😰','🗣️','✨','💬','🎯','🌟','⚡','💡','🧠','📚'][i % 10]}
          </div>
        ))}
      </div>

      <div className="relative container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-purple-600/20 backdrop-blur-sm px-5 py-2 rounded-full border border-orange-500/30 text-orange-200 text-sm font-medium tracking-wider mb-6">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
            {t("solveYourDoubts")}
          </span>
          <div className="inline-block relative">
            <span className="absolute -inset-10 bg-gradient-to-r from-orange-500/30 to-purple-600/30 rounded-full blur-3xl"></span>
            <h2 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-orange-400 bg-clip-text text-transparent bg-300% animate-gradient">
                {t("methodH")}
              </span>
            </h2>
          </div>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mt-4">
            {t("methodP")}
          </p>
          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <span className="text-orange-400 text-2xl animate-pulse">✦</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
        </div>

        {/* Questions grid — 2 columns on large screens */}
        <div className="grid md:grid-cols-2 gap-3 sm:gap-4 mb-12">
          {questions.map((q) => (
            <div key={q.id} className="group relative">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${q.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
              <div className="relative bg-purple-900/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
                <button
                  onClick={() => setOpenQuestion(openQuestion === q.id ? null : q.id)}
                  className="w-full flex items-center gap-3 p-4 text-left transition-all"
                >
                  <div className={`w-9 h-9 shrink-0 rounded-xl bg-gradient-to-r ${q.color} flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition-transform`}>
                    {q.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-sm sm:text-base group-hover:text-orange-200 transition-colors leading-snug">
                      {q.question}
                    </h4>
                  </div>
                  <div className={`w-7 h-7 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 shrink-0 ${openQuestion === q.id ? 'rotate-180 bg-gradient-to-r from-orange-500 to-purple-600' : ''}`}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`transition-all duration-500 ease-in-out ${openQuestion === q.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="p-4 pt-0 border-t border-white/10">
                    <div className="flex gap-3">
                      <span className="text-orange-400 text-sm">💬</span>
                      <p className="text-white/80 text-sm leading-relaxed">{q.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA card */}
        <div className="relative group max-w-3xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-700"></div>
          <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-white/20 shadow-2xl flex flex-col sm:flex-row items-center gap-6">
            <span className="text-5xl">🎓</span>
            <div className="flex-1 text-center sm:text-left">
              <h4 className="text-white font-bold text-lg sm:text-xl">{t("readyToStart")}</h4>
              <p className="text-white/70 text-sm mt-1">{t("discoveryClass")}</p>
            </div>
            <Link to="/contact" className="shrink-0 px-7 py-3 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-lg text-sm sm:text-base">
              {t("demoClass")}
            </Link>
          </div>
        </div>

        {/* Bottom separator */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-6 py-2 bg-purple-900/60 backdrop-blur-sm rounded-full text-white/60 text-sm border border-white/20">
              {t("learnWithoutRealizing")}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.1; }
        }
        .animate-ping-slow { animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite; }
        @keyframes float-random {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -20px) rotate(5deg); }
          50% { transform: translate(-10px, 30px) rotate(-5deg); }
          75% { transform: translate(-30px, -10px) rotate(3deg); }
        }
        .animate-float-random { animation: float-random 15s infinite; }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient { background-size: 300% 300%; animation: gradient 8s ease infinite; }
      `}</style>
    </section>
  );
};

export default Metod;
