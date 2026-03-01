import { Carousel, IconButton } from "@material-tailwind/react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { spanishTeachers } from "../Constants";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const teacherMeta = [
  {
    color: "from-orange-500 to-orange-400",
    icon: "🇨🇴",
    company: "Environmental Engineer · Language Teacher",
    specialties: ["Spanish Native", "5+ años", "Online & Presencial"],
    accent: "💃",
  },
  {
    color: "from-orange-400 to-yellow-500",
    icon: "🇨🇴",
    company: "Environmental Engineer · Language Teacher",
    specialties: ["Spanish Native", "6+ años", "Metodología activa"],
    accent: "🎸",
  },
];

export function CarouselCustomArrows() {
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

      <section className="relative min-h-screen overflow-hidden pt-32 pb-24">
        {/* Fondo */}
        <div className="absolute inset-0 bg-purple-950/40 backdrop-blur-sm" />

        {/* Decorative rings */}
        <div className="absolute top-10 left-1/4 w-[600px] h-[600px] border border-orange-500/10 rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] border border-orange-400/10 rounded-full pointer-events-none" />

        {/* Símbolos flotantes */}
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-40 left-20 text-8xl animate-float-slow">🇪🇸</div>
          <div className="absolute bottom-40 right-20 text-8xl animate-float-slow animation-delay-2000">🇨🇴</div>
          <div className="absolute top-2/3 left-1/3 text-6xl animate-float-slow animation-delay-4000">💃</div>
        </div>

        {/* Partículas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `floatUp ${12 + Math.random() * 10}s linear ${Math.random() * 8}s infinite`,
                opacity: Math.random() * 0.4,
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4 max-w-7xl">

          {/* ——— HEADER ——— */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-orange-400/20 backdrop-blur-sm px-6 py-2 rounded-full border border-orange-500/30 mb-8">
              <span className="text-xl">🇪🇸</span>
              <span className="text-white/90 text-sm font-semibold tracking-widest uppercase">{t("spaTeachersBadge")}</span>
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {t("spaTeachersH1Prefix")}{" "}
              <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
                {t("spaTeachersH1Span")}
              </span>
            </h1>

            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              {t("spaTeachersDesc")}
            </p>

            <div className="flex justify-center items-center gap-4 mt-10">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
              <span className="text-orange-400 animate-pulse">✦</span>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
            </div>
          </div>

          {/* ——— GRID DE TEACHERS ——— */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {spanishTeachers.map((teacher, index) => {
              const meta = teacherMeta[index] || teacherMeta[0];
              return (
                <div
                  key={index}
                  className="group relative animate-fadeIn"
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Glow layers */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${meta.color} rounded-3xl blur opacity-0 group-hover:opacity-50 transition duration-700`} />
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl blur opacity-0 group-hover:opacity-25 transition duration-700" />

                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl rounded-3xl border border-white/20 overflow-visible shadow-2xl h-full hover:scale-[1.02] transition-transform duration-500 flex flex-col">

                    {/* Top bar */}
                    <div className={`h-1.5 bg-gradient-to-r ${meta.color} rounded-t-3xl`} />

                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5 text-5xl flex flex-wrap justify-center items-start pt-12 overflow-hidden rounded-3xl pointer-events-none">
                      {"🇪🇸".repeat(40)}
                    </div>

                    <div className="relative p-8 flex flex-col flex-1 gap-5">

                      {/* Avatar row */}
                      <div className="flex items-start gap-5">
                        <div className="relative shrink-0">
                          <div className={`absolute inset-0 bg-gradient-to-r ${meta.color} rounded-full blur-xl opacity-40 group-hover:opacity-70 transition duration-700`} />
                          <div className={`relative p-[3px] bg-gradient-to-br ${meta.color} rounded-full`}>
                            <div className="p-[2px] bg-[#1a0b2e] rounded-full">
                              <img
                                src={teacher.photo}
                                alt={teacher.name}
                                className="w-20 h-20 rounded-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </div>
                          {/* Flag */}
                          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#1a0b2e] border-2 border-white/20 rounded-full flex items-center justify-center text-base shadow-xl">
                            {meta.icon}
                          </div>
                          {/* Online dot */}
                          <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-[#1a0b2e] rounded-full animate-pulse" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold text-white leading-tight group-hover:text-orange-200 transition-colors">
                            {teacher.name}
                          </h3>
                          <p className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${meta.color} mt-0.5`}>
                            Spanish Teacher
                          </p>
                          <p className="text-white/40 text-xs mt-1 leading-snug">{meta.company}</p>
                          {/* Stars */}
                          <div className="flex gap-0.5 mt-2">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-orange-400 text-sm">★</span>
                            ))}
                          </div>
                        </div>

                        {/* Icon badge */}
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${meta.color} flex items-center justify-center text-xl shadow-lg shrink-0`}>
                          {meta.accent}
                        </div>
                      </div>

                      {/* Bio */}
                      <div>
                        <div className={`text-white/65 text-sm leading-relaxed ${expanded[index] ? "" : "line-clamp-3"}`}>
                          {teacher.description[langIndex]}
                        </div>
                        <button
                          onClick={() => toggle(index)}
                          className="mt-2 text-orange-400 hover:text-orange-200 text-xs font-semibold flex items-center gap-1 transition-colors"
                        >
                          <span className={`transition-transform duration-300 inline-block ${expanded[index] ? "rotate-180" : ""}`}>▼</span>
                          <span>{expanded[index] ? t("seeLess") : t("readMore")}</span>
                        </button>
                      </div>

                      {/* Specialties */}
                      <div className="flex flex-wrap gap-2">
                        {meta.specialties.map((spec, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/10"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                      {/* CTA */}
                      <Link
                        to="/courses"
                        className={`relative group/btn overflow-hidden flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm shadow-lg`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${meta.color} transition-transform duration-500`} />
                        <div className={`absolute inset-0 bg-gradient-to-r ${meta.color} opacity-0 group-hover/btn:opacity-100 brightness-110 transition-opacity duration-500`} />
                        <span className="relative">{t("knowMore")}</span>
                        <span className="relative group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                      </Link>
                    </div>

                    {/* Hover badge */}
                    {hovered === index && (
                      <div className="absolute -top-3 -right-3 animate-bounce z-20">
                        <span className="px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full shadow-2xl border border-white/30 font-bold whitespace-nowrap flex items-center gap-1">
                          ✦ VER CLASE MUESTRA
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ——— BOTTOM CTA ——— */}
          <div className="mt-24 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-orange-400/10 rounded-3xl blur-3xl" />
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-10 py-8">
              <div className="flex items-center gap-4">
                <span className="text-5xl">💃</span>
                <div>
                  <h4 className="text-white font-bold text-xl">{t("readyToSpeakSpanish")}</h4>
                  <p className="text-white/60 text-sm">{t("discoverLevelFirst")}</p>
                </div>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link
                  to="/test"
                  className="px-7 py-3 border border-orange-500/40 text-orange-300 hover:text-white hover:border-orange-400 rounded-full text-sm font-semibold transition-all"
                >
                  {t("takeTheTest")}
                </Link>
                <Link
                  to="/courses"
                  className="px-7 py-3 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full text-white font-semibold text-sm hover:scale-105 transition-transform shadow-lg"
                >
                  {t("knowMore")} →
                </Link>
              </div>
            </div>
          </div>

          {/* Separador */}
          <div className="mt-20 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="px-6 py-2 bg-[#0D1B2E]/80 backdrop-blur-sm rounded-full text-white/40 text-xs border border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              🇪🇸 {spanishTeachers.length} SPANISH TEACHERS · LINGOLANDIAS
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>

        <style>{`
          @keyframes floatUp {
            0% { transform: translateY(80px); opacity: 0; }
            15% { opacity: 0.6; }
            85% { opacity: 0.6; }
            100% { transform: translateY(-100px); opacity: 0; }
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; opacity: 0; }
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
}
