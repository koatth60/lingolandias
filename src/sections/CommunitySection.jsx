import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CommunitySection = () => {
  const { t } = useTranslation();

  const whatFindItems = [
    { icon: "👁️", key: "whatFindItem1" },
    { icon: "❌", key: "whatFindItem2" },
    { icon: "🏡", key: "whatFindItem3" },
    { icon: "☕", key: "whatFindItem4" },
    { icon: "🌱", key: "whatFindItem5" },
    { icon: "👥", key: "whatFindItem6" },
    { icon: "⚡", key: "whatFindItem7" },
    { icon: "🍵", key: "whatFindItem8" },
    { icon: "🧑‍🏫", key: "whatFindItem9" },
    { icon: "🌍", key: "whatFindItem10" },
    { icon: "🇬🇧", key: "whatFindItem11" },
    { icon: "🇪🇸", key: "whatFindItem12" },
    { icon: "🇵🇱", key: "whatFindItem13" },
    { icon: "🇮🇩", key: "whatFindItem14" },
    { icon: "💼", key: "whatFindItem15" },
  ];

  const revItems = [
    { icon: "🎮", key: "revItem1" },
    { icon: "🧠", key: "revItem2" },
    { icon: "💻", key: "revItem3" },
    { icon: "💬", key: "revItem4" },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-purple-950/40"></div>

      {/* Decorative bg */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-orange-500/8 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-purple-600/8 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative container mx-auto px-4 max-w-7xl space-y-24">

        {/* ── BLOCK 1: THE LANGUAGE THAT SPEAKS IN YOUR VOICE ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Quote + text */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-purple-600/20 backdrop-blur-sm px-5 py-2 rounded-full border border-orange-500/30 text-orange-200 text-sm font-medium">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
              {t("authenticLearning")}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-orange-400 bg-clip-text text-transparent animate-gradient bg-300%">
                {t("voiceTitle")}
              </span>
            </h2>

            {/* Brené Brown quote */}
            <blockquote className="relative pl-6 border-l-2 border-orange-500">
              <p className="text-white/80 text-base sm:text-lg italic leading-relaxed">
                "{t("voiceQuote")}"
              </p>
              <cite className="text-orange-300 text-sm mt-2 block not-italic font-medium">{t("voiceAuthor")}</cite>
            </blockquote>

            <p className="text-white/75 text-sm sm:text-base leading-relaxed">{t("voiceP1")}</p>
            <p className="text-white/75 text-sm sm:text-base leading-relaxed">{t("voiceP2")}</p>
            <p className="text-white font-medium text-sm sm:text-base leading-relaxed italic">{t("voiceP3")}</p>

            <div className="pt-2">
              <p className="text-orange-200 text-sm font-semibold mb-3">{t("voiceCTA")}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-lg text-sm">
                {t("voiceBtn")} →
              </Link>
            </div>
          </div>

          {/* Right: Decorative card */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-35 transition duration-700"></div>
            <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/80 backdrop-blur-xl rounded-3xl border border-white/15 p-8 sm:p-10">
              <div className="text-6xl mb-6 text-center">🎭</div>
              <p className="text-white/90 text-lg sm:text-xl leading-relaxed text-center font-light italic">
                "{t("connectionQuote")}"
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div className="text-center">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300 block">100%</span>
                  <p className="text-white/60 text-xs mt-1">{t("personalized")}</p>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-300 block">0</span>
                  <p className="text-white/60 text-xs mt-1">{t("stress")}</p>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400 block">24/7</span>
                  <p className="text-white/60 text-xs mt-1">{t("flexibility")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BLOCK 2: WHAT YOU'LL FIND WITH US ── */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {t("whatFindTitle")}
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {t("whatFindP")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {whatFindItems.map((item, i) => (
              <div key={i} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-purple-900/40 backdrop-blur-md rounded-2xl border border-white/10 p-5 h-full flex gap-3 items-start hover:bg-purple-800/40 transition-colors">
                  <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                  <p className="text-white/80 text-sm leading-relaxed">{t(item.key)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-white font-bold text-lg mb-4">{t("whatFindCTA")}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-lg">
              {t("whatFindBtn")} →
            </Link>
          </div>
        </div>

        {/* ── BLOCK 3: YOUR WAY OR NOTHING ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Decorative card */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-orange-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-35 transition duration-700"></div>
            <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/80 backdrop-blur-xl rounded-3xl border border-white/15 p-8 sm:p-10">
              <div className="space-y-4">
                {revItems.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/8 transition-colors">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <p className="text-white/80 text-sm leading-relaxed">{t(item.key)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="space-y-6 order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-orange-500/20 backdrop-blur-sm px-5 py-2 rounded-full border border-purple-500/30 text-purple-200 text-sm font-medium">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></span>
              {t("revBadge")}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-orange-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-300%">
                {t("revTitle")}
              </span>
            </h2>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed">{t("revP")}</p>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed italic border-l-2 border-purple-500 pl-4">{t("revSub")}</p>

            <div className="pt-2 flex flex-wrap gap-3">
              <p className="text-white font-semibold text-sm w-full">{t("revCTA")}</p>
              <a href="https://wa.me/447578146264" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-lg text-sm">
                {t("revBtn1")} →
              </a>
              <Link to="/test"
                className="inline-flex items-center gap-2 px-7 py-3 border border-purple-500/40 text-purple-300 hover:text-white hover:border-purple-400 rounded-full text-sm font-semibold transition-all">
                {t("revBtn2")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient { background-size: 300% 300%; animation: gradient 8s ease infinite; }
        .bg-300\\% { background-size: 300% 300%; }
      `}</style>
    </section>
  );
};

export default CommunitySection;
