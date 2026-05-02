import { Link } from "react-router-dom";
import QuoteAndInfo from "../components/QuoteAndInfo";
import Levels from "../components/Levels";
import { heroGif } from "../assets/export";
import { useTranslation } from "react-i18next";

const floatingWords = [
  { word: "Hola",    top: "8%",  left: "3%",  size: "text-5xl sm:text-7xl", delay: "0s",    dur: "14s" },
  { word: "Ciao",    top: "12%", left: "72%", size: "text-4xl sm:text-6xl", delay: "2s",    dur: "18s" },
  { word: "Hello",   top: "60%", left: "80%", size: "text-5xl sm:text-7xl", delay: "1s",    dur: "16s" },
  { word: "Cześć",   top: "72%", left: "2%",  size: "text-3xl sm:text-5xl", delay: "3.5s",  dur: "20s" },
  { word: "Bonjour", top: "35%", left: "85%", size: "text-3xl sm:text-4xl", delay: "0.5s",  dur: "22s" },
  { word: "Hei",     top: "82%", left: "55%", size: "text-4xl sm:text-5xl", delay: "2.5s",  dur: "15s" },
  { word: "Olá",     top: "20%", left: "40%", size: "text-3xl sm:text-4xl", delay: "4s",    dur: "19s" },
  { word: "Merhaba", top: "50%", left: "0%",  size: "text-2xl sm:text-3xl", delay: "1.5s",  dur: "17s" },
];

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col">

      {/* ── AMBIENT WORD TEXTURE ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {floatingWords.map(({ word, top, left, size, delay, dur }) => (
          <span
            key={word}
            className={`absolute font-black tracking-tight text-white/[0.04] ${size}`}
            style={{ top, left, animation: `heroFloat ${dur} ease-in-out infinite`, animationDelay: delay }}
          >
            {word}
          </span>
        ))}
      </div>

      {/* ── AMBIENT GLOWS ── */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />

      {/* ── MAIN CONTENT ── */}
      <div className="relative flex-1 flex flex-col justify-center pt-32 pb-24 px-4 sm:px-8 container mx-auto max-w-7xl">

        {/* Top label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-gradient-to-r from-orange-500 to-purple-500"></span>
          <span className="text-white/50 text-xs tracking-[0.3em] uppercase font-medium">Lingolandias Academy</span>
          <span className="w-8 h-px bg-gradient-to-r from-purple-500 to-orange-500"></span>
        </div>

        {/* ── EDITORIAL HEADLINE ── */}
        <div className="space-y-1 mb-10">
          {/* Line 1 — dimmed white so it reads but feels "behind" */}
          <h1 className="text-[clamp(2.8rem,8vw,7rem)] font-black leading-[0.95] tracking-tight text-white/40">
            {t("heroLine1") || "Speak from the heart."}
          </h1>

          {/* Line 2 — gradient fill */}
          <h1 className="text-[clamp(2.8rem,8vw,7rem)] font-black leading-[0.95] tracking-tight bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            {t("heroLine2") || "Live authentically."}
          </h1>

          {/* Line 3 — solid white */}
          <h1 className="text-[clamp(2.8rem,8vw,7rem)] font-black leading-[0.95] tracking-tight text-white">
            {t("heroLine3") || "Create your reality."}
          </h1>
        </div>

        {/* ── LOWER ROW: description + photo card + cta ── */}
        <div className="grid lg:grid-cols-[1fr_auto_auto] gap-8 lg:gap-12 items-end">

          {/* Description block */}
          <div className="space-y-6 max-w-xl">
            <p className="text-white/60 text-base sm:text-lg leading-relaxed">
              {t("hero2") || "Discover how the freedom to express yourself can change your life. We teach languages with care for your emotions, body, and mind, so you can"}{" "}
              <span className="text-white font-semibold">
                {t("hero2Span") || "speak your truth with confidence."}
              </span>
            </p>
            <p className="text-orange-300/80 text-base font-medium italic">
              {t("hero3") || "Your voice matters. Let's bring it to life."}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="https://wa.me/447578146264"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group px-7 py-3.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full text-white font-bold hover:scale-105 transition-transform shadow-xl shadow-orange-500/20 overflow-hidden text-sm sm:text-base"
              >
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
                <span className="relative">{t("startNow") || "Start Learning With Us"}</span>
              </a>
              <Link
                to="/courses"
                className="px-7 py-3.5 border border-white/20 rounded-full text-white/80 hover:text-white hover:border-white/40 font-semibold transition-all text-sm sm:text-base backdrop-blur-sm"
              >
                {t("learnMore") || "Learn more"}
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-4 text-white/40 text-xs pt-1">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>{t("heroActiveStudents")}</span>
              <span>·</span>
              <span className="flex items-center gap-1.5"><span className="text-orange-400">✓</span> {t("heroOnline")}</span>
              <span>·</span>
              <span className="flex items-center gap-1.5"><span className="text-purple-400">✓</span> {t("heroLiveClasses") || "Live classes"}</span>
            </div>
          </div>

          {/* ── FOUNDER CARD — floating inset ── */}
          <div className="hidden lg:flex flex-col items-center gap-4 relative">
            {/* Decorative lines */}
            <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            {/* Photo */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-orange-500 to-purple-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-700" />
              <img
                src={heroGif}
                alt="Agata Kozłowska – Director & Founder, Lingolandias"
                className="relative w-48 h-56 object-cover rounded-2xl border border-white/20 shadow-2xl"
                width="192"
                height="224"
              />
              {/* Name badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0B1E33]/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 shadow-xl">
                <p className="text-white text-xs font-semibold">Agata Kozłowska</p>
                <p className="text-white/50 text-[10px] text-center">{t("director") || "Director & Founder"}</p>
              </div>
            </div>

            {/* Exp badge */}
            <div className="mt-6 px-4 py-1.5 bg-gradient-to-r from-orange-500/20 to-purple-600/20 border border-orange-500/30 rounded-full text-orange-200 text-xs font-semibold">
              ⭐ {t("heroYearsExp") || "5+ years"}
            </div>
          </div>

          {/* ── VERTICAL STAT STRIP ── */}
          <div className="hidden xl:flex flex-col gap-6 pl-8 border-l border-white/10">
            {[
              { num: "300+", label: t("statStudents") },
              { num: "5+",   label: t("statYears") },
              { num: "6",    label: t("statLanguages") },
            ].map(({ num, label }) => (
              <div key={label} className="text-right">
                <p className="text-3xl font-black text-white leading-none">{num}</p>
                <p className="text-white/40 text-xs uppercase tracking-widest mt-0.5">{label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── MOBILE PHOTO (shown below content on small screens) ── */}
      <div className="lg:hidden flex justify-center pb-8 px-4">
        <div className="relative w-40 shrink-0">
          <div className="absolute -inset-2 bg-gradient-to-br from-orange-500 to-purple-600 rounded-2xl blur-lg opacity-40" />
          <img
            src={heroGif}
            alt="Agata Kozłowska"
            className="relative w-full aspect-[4/5] object-cover rounded-2xl border border-white/20 shadow-2xl"
          />
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0B1E33]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
            <p className="text-white text-[11px] font-semibold text-center">Agata Kozłowska</p>
          </div>
        </div>
      </div>

      {/* ── QUOTE & LEVELS (unchanged) ── */}
      <div className="relative px-4 container mx-auto">
        <QuoteAndInfo />
        <Levels />
      </div>

      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50%       { transform: translateY(-18px) rotate(2deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(1.05); }
        }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
