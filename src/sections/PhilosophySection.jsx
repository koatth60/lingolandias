import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const PhilosophySection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-purple-950/30"></div>

      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* LEFT — "Learn at your own pace" */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
            <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/80 backdrop-blur-xl rounded-3xl border border-white/15 p-7 sm:p-10 h-full flex flex-col gap-6">
              {/* Icon badge */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-400 flex items-center justify-center text-3xl shadow-xl">
                  🌱
                </div>
                <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-200 text-xs font-medium tracking-wider uppercase">
                  {t("ourPhilosophy")}
                </span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {t("philoTitle")}
                  <br />
                  <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
                    {t("philoTitleLine2")}
                  </span>
                </h2>
              </div>

              <div className="space-y-4 flex-1">
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">{t("philoP1")}</p>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">{t("philoP2")}</p>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">{t("philoP3")}</p>
                <p className="text-white font-medium text-sm sm:text-base leading-relaxed italic border-l-2 border-orange-500 pl-4">
                  {t("philoP4")}
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-white/10">
                <p className="text-orange-200 text-sm font-semibold mb-3">{t("philoCTA")}</p>
                <Link to="/courses" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-lg text-sm">
                  {t("philoBtn")} →
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT — "Language changes. You change." */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
            <div className="relative bg-gradient-to-br from-purple-900/90 to-indigo-900/80 backdrop-blur-xl rounded-3xl border border-white/15 p-7 sm:p-10 h-full flex flex-col gap-6">
              {/* Icon badge */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-400 flex items-center justify-center text-3xl shadow-xl">
                  ⚡
                </div>
                <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-200 text-xs font-medium tracking-wider uppercase">
                  {t("modernLearning")}
                </span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {t("langChangesTitle")}
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    {t("langChangesTitleSpan")}
                  </span>
                </h2>
              </div>

              <div className="space-y-4 flex-1">
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">{t("langChangesP1")}</p>

                {/* Before / After comparison */}
                <div className="grid grid-cols-2 gap-3 my-2">
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <span className="text-white/40 text-xs uppercase tracking-wider block mb-2">{t("yearsAgoLabel")}</span>
                    <p className="text-white/60 text-xs leading-relaxed">{t("yearsAgoText")}</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500/10 to-purple-600/10 rounded-2xl p-4 border border-orange-500/20">
                    <span className="text-orange-300 text-xs uppercase tracking-wider block mb-2">{t("todayLabel")}</span>
                    <p className="text-white/80 text-xs leading-relaxed">{t("todayText")}</p>
                  </div>
                </div>

                <p className="text-white/80 text-sm sm:text-base leading-relaxed">{t("langChangesP3")}</p>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">{t("langChangesP4")}</p>
                <p className="text-white font-medium text-sm sm:text-base leading-relaxed italic border-l-2 border-purple-500 pl-4">
                  {t("langChangesP5")}
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-white/10">
                <p className="text-purple-200 text-sm font-semibold mb-3">{t("langChangesCTA")}</p>
                <a href="https://wa.me/447578146264" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-lg text-sm">
                  {t("langChangesBtn")} →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
