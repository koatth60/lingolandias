import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

const accentColors = {
  english:    { pill: 'from-orange-500 to-orange-400', border: 'border-orange-500/40', badge: 'bg-orange-500/20 border-orange-500/30 text-orange-200', dot: 'bg-orange-500' },
  spanish:    { pill: 'from-red-500 to-orange-400',   border: 'border-red-500/40',    badge: 'bg-red-500/20 border-red-500/30 text-red-200',          dot: 'bg-red-500' },
  italian:    { pill: 'from-green-500 to-teal-400',   border: 'border-green-500/40',  badge: 'bg-green-500/20 border-green-500/30 text-green-200',     dot: 'bg-green-500' },
  polish:     { pill: 'from-red-600 to-pink-500',     border: 'border-red-600/40',    badge: 'bg-red-600/20 border-red-600/30 text-red-200',           dot: 'bg-red-600' },
  indonesian: { pill: 'from-yellow-500 to-red-500',   border: 'border-yellow-500/40', badge: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-200',  dot: 'bg-yellow-500' },
  workshops:  { pill: 'from-purple-500 to-indigo-500',border: 'border-purple-500/40', badge: 'bg-purple-500/20 border-purple-500/30 text-purple-200',  dot: 'bg-purple-500' },
};

function OfferItem({ name, desc }) {
  return (
    <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/8 transition-colors">
      <span className="text-orange-400 text-lg shrink-0 mt-0.5">✦</span>
      <div>
        <p className="text-white font-semibold text-sm sm:text-base">{name}</p>
        {desc && <p className="text-white/70 text-sm leading-relaxed mt-1">{desc}</p>}
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-orange-300 font-semibold text-sm uppercase tracking-wider mb-4">{children}</p>
  );
}

function CtaCard({ label, text, btn, color }) {
  return (
    <div className="relative group mt-10">
      <div className={`absolute -inset-1 bg-gradient-to-r ${color} rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-700`}></div>
      <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-white/20 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="flex-1">
          <p className="text-white font-bold text-base sm:text-lg">{label}</p>
          <p className="text-white/70 text-sm mt-2 leading-relaxed">{text}</p>
        </div>
        <a
          href="https://wa.me/447578146264"
          target="_blank"
          rel="noopener noreferrer"
          className={`shrink-0 px-7 py-3 bg-gradient-to-r ${color} rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-lg text-sm whitespace-nowrap`}
        >
          {btn}
        </a>
      </div>
    </div>
  );
}

/* ── ENGLISH ── */
function EnglishContent() {
  const { t } = useTranslation();
  const c = accentColors.english;
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{t("engCTitle")}</h2>
        <p className="text-white/80 text-sm sm:text-base leading-relaxed">{t("engCIntro")}</p>
      </div>
      <div>
        <SectionLabel>{t("engCOffer")}</SectionLabel>
        <div className="space-y-3">
          <OfferItem name={t("engCLesson")}    desc={t("engCLessonP")} />
          <OfferItem name={t("engCGroup")}     desc={t("engCGroupP")} />
          <OfferItem name={t("engCTea")}       desc={t("engCTeaP")} />
          <OfferItem name={t("engCCultural")}  desc={t("engCCulturalP")} />
          <OfferItem name={t("engCChallenge")} desc={t("engCChallengeP")} />
        </div>
      </div>
      <CtaCard label={t("engCCTA")} text={t("engCText")} btn={t("engCBtn")} color={c.pill} />
    </div>
  );
}

/* ── SPANISH ── */
function SpanishContent() {
  const { t } = useTranslation();
  const c = accentColors.spanish;
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{t("spaCTitle")}</h2>
        <p className="text-white/80 text-sm sm:text-base leading-relaxed">{t("spaCIntro")}</p>
      </div>
      <div>
        <SectionLabel>{t("spaCHow")}</SectionLabel>
        <p className="text-white/80 text-sm sm:text-base leading-relaxed">{t("spaCHowP")}</p>
      </div>
      <div>
        <SectionLabel>{t("spaCOffer")}</SectionLabel>
        <div className="space-y-3">
          <OfferItem name={t("spaCBenefit1")} />
          <OfferItem name={t("spaCBenefit2")} />
          <OfferItem name={t("spaCBenefit3")} />
          <OfferItem name={t("spaCBenefit4")} />
          <OfferItem name={t("spaCBenefit5")} />
        </div>
      </div>
      <div>
        <SectionLabel>{t("spaCWhy")}</SectionLabel>
        <div className="space-y-2 pl-4 border-l-2 border-red-500/40">
          {t("spaCWhyP").split(". ").filter(Boolean).map((s, i) => (
            <p key={i} className="text-white/80 text-sm leading-relaxed">{s}{s.endsWith(".") ? "" : "."}</p>
          ))}
        </div>
      </div>
      <div className="bg-white/5 rounded-2xl border border-white/10 p-5">
        <p className="text-white font-semibold mb-2">{t("spaCSolo")}</p>
        <p className="text-white/70 text-sm leading-relaxed">{t("spaCSoloP")}</p>
        <p className="text-white/70 text-sm leading-relaxed mt-3">{t("spaCExtra")}</p>
      </div>
      <CtaCard label={t("spaCCTA")} text={t("spaCText")} btn={t("spaCBtn")} color={c.pill} />
    </div>
  );
}

/* ── ITALIAN ── */
function ItalianContent() {
  const { t } = useTranslation();
  const c = accentColors.italian;
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{t("itaCTitle")}</h2>
        <p className="text-white/80 text-sm sm:text-base leading-relaxed">{t("itaCIntro")}</p>
      </div>
      <div>
        <SectionLabel>{t("itaCOffer")}</SectionLabel>
        <div className="space-y-3">
          <OfferItem name={t("itaCItem1")} />
          <OfferItem name={t("itaCItem2")} />
          <OfferItem name={t("itaCItem3")} />
          <OfferItem name={t("itaCItem4")} />
          <OfferItem name={t("itaCItem5")} />
          <OfferItem name={t("itaCItem6")} />
        </div>
      </div>
      <div>
        <SectionLabel>{t("itaCWhy")}</SectionLabel>
        <div className="space-y-2 pl-4 border-l-2 border-green-500/40">
          {t("itaCWhyP").split(". ").filter(Boolean).map((s, i) => (
            <p key={i} className="text-white/80 text-sm leading-relaxed">{s}{s.endsWith(".") ? "" : "."}</p>
          ))}
        </div>
      </div>
      <div className="bg-white/5 rounded-2xl border border-white/10 p-5">
        <p className="text-white font-semibold mb-2">{t("itaCSolo")}</p>
        <p className="text-white/70 text-sm leading-relaxed">{t("itaCSoloP")}</p>
        <p className="text-white/70 text-sm leading-relaxed mt-3">{t("itaCExtra")}</p>
      </div>
      <CtaCard label={t("itaCCTA")} text={t("itaCText")} btn={t("itaCBtn")} color={c.pill} />
    </div>
  );
}

/* ── POLISH ── */
function PolishContent() {
  const { t } = useTranslation();
  const c = accentColors.polish;
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{t("polCTitle")}</h2>
        <p className="text-white/80 text-sm sm:text-base leading-relaxed">{t("polCIntro")}</p>
      </div>
      <div>
        <SectionLabel>{t("polCOffer")}</SectionLabel>
        <div className="space-y-3">
          <OfferItem name={t("polCItem1")} />
          <OfferItem name={t("polCItem2")} />
          <OfferItem name={t("polCItem3")} />
          <OfferItem name={t("polCItem4")} />
          <OfferItem name={t("polCItem5")} />
        </div>
      </div>
      <div className="pl-4 border-l-2 border-red-600/40">
        {t("polCWhy").split(". ").filter(Boolean).map((s, i) => (
          <p key={i} className="text-white/80 text-sm leading-relaxed">{s}{s.endsWith(".") ? "" : "."}</p>
        ))}
      </div>
      <CtaCard label={t("polCCTA")} text={t("polCText")} btn={t("polCBtn")} color={c.pill} />
    </div>
  );
}

/* ── INDONESIAN ── */
function IndonesianContent() {
  const { t } = useTranslation();
  const c = accentColors.indonesian;
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{t("indCTitle")}</h2>
        <p className="text-white/80 text-sm sm:text-base leading-relaxed">{t("indCIntro")}</p>
      </div>
      <div>
        <SectionLabel>{t("indCOffer")}</SectionLabel>
        <div className="space-y-3">
          <OfferItem name={t("indCItem1")} />
          <OfferItem name={t("indCItem2")} />
          <OfferItem name={t("indCItem3")} />
          <OfferItem name={t("indCItem4")} />
        </div>
      </div>
      <div className="pl-4 border-l-2 border-yellow-500/40">
        <p className="text-white/80 text-sm leading-relaxed">{t("indCItem5")}</p>
      </div>
      <CtaCard label={t("indCCTA")} text={t("indCText")} btn={t("indCBtn")} color={c.pill} />
    </div>
  );
}

/* ── WORKSHOPS ── */
function WorkshopsContent() {
  const { t } = useTranslation();
  const c = accentColors.workshops;
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{t("wshCTitle")}</h2>
        <p className="text-white/80 text-sm sm:text-base leading-relaxed">{t("wshCIntro")}</p>
      </div>
      <div>
        <SectionLabel>{t("wshCOffer")}</SectionLabel>
        <div className="space-y-3">
          <OfferItem name={t("wshCTheme1")} />
          <OfferItem name={t("wshCTheme2")} />
          <OfferItem name={t("wshCTheme3")} />
          <OfferItem name={t("wshCTheme4")} />
        </div>
      </div>
      <div>
        <SectionLabel>{t("wshCWhy")}</SectionLabel>
        <p className="text-white/80 text-sm sm:text-base leading-relaxed">{t("wshCWhyP")}</p>
      </div>
      <CtaCard label={t("wshCCTA")} text={t("wshCTADesc")} btn={t("wshCBtn")} color={c.pill} />
    </div>
  );
}

const validTabs = new Set(['english','spanish','italian','polish','indonesian','workshops']);

const Courses = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(() => {
    const lang = searchParams.get('lang');
    return validTabs.has(lang) ? lang : 'english';
  });
  const c = accentColors[activeTab];

  useEffect(() => {
    const lang = searchParams.get('lang');
    if (validTabs.has(lang)) setActiveTab(lang);
  }, [searchParams]);

  const tabs = [
    { id: 'english',    flag: '🇬🇧', labelKey: 'langEnglish' },
    { id: 'spanish',   flag: '🇪🇸', labelKey: 'langSpanish' },
    { id: 'italian',   flag: '🇮🇹', labelKey: 'langItalian' },
    { id: 'polish',    flag: '🇵🇱', labelKey: 'langPolish' },
    { id: 'indonesian',flag: '🇮🇩', labelKey: 'langIndonesian' },
    { id: 'workshops', flag: '🌱',  labelKey: 'langWorkshops' },
  ];

  const contentMap = {
    english:    <EnglishContent />,
    spanish:    <SpanishContent />,
    italian:    <ItalianContent />,
    polish:     <PolishContent />,
    indonesian: <IndonesianContent />,
    workshops:  <WorkshopsContent />,
  };

  const closingPills = [
    { icon: "🎓", key: "coursePill1" },
    { icon: "⭐", key: "coursePill2" },
    { icon: "🌍", key: "coursePill3" },
    { icon: "💬", key: "coursePill4" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-24">
      <Header />

      {/* Background */}
      <div className="absolute inset-0 bg-purple-950/40"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-orange-500/8 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 right-10 w-72 h-72 bg-purple-600/8 rounded-full blur-3xl pointer-events-none"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 max-w-6xl">

        {/* Page header */}
        <div className="text-center mb-12">
          <span className={`inline-flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-medium tracking-wider mb-6 ${c.badge}`}>
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${c.dot}`}></span>
            {t("ourOffer")}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              {t("courses")}
            </span>
          </h1>
          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <span className="text-orange-400 text-xl animate-pulse">✦</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-10 scrollbar-hide justify-start sm:justify-center">
          {tabs.map(tab => {
            const tc = accentColors[tab.id];
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 shrink-0 ${
                  isActive
                    ? `bg-gradient-to-r ${tc.pill} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-white/70 hover:text-white hover:bg-white/20'
                }`}
              >
                <span className="text-base">{tab.flag}</span>
                {t(tab.labelKey)}
              </button>
            );
          })}
        </div>

        {/* Content card */}
        <div className="relative group">
          <div className={`absolute -inset-1 bg-gradient-to-r ${c.pill} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-700`}></div>
          <div className={`relative bg-gradient-to-br from-purple-900/90 to-purple-800/80 backdrop-blur-xl rounded-3xl border ${c.border} p-6 sm:p-10 shadow-2xl`}>
            <div className={`h-1 bg-gradient-to-r ${c.pill} rounded-full mb-8 -mx-6 sm:-mx-10`}></div>
            {contentMap[activeTab]}
          </div>
        </div>

      </div>

      {/* ── CLOSING STRIP ── */}
      <div className="relative container mx-auto px-4 max-w-6xl mt-20 pb-20 text-center">
        <div className="flex items-center gap-4 justify-center mb-8">
          <div className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-transparent to-orange-500/40" />
          <span className="text-white/25 text-xs tracking-[0.3em] uppercase font-medium">Lingolandias Academy</span>
          <div className="flex-1 max-w-[120px] h-px bg-gradient-to-l from-transparent to-purple-500/40" />
        </div>
        <p className="text-white/30 text-sm italic max-w-sm mx-auto leading-relaxed">
          "{t("courseClosingQuote")}"
          <span className="block text-white/20 not-italic mt-1">— Ludwig Wittgenstein</span>
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {closingPills.map(({ icon, key }) => (
            <span key={key} className="flex items-center gap-2 text-white/35 text-xs px-4 py-2 border border-white/10 rounded-full">
              <span>{icon}</span>{t(key)}
            </span>
          ))}
        </div>
      </div>

      <Footer />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes float {
          0%, 100% { transform: translateY(0); opacity: 0.2; }
          50% { transform: translateY(-20px); opacity: 0.5; }
        }
      `}</style>
    </section>
  );
};

export default Courses;
