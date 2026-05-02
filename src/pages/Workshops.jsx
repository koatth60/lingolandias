import { useTranslation } from 'react-i18next';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

const Workshops = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen pt-24 sm:pt-32 pb-20">
      <Header />

      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-700/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative container mx-auto px-4 max-w-6xl">

        {/* ── EDITORIAL TITLE ── */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-gradient-to-r from-purple-500 to-indigo-500" />
            <span className="text-purple-300/60 text-xs tracking-[0.3em] uppercase font-medium">{t("selfDevelopment")}</span>
            <span className="w-8 h-px bg-gradient-to-r from-indigo-500 to-purple-500" />
          </div>

          <h1 className="text-[clamp(3rem,9vw,7.5rem)] font-black leading-[0.95] tracking-tight">
            <span className="text-white/30 block pb-[0.12em]">{t("wshHeroLine1")}</span>
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent block pb-[0.15em]">
              {t("wshHeroLine2")}
            </span>
          </h1>

          <p className="text-white/50 text-base sm:text-lg max-w-lg mt-6 leading-relaxed">
            {t("wshHeroSub")}{' '}
            <span className="text-white/80 font-medium">{t("wshHeroSubSpan")}</span>.
          </p>
        </div>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Tile 1 — Intro quote (wide) */}
          <div className="sm:col-span-2 bg-gradient-to-br from-purple-900/60 to-indigo-900/40 backdrop-blur-md rounded-3xl border border-white/10 p-8">
            <p className="text-white text-xl sm:text-2xl leading-relaxed font-light">
              "{t("wshTileQuote")}"
            </p>
            <p className="text-purple-300/80 text-base mt-5 leading-relaxed">
              {t("wshTileQuoteP")}
            </p>
          </div>

          {/* Tile 2 — Group size stat */}
          <div className="bg-gradient-to-br from-purple-800/50 to-indigo-800/30 backdrop-blur-md rounded-3xl border border-purple-500/20 p-8 flex flex-col justify-between min-h-[180px]">
            <p className="text-white/40 text-xs uppercase tracking-widest">{t("wshMaxGroup")}</p>
            <div>
              <p className="text-8xl font-black text-white leading-none">10</p>
              <p className="text-purple-300 text-sm mt-3 leading-relaxed">
                {t("wshMaxGroupDesc")}
              </p>
            </div>
          </div>

          {/* Tile 3 — Monthly themes */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-7 hover:bg-white/[0.07] transition-colors">
            <div className="w-11 h-11 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-5 text-xl">
              🗓
            </div>
            <p className="text-white font-bold text-lg mb-2">{t("wshMonthlyTheme")}</p>
            <p className="text-white/55 text-sm leading-relaxed">
              {t("wshMonthlyThemeDesc")}
            </p>
          </div>

          {/* Tile 4 — Easy contact */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-7 hover:bg-white/[0.07] transition-colors">
            <div className="w-11 h-11 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-5 text-xl">
              💬
            </div>
            <p className="text-white font-bold text-lg mb-2">{t("wshEasyJoin")}</p>
            <p className="text-white/55 text-sm leading-relaxed">
              {t("wshEasyJoinDesc")}
            </p>
          </div>

          {/* Tile 5 — Instagram */}
          <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-md rounded-3xl border border-pink-500/20 p-7 hover:border-pink-500/40 transition-colors">
            <div className="w-11 h-11 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-5 text-xl">
              📸
            </div>
            <p className="text-white font-bold text-lg mb-2">{t("wshStayLoop")}</p>
            <p className="text-white/55 text-sm leading-relaxed">
              {t("wshStayLoopDesc")}
            </p>
          </div>

          {/* Tile 6 — Why it's worth it (full width) */}
          <div className="sm:col-span-2 lg:col-span-3 bg-gradient-to-r from-purple-900/50 via-indigo-900/40 to-purple-900/50 backdrop-blur-md rounded-3xl border border-purple-500/20 p-8">
            <p className="text-purple-300 text-xs uppercase tracking-widest font-semibold mb-5">{t("wshWhyTitle")}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                {t("wshWhyCol1")}
              </p>
              <p className="text-white/60 text-base leading-relaxed">
                {t("wshWhyCol2")}
              </p>
            </div>
          </div>

          {/* Tile 7 — CTA (full width) */}
          <div className="sm:col-span-2 lg:col-span-3 relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,255,255,0.08)_0%,transparent_60%)]" />
            <div className="relative p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <p className="text-white font-black text-xl sm:text-2xl leading-tight">
                  {t("wshCCTA")}
                </p>
                <p className="text-white/75 text-sm sm:text-base mt-2 leading-relaxed">
                  {t("wshCTADesc")}
                </p>
              </div>
              <a
                href="https://wa.me/447578146264"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-8 py-3.5 bg-white rounded-full text-purple-700 font-bold hover:scale-105 transition-transform shadow-2xl text-sm whitespace-nowrap"
              >
                {t("wshCBtn")}
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── CLOSING STRIP ── */}
      <div className="relative container mx-auto px-4 max-w-6xl mt-20 pb-20 text-center">
        <div className="flex items-center gap-4 justify-center mb-8">
          <div className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-transparent to-purple-500/40" />
          <span className="text-white/25 text-xs tracking-[0.3em] uppercase font-medium">{t("selfDevelopment")}</span>
          <div className="flex-1 max-w-[120px] h-px bg-gradient-to-l from-transparent to-indigo-500/40" />
        </div>
        <p className="text-white/30 text-sm italic max-w-sm mx-auto leading-relaxed">
          "{t("wshClosingQuote")}"
          <span className="block text-white/20 not-italic mt-1">— James Cash Penney</span>
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {[
            { icon: "👥", key: "wshPill1" },
            { icon: "🗓", key: "wshPill2" },
            { icon: "📸", key: "wshPill3" },
            { icon: "💬", key: "wshPill4" },
          ].map(({ icon, key }) => (
            <span key={key} className="flex items-center gap-2 text-white/35 text-xs px-4 py-2 border border-white/10 rounded-full">
              <span>{icon}</span>{t(key)}
            </span>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Workshops;
