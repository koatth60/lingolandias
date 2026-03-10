import { useEffect, useState } from "react";
import { englishTeachers } from "../Constants";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const teacherMeta = [
  {
    color: "from-purple-500 to-blue-400",
    country: "🇵🇱",
    company: "Language Enthusiast · Teacher & Learner",
    specialties: ["Pronunciation", "Conversation", "Stress-free"],
    accent: "🎙️",
  },
  {
    color: "from-blue-500 to-indigo-400",
    country: "🇵🇱",
    company: "Language Educator · Motivational Teacher",
    specialties: ["Speaking", "Grammar", "Fun Classes"],
    accent: "🌟",
  },
  {
    color: "from-indigo-500 to-purple-500",
    country: "🇺🇸",
    company: "Psychology Student · Native English Speaker",
    specialties: ["Native Speaker", "Conversation", "Everyday English"],
    accent: "💬",
  },
  {
    color: "from-purple-600 to-pink-500",
    country: "🇬🇧",
    company: "Based in UK · 4 Years Experience",
    specialties: ["British English", "Tailored Classes", "Friendly Approach"],
    accent: "✈️",
  },
  {
    color: "from-pink-500 to-purple-500",
    country: "🇺🇸",
    company: "Linguist · Traveler · Based in Kentucky USA",
    specialties: ["Holistic Approach", "American English", "Flexible Style"],
    accent: "🍫",
  },
  {
    color: "from-violet-500 to-blue-500",
    country: "🇬🇧",
    company: "Actress & Teacher · Trained in England",
    specialties: ["Native English", "Natural Speech", "Real-life Language"],
    accent: "🎭",
  },
];

const EnglishTeachers = () => {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState({});
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) i18n.changeLanguage(storedLanguage);
  }, [i18n]);

  const langIndex = i18n.language === "es" ? 1 : i18n.language === "pl" ? 2 : 0;
  const toggle = (i) => setExpanded((p) => ({ ...p, [i]: !p[i] }));

  return (
    <div>
      <Header />

      <section className="relative min-h-screen overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-24">
        {/* Fondo */}
        <div className="absolute inset-0 bg-purple-950/40 backdrop-blur-sm" />

        {/* Decorative rings */}
        <div className="absolute top-10 left-1/4 w-[700px] h-[700px] border border-purple-500/10 rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] border border-blue-500/10 rounded-full pointer-events-none" />

        {/* Floating symbols */}
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-40 left-20 text-8xl animate-float-slow">🇬🇧</div>
          <div className="absolute bottom-40 right-20 text-8xl animate-float-slow animation-delay-2000">🇺🇸</div>
          <div className="absolute top-2/3 left-1/3 text-6xl animate-float-slow animation-delay-4000">🎸</div>
        </div>

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
              style={{
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `floatUp ${12 + Math.random() * 10}s linear ${Math.random() * 8}s infinite`,
                opacity: Math.random() * 0.3,
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4 max-w-7xl">

          {/* HEADER */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm px-6 py-2 rounded-full border border-purple-500/30 mb-8">
              <span className="text-xl">🇬🇧</span>
              <span className="text-white/90 text-sm font-semibold tracking-widest uppercase">{t("engTeachersBadge")}</span>
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t("EngTeachersTitle")}{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                {t("EngTeachersTitleSpan")}
              </span>
            </h1>

            <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {t("EngTeachersP1")}
            </p>

            <div className="flex justify-center items-center gap-4 mt-10">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
              <span className="text-purple-400 animate-pulse">✦</span>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {englishTeachers.map((teacher, index) => {
              const meta = teacherMeta[index] || teacherMeta[0];
              return (
                <div
                  key={index}
                  className="group relative animate-fadeIn"
                  style={{ animationDelay: `${index * 0.12}s` }}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Glow */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${meta.color} rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-700`} />
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-700" />

                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl rounded-2xl border border-white/20 overflow-visible shadow-2xl h-full hover:scale-[1.02] transition-transform duration-500 flex flex-col">

                    {/* Top bar */}
                    <div className={`h-1.5 bg-gradient-to-r ${meta.color} rounded-t-2xl`} />

                    {/* BG flag pattern */}
                    <div className="absolute inset-0 opacity-5 text-4xl flex flex-wrap justify-center items-start pt-8 overflow-hidden rounded-2xl pointer-events-none">
                      {"🇬🇧".repeat(50)}
                    </div>

                    <div className="relative p-6 flex flex-col flex-1 gap-4">

                      {/* Avatar row — Collaboration style */}
                      <div className="flex items-start gap-4">
                        <div className="relative shrink-0">
                          <div className={`absolute inset-0 bg-gradient-to-r ${meta.color} rounded-full blur-xl opacity-40 group-hover:opacity-70 transition duration-700`} />
                          <img
                            src={teacher.photo}
                            alt={teacher.name}
                            className="relative w-16 h-16 object-cover rounded-full border-2 border-white/30 shadow-xl group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-900 border-2 border-white/20 rounded-full flex items-center justify-center text-sm shadow-lg">
                            {meta.country}
                          </div>
                          <div className="absolute -top-0.5 -left-0.5 w-3 h-3 bg-green-400 border-2 border-[#1a0b2e] rounded-full animate-pulse" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-bold text-lg leading-tight group-hover:text-purple-200 transition-colors">
                            {teacher.name}
                          </h3>
                          <p className={`text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r ${meta.color}`}>
                            English Teacher
                          </p>
                          <p className="text-white/40 text-[11px] mt-0.5 leading-tight">{meta.company}</p>
                        </div>

                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${meta.color} flex items-center justify-center text-lg shadow-lg shrink-0`}>
                          {meta.accent}
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-orange-400">★</span>
                        ))}
                      </div>

                      {/* Bio */}
                      <div>
                        <p className={`text-white/65 text-xs leading-relaxed ${expanded[index] ? "" : "line-clamp-3"}`}>
                          {teacher.description[langIndex]}
                        </p>
                        <button
                          onClick={() => toggle(index)}
                          className="mt-1.5 text-purple-400 hover:text-purple-200 text-[11px] font-semibold flex items-center gap-1 transition-colors"
                        >
                          <span className={`inline-block transition-transform duration-300 ${expanded[index] ? "rotate-180" : ""}`}>▼</span>
                          <span>{expanded[index] ? t("seeLess") : t("readMore")}</span>
                        </button>
                      </div>

                      {/* Specialties */}
                      <div className="flex flex-wrap gap-1.5">
                        {meta.specialties.map((spec, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 bg-white/10 backdrop-blur-sm rounded-full text-[11px] text-white/80 border border-white/10"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-auto" />

                      {/* CTA row */}
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-white/30 text-[11px] flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${meta.color} animate-pulse`} />
                          Online · {t("available")}
                        </span>
                        <Link
                          to="/courses"
                          className="relative group/btn overflow-hidden flex items-center gap-1.5 px-4 py-2 rounded-lg text-white font-semibold text-xs shadow-lg"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-r ${meta.color}`} />
                          <div className={`absolute inset-0 bg-gradient-to-r ${meta.color} brightness-110 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`} />
                          <span className="relative">{t("learnMore")}</span>
                          <span className="relative group-hover/btn:translate-x-0.5 transition-transform">→</span>
                        </Link>
                      </div>
                    </div>

                    {/* Hover badge */}
                    {hovered === index && (
                      <div className="absolute -top-2 -right-2 animate-bounce z-20">
                        <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-[10px] rounded-full shadow-2xl border border-white/30 font-bold whitespace-nowrap flex items-center gap-1">
                          {meta.accent} Book Now
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* BOTTOM CTA */}
          <div className="mt-24 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-3xl blur-3xl" />
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-5 sm:px-10 py-6 sm:py-8">
              <div className="flex items-center gap-4">
                <span className="text-5xl">🎸</span>
                <div>
                  <h4 className="text-white font-bold text-base sm:text-xl">{t("readyToStart")}</h4>
                  <p className="text-white/60 text-sm">{t("EngTeachersP2") || "Start your English journey today."}</p>
                </div>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link to="/test" className="px-7 py-3 border border-purple-500/40 text-purple-300 hover:text-white hover:border-purple-400 rounded-full text-sm font-semibold transition-all">
                  {t("takeTheTest")}
                </Link>
                <Link to="/courses" className="px-7 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-semibold text-sm hover:scale-105 transition-transform shadow-lg">
                  {t("learnMore")} →
                </Link>
              </div>
            </div>
          </div>

          {/* Separador */}
          <div className="mt-20 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="px-6 py-2 bg-[#0D1B2E]/80 backdrop-blur-sm rounded-full text-white/40 text-xs border border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" />
              🇬🇧 {englishTeachers.length} ENGLISH TEACHERS · LINGOLANDIAS
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>

        <style>{`
          @keyframes floatUp {
            0% { transform: translateY(80px); opacity: 0; }
            15% { opacity: 0.5; }
            85% { opacity: 0.5; }
            100% { transform: translateY(-100px); opacity: 0; }
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(28px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 0.7s ease-out forwards; opacity: 0; }
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient { background-size: 200% 200%; animation: gradient 6s ease infinite; }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `}</style>
      </section>

      <Footer />
    </div>
  );
};

export default EnglishTeachers;
