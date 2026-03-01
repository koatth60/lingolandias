// components/Reviews.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const reviews = [
  {
    id: 1,
    name: "Rozalia P.",
    avatar: "R",
    color: "from-orange-500 to-purple-600",
    flag: "🇵🇱",
    rating: 5,
    date: "Hace 4 días",
    dateSort: 8,
    likes: 1,
    review: "Polecam Lingolandias! 🌟 Podoba mi się, że gramatyka jest wplatana naturalnie w rozmowy, bez sztywnego wkuwania. Nauczyciele są świetni i wyluzowani, a atmosfera sprawia, że coraz bardziej przełamuję strach przed mówieniem. To miejsce daje motywację i poczucie, że robi się postępy 💗"
  },
  {
    id: 2,
    name: "Maria B.",
    avatar: "M",
    color: "from-pink-500 to-purple-500",
    flag: "🇵🇱",
    rating: 5,
    date: "9 feb 2026",
    dateSort: 7,
    likes: 1,
    review: "Fantastyczna atmosfera, świetna komunikacja i organizacja, polecam w 100% 🩷"
  },
  {
    id: 3,
    name: "Julita K.",
    avatar: "J",
    color: "from-purple-500 to-blue-500",
    flag: "🇵🇱",
    rating: 5,
    date: "8 ene 2026",
    dateSort: 6,
    likes: 4,
    review: "Uczęszczam na zajęcia indywidualne z języka hiszpańskiego i jestem bardzo zadowolona z tej szkoły. Od samego początku wszystko przebiegało sprawnie i bez problemów. Podczas zapisu rozmawiałam z Anią, która jest bardzo miła, ciepła i pomocna. Lekcje mam z nauczycielem Christianem, który jest bardzo przyjazny, cierpliwy i wyrozumiały — nauka języka hiszpańskiego jest łatwa i przyjemna. Jestem bardzo wdzięczna, że trafiłam na tę szkołę. W 100% polecam! 🤩"
  },
  {
    id: 4,
    name: "Ella B.",
    avatar: "E",
    color: "from-rose-500 to-orange-400",
    flag: "🇵🇱",
    rating: 5,
    date: "18 dic 2025",
    dateSort: 5,
    likes: 2,
    review: "Rok temu szukałam nauczyciela języka polskiego i w ten sposób trafiłam na Lingolandias. Moja córka jest bardzo nieśmiała i nigdy nie wykazywała zainteresowania językiem polskim. Już na początku zostałyśmy otoczone ogromną troską. Lingolandias zesłało nam anioła — Panią Anetkę. Nigdy nie spotkałam osoby tak cierpliwej, ciepłej i pełnej serca. Dzięki niej córka otworzyła się, polubiła język polski i z radością czeka na kolejne lekcje. Z całego serca dziękujemy! ❤️"
  },
  {
    id: 5,
    name: "Katarzyna W.",
    avatar: "K",
    color: "from-violet-500 to-pink-500",
    flag: "🇵🇱",
    rating: 5,
    date: "8 jul 2025",
    dateSort: 4,
    likes: 2,
    review: "Z Lingolandias poczujesz się jak w domu 🏡 Lekcje z super nauczycielem, atmosfera super — przełamałam swój strach, już się nie boję że coś powiem nie tak. Rozmowa na luzie, bez żadnej spiny. W końcu rozjaśniła mi się gramatyka, która sprawiała mi tyle problemów. Polecam wszystkim z całego serca, ściskam cały team, jesteście super i pomagajcie, bo robicie to świetnie! 🩷🫶"
  },
  {
    id: 6,
    name: "Magdalena S.",
    avatar: "M",
    color: "from-blue-500 to-cyan-400",
    flag: "🇵🇱",
    rating: 5,
    date: "20 ene 2025",
    dateSort: 3,
    likes: 2,
    review: "Moje dziecko uczy się polskiego w Lingolandias od kilku miesięcy i jestem pod wrażeniem jego postępów. Początkowo miałam wątpliwości, czy nauka online sprawdzi się u tak małego dziecka, ale szybko zostały one rozwiane. Zajęcia z Panią Karoliną są interesujące, angażujące i dopasowane do potrzeb mojego dziecka. Kontakt ze szkołą jest zawsze sprawny i profesjonalny. Z całego serca polecam."
  },
  {
    id: 7,
    name: "Joanna K.",
    avatar: "J",
    color: "from-emerald-500 to-teal-400",
    flag: "🇵🇱",
    rating: 5,
    date: "6 sep 2024",
    dateSort: 2,
    likes: 3,
    review: "Bardzo polecam tą szkołę językową. Wszystko jest dostosowane indywidualnie pod ciebie. Zajęcia są prowadzone w mega fajnej atmosferze. Kontakt z właścicielką wspaniały. Polecam w 100% 🌟"
  },
  {
    id: 8,
    name: "Kasia T.",
    avatar: "K",
    color: "from-amber-500 to-orange-500",
    flag: "🇵🇱",
    rating: 5,
    date: "26 ago 2024",
    dateSort: 1,
    likes: 5,
    review: "Z całego serca polecam Lingolandias ❤️ Już od pierwszego kontaktu z Anią, która jest odpowiedzialna za sprawy administracyjne, wiedziałam że trafiłam w dobre ręce. Veronica — moja nauczycielka — to cudowna osoba. Z każdą lekcją czuję się pewniej. Godzina z Veroniką mija błyskawicznie i co najważniejsze w super atmosferze — bez stresu i blokady w mówieniu. Na każdą lekcję czekam z niecierpliwością! BARDZO POLECAM ❤️"
  }
];

const FACEBOOK_URL = "https://www.facebook.com/lingolandias";

const Reviews = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(4);

  const getFiltered = () => {
    let list = [...reviews];
    if (filter === 'recent') list.sort((a, b) => b.dateSort - a.dateSort);
    else if (filter === 'popular') list.sort((a, b) => b.likes - a.likes);
    return list;
  };

  const filtered = getFiltered();
  const visible = filtered.slice(0, visibleCount);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-purple-950/40 backdrop-blur-sm"></div>

      {/* Floating likes */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              animation: 'floatRandom 15s ease-in-out infinite',
            }}
          >
            {i % 3 === 0 ? '👍' : i % 3 === 1 ? '❤️' : '⭐'}
          </div>
        ))}
      </div>

      {/* Decorative rings */}
      <div className="absolute top-20 left-10 w-64 h-64 border border-orange-500/10 rounded-full pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 border border-purple-500/10 rounded-full pointer-events-none"></div>

      <div className="relative container mx-auto px-4 max-w-7xl">

        {/* ── HEADER ── */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1877F2]/20 backdrop-blur-sm px-5 py-2 rounded-full border border-[#1877F2]/30 mb-6">
            <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            <span className="text-white/90 text-sm font-medium">{t("realFBReviews")}</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t("whatTheySay")}
            <span className="relative ml-4">
              <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-orange-400 bg-clip-text text-transparent" style={{ backgroundSize: '300%', animation: 'gradient 8s ease infinite' }}>
                {t("ourStudents")}
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full"></span>
            </span>
          </h2>

          {/* Rating summary */}
          <div className="inline-flex items-center gap-8 bg-white/5 backdrop-blur-md px-8 py-5 rounded-2xl border border-white/10">
            <div className="text-left">
              <div className="text-4xl font-bold text-white">5.0</div>
              <div className="flex items-center gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-orange-400 text-xl">★</span>
                ))}
              </div>
              <div className="text-white/60 text-sm mt-1">{t("fbReviewCount")}</div>
            </div>
            <div className="w-px h-14 bg-white/20"></div>
            <div className="text-left space-y-1.5">
              {[5].map(stars => (
                <div key={stars} className="flex items-center gap-2">
                  <span className="text-white/50 text-xs w-2">5</span>
                  <div className="w-28 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-500 to-purple-600 rounded-full w-full"></div>
                  </div>
                  <span className="text-white/60 text-xs">100%</span>
                </div>
              ))}
              <p className="text-green-400 text-xs font-medium mt-1">✓ {t("recommendSchool")}</p>
            </div>
          </div>
        </div>

        {/* ── FILTERS ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { key: 'all', label: t("allReviews") },
            { key: 'recent', label: `🕐 ${t("mostRecent")}` },
            { key: 'popular', label: `❤️ ${t("mostLiked")}` },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => { setFilter(key); setVisibleCount(4); }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === key
                  ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* ── REVIEW CARDS GRID ── */}
        <p className="text-center text-white/40 text-sm mb-6">
          {t("showingReviews", { count: Math.min(visibleCount, filtered.length), total: 44 })} ·{" "}
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-[#1877F2] hover:underline">
            {t("viewAllFB")}
          </a>
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((review, index) => (
            <div
              key={review.id}
              className="group relative"
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.08}s both` }}
            >
              {/* Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${review.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-25 transition duration-500`}></div>

              <div className="relative bg-gradient-to-br from-purple-900/85 to-purple-800/85 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all shadow-xl h-full flex flex-col">

                {/* Top accent bar */}
                <div className={`h-0.5 bg-gradient-to-r ${review.color} absolute top-0 left-0 right-0 rounded-t-2xl`}></div>

                {/* Header */}
                <div className="flex items-start justify-between mb-4 mt-1">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0`}>
                      {review.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-white font-semibold">{review.name}</h3>
                        <span className="text-[#1877F2] text-xs bg-[#1877F2]/10 px-1.5 py-0.5 rounded-full border border-[#1877F2]/20 font-medium">
                          ✓ Facebook
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm mt-0.5">
                        <span className="text-white/40 text-xs">{review.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* FB icon */}
                  <svg className="w-5 h-5 fill-[#1877F2] flex-shrink-0 mt-1 opacity-70" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-orange-400 text-base">★</span>
                  ))}
                  <span className="text-white/40 text-xs ml-2">{t("recommends")}</span>
                </div>

                {/* Review text */}
                <div className="relative flex-1 mb-4">
                  <span className="absolute -top-1 -left-1 text-4xl text-orange-500/15 font-serif leading-none select-none">"</span>
                  <p className="text-white/85 leading-relaxed text-sm pl-3">
                    {review.review}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-auto">
                  <div className="flex items-center gap-1.5 text-white/50 text-sm">
                    <span className="text-base">👍</span>
                    <span>{review.likes} {review.likes === 1 ? t("reaction") : t("reactions")}</span>
                  </div>
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white/30 hover:text-[#1877F2] transition-colors"
                  >
                    {t("viewOnFB")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── LOAD MORE ── */}
        {visibleCount < filtered.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount(filtered.length)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold hover:bg-white/10 transition-all"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-25 transition duration-500"></div>
              <span className="relative">{t("seeMoreReviews")}</span>
              <span className="relative text-white/50">({filtered.length - visibleCount} / {filtered.length})</span>
            </button>
          </div>
        )}

        {/* ── FACEBOOK CTA ── */}
        <div className="mt-16 p-6 bg-[#1877F2]/5 backdrop-blur-md rounded-2xl border border-[#1877F2]/20">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold">Lingolandias en Facebook</h4>
                <p className="text-white/60 text-sm">⭐ 5.0 · {t("fbReviewCount")}</p>
              </div>
            </div>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#1877F2] hover:bg-[#1565C0] rounded-full text-white font-semibold transition-all flex items-center gap-2 shadow-lg hover:scale-105"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              {t("viewLingoPage")}
            </a>
          </div>
        </div>

        {/* ── STATS ── */}
        <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">5.0</div>
            <p className="text-white/60 text-xs mt-1">{t("fbRating")}</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">44</div>
            <p className="text-white/60 text-xs mt-1">{t("fbReviewsStat")}</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">100%</div>
            <p className="text-white/60 text-xs mt-1">{t("recommendStat")}</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes floatRandom {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(15px, -15px) rotate(5deg); }
          50% { transform: translate(-10px, 20px) rotate(-3deg); }
          75% { transform: translate(-20px, -8px) rotate(2deg); }
        }
      `}</style>
    </section>
  );
};

export default Reviews;
