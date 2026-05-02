import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

const expertise = [
  { icon: "🔤", colorFrom: "from-orange-500", colorTo: "to-orange-400", titleKey: "expertise1Title", pKey: "expertise1P" },
  { icon: "🌍", colorFrom: "from-purple-500", colorTo: "to-purple-400", titleKey: "expertise2Title", pKey: "expertise2P" },
  { icon: "🧠", colorFrom: "from-indigo-500", colorTo: "to-purple-500", titleKey: "expertise3Title", pKey: "expertise3P" },
  { icon: "🌱", colorFrom: "from-purple-600", colorTo: "to-pink-500", titleKey: "expertise4Title", pKey: "expertise4P" },
  { icon: "🗣️", colorFrom: "from-orange-400", colorTo: "to-amber-400", titleKey: "expertise5Title", pKey: "expertise5P" },
  { icon: "⚡", colorFrom: "from-violet-500", colorTo: "to-blue-500", titleKey: "expertise6Title", pKey: "expertise6P" },
];

const locations = [
  { flag: "🇪🇸", nameKey: "locSpain" },
  { flag: "🇬🇧", nameKey: "locUK" },
  { flag: "🇮🇹", nameKey: "locItaly" },
  { flag: "🇺🇸", nameKey: "locUSA" },
  { flag: "🇨🇴", nameKey: "locColombia" },
  { flag: "🇵🇱", nameKey: "locPoland" },
  { flag: "🇮🇩", nameKey: "locIndonesia" },
  { flag: "🇦🇺", nameKey: "locAustralia" },
];

const Team = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />

      <section className="relative min-h-screen overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-24">
        <div className="absolute inset-0 bg-purple-950/40" />

        {/* Decorative rings */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 border border-orange-500/30 rounded-full animate-ping-slow" />
          <div className="absolute bottom-20 right-10 w-80 h-80 border border-purple-500/30 rounded-full animate-ping-slow animation-delay-2000" />
        </div>

        {/* Floating flags bg */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute top-40 left-20 text-9xl animate-float-slow">🇬🇧</div>
          <div className="absolute bottom-40 right-20 text-9xl animate-float-slow animation-delay-2000">🇪🇸</div>
          <div className="absolute top-1/2 left-1/3 text-7xl animate-float-slow animation-delay-4000">🌍</div>
        </div>

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="absolute rounded-full bg-gradient-to-r from-orange-500 to-purple-600"
              style={{ width: `${1 + Math.random() * 3}px`, height: `${1 + Math.random() * 3}px`,
                top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
                animation: `floatUp ${12 + Math.random() * 10}s linear ${Math.random() * 8}s infinite`,
                opacity: Math.random() * 0.25 }} />
          ))}
        </div>

        <div className="relative container mx-auto px-4 max-w-7xl">

          {/* ── PAGE HEADER ── */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-purple-600/20 backdrop-blur-sm px-6 py-2 rounded-full border border-orange-500/30 mb-6">
              <span className="text-xl">👥</span>
              <span className="text-white/90 text-sm font-medium tracking-wider">{t("crew")}</span>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t("teacherTitle")}{" "}
              <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
                {t("teacherTitleSpan")}
              </span>
            </h1>
            <p className="text-white/70 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
              {t("teachersP1")}
            </p>
            <div className="flex justify-center items-center gap-4 mt-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
              <span className="text-orange-400 text-2xl animate-pulse">✦</span>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent" />
            </div>
          </div>

          {/* ── ABOUT US ── */}
          <div className="mb-20 grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-purple-600/20 backdrop-blur-sm px-5 py-2 rounded-full border border-orange-500/30 text-orange-200 text-sm font-medium">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                {t("aboutUsBadge")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                {t("genInfo")}{" "}
                <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
                  {t("genInfoSpan")}
                </span>
              </h2>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed">{t("genInfoPara1")}</p>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed">{t("genInfoPara2")}</p>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed">{t("genInfoPara3")}</p>
              <blockquote className="pl-4 border-l-2 border-orange-500">
                <p className="text-orange-200 text-sm sm:text-base italic leading-relaxed">{t("genInfoPara4")}</p>
              </blockquote>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-35 transition duration-700" />
              <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/80 backdrop-blur-xl rounded-3xl border border-white/15 p-7 sm:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center text-2xl shadow-xl">🎓</div>
                  <span className="text-orange-200 text-sm font-semibold tracking-wider uppercase">{t("ourTeamBadge")}</span>
                </div>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">{t("genInfoPara5")}</p>
                <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300 block">9+</span>
                    <p className="text-white/50 text-xs mt-1">{t("statTeachersLabel")}</p>
                  </div>
                  <div>
                    <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-300 block">5</span>
                    <p className="text-white/50 text-xs mt-1">{t("statLanguages")}</p>
                  </div>
                  <div>
                    <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400 block">5+</span>
                    <p className="text-white/50 text-xs mt-1">{t("statYears")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mb-20 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="text-orange-400 animate-pulse">✦</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          {/* ── EXPERTISE GRID ── */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                {t("expertiseTitle")}
              </h2>
              <p className="text-white/65 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                {t("expertiseSubtitle")}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {expertise.map((item, i) => (
                <div key={i} className="group relative animate-fadeIn" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.colorFrom} ${item.colorTo} rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-700`} />
                  <div className="relative bg-gradient-to-br from-purple-900/80 to-purple-800/70 backdrop-blur-xl rounded-2xl border border-white/15 p-6 h-full flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-500">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.colorFrom} ${item.colorTo} flex items-center justify-center text-2xl shadow-lg`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base sm:text-lg mb-2 group-hover:text-orange-200 transition-colors">
                        {t(item.titleKey)}
                      </h3>
                      <p className="text-white/65 text-sm leading-relaxed">{t(item.pKey)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mb-20 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="text-purple-400 animate-pulse">✦</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          {/* ── WE TEACH FROM EVERYWHERE ── */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                {t("worldTitle")}
              </h2>
              <p className="text-white/65 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                {t("worldSubtitle")}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {locations.map((loc, i) => (
                <div key={i} className="group relative animate-fadeIn" style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
                  <div className="relative bg-purple-900/40 backdrop-blur-md rounded-2xl border border-white/10 p-5 text-center hover:bg-purple-800/40 transition-colors hover:scale-105 transition-transform duration-300">
                    <span className="text-4xl block mb-3">{loc.flag}</span>
                    <p className="text-white/80 text-sm font-medium">{t(loc.nameKey)}</p>
                    <span className="mt-2 inline-block w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── QUOTE ── */}
          <div className="mb-20 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-purple-600/20 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-purple-900/60 to-purple-800/50 backdrop-blur-xl rounded-3xl border border-white/15 px-8 sm:px-16 py-12 text-center">
              <span className="text-5xl opacity-30 block mb-4">"</span>
              <p className="text-white text-lg sm:text-2xl md:text-3xl font-light italic leading-relaxed max-w-3xl mx-auto">
                {t("teamQuote")}
              </p>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-45 transition duration-700" />
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-br from-purple-900/90 to-purple-800/80 backdrop-blur-xl border border-white/20 rounded-3xl px-7 sm:px-12 py-8 sm:py-10">
              <div className="flex items-center gap-5">
                <span className="text-5xl">✨</span>
                <div>
                  <h4 className="text-white font-bold text-lg sm:text-2xl">{t("teamCTATitle")}</h4>
                  <p className="text-white/60 text-sm sm:text-base mt-1">{t("teamCTASub")}</p>
                </div>
              </div>
              <Link to="/contact"
                className="shrink-0 px-8 py-3.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-xl text-sm sm:text-base whitespace-nowrap">
                {t("teamCTABtn")}
              </Link>
            </div>
          </div>

          {/* Bottom separator */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-6 py-2 bg-purple-900/60 backdrop-blur-sm rounded-full text-white/40 text-xs border border-white/10 inline-flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                {t("teachingEverywhereStrip")}
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" />
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.7s ease-out forwards; opacity: 0; }
        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.08); opacity: 0.2; }
        }
        .animate-ping-slow { animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite; }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        @keyframes floatUp {
          0% { transform: translateY(60px); opacity: 0; }
          15% { opacity: 0.4; }
          85% { opacity: 0.4; }
          100% { transform: translateY(-80px); opacity: 0; }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient { background-size: 300% 300%; animation: gradient 8s ease infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
};

export default Team;
