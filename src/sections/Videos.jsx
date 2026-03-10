// components/Videos.jsx
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const videos = [
  {
    id: 1,
    url: "https://lingolandias-academy.s3.eu-north-1.amazonaws.com/general-videos/lingolandias-video1.mp4",
    name: "Magda",
    roleKey: "videoRole1",
    commentKey: "videoComment1",
    avatar: "M",
    color: "from-orange-500 to-purple-600",
  },
  {
    id: 2,
    url: "https://lingolandias-academy.s3.eu-north-1.amazonaws.com/general-videos/lingolandias-video2.mp4",
    name: "Marta",
    roleKey: "videoRole2",
    commentKey: "videoComment2",
    avatar: "M",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    url: "https://lingolandias-academy.s3.eu-north-1.amazonaws.com/general-videos/lingolandias-video3.mp4",
    nameKey: "videoName3",
    roleKey: "videoRole3",
    commentKey: "videoComment3",
    avatar: "C",
    color: "from-orange-400 to-purple-500",
  }
];

const Videos = () => {
  const { t } = useTranslation();
  const [activeVideo, setActiveVideo] = useState(0);

  return (
    <section className="relative pt-14 pb-24 overflow-hidden">
      {/* Fondo consistente */}
      <div className="absolute inset-0 bg-purple-950/40 backdrop-blur-sm"></div>

      {/* Luces de escenario */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-orange-500/0 via-orange-500/50 to-purple-600/0 animate-pulse-slow"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-orange-600/0 animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-orange-500/0 via-orange-500/50 to-purple-600/0 animate-pulse-slow animation-delay-2000"></div>
      </div>

      {/* Cámara decorativa */}
      <div className="absolute top-20 right-20 opacity-20 rotate-12">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <circle cx="12" cy="12" r="4" />
          <path d="M18 5L22 2M18 19L22 22M6 5L2 2M6 19L2 22" />
        </svg>
      </div>

      {/* Reflectores circulares */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-purple-600/0 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute inset-20 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-orange-500/0 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </div>

      {/* Estrellas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/20 text-xs animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out ${Math.random() * 3}s infinite`,
            }}
          >
            ⭐
          </div>
        ))}
      </div>

      <div className="relative container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-10 flex gap-2">
            <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-transparent rounded-t-full"></div>
            <div className="w-2 h-10 bg-gradient-to-b from-purple-600 to-transparent rounded-t-full"></div>
            <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-transparent rounded-t-full"></div>
          </div>

          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-orange-200 text-sm font-medium tracking-wider mb-6 relative">
            {t("videosBadge")}
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
            <span className="relative">
              {t("videosTitle1")}
              <span className="absolute -inset-2 bg-gradient-to-r from-orange-500/30 to-purple-600/30 blur-2xl"></span>
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-orange-400 bg-clip-text text-transparent bg-300% animate-gradient">
              {t("videosTitle2")}
            </span>
          </h2>

          <p className="text-white/70 text-base sm:text-xl max-w-2xl mx-auto">
            {t("videosSubtitle")}
          </p>

          {/* Dots de navegación */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveVideo(i)}
                aria-label={`Go to video ${i + 1}`}
                aria-current={activeVideo === i ? 'true' : undefined}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeVideo === i
                    ? 'w-8 bg-gradient-to-r from-orange-500 to-purple-600'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Columna izquierda - Video principal */}
          <div className="relative">
            <div className="lg:sticky lg:top-28">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition duration-700"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-orange-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-700"></div>

                <div className="relative bg-purple-900/80 backdrop-blur-xl rounded-3xl border-2 border-white/20 overflow-hidden shadow-2xl">
                  {/* Barra superior */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-purple-600 to-orange-500 z-10"></div>

                  {/* Video player — key forces remount on change */}
                  <div className="relative aspect-video bg-black">
                    <video
                      key={videos[activeVideo].id}
                      className="absolute inset-0 w-full h-full object-contain"
                      controls
                      preload="metadata"
                    >
                      <source src={videos[activeVideo].url} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-purple-900/30 via-transparent to-transparent"></div>
                  </div>

                  {/* Info del video */}
                  <div className="p-4 sm:p-6 bg-gradient-to-b from-purple-900/90 to-purple-950/90 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${videos[activeVideo].color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                        {videos[activeVideo].avatar}
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">{videos[activeVideo].name || t(videos[activeVideo].nameKey)}</h3>
                        <p className="text-white/60 text-sm">{t(videos[activeVideo].roleKey)}</p>
                      </div>
                    </div>

                    <div className="relative">
                      <span className="absolute -top-2 -left-2 text-4xl text-orange-500/30 font-serif">"</span>
                      <p className="text-white/90 text-base leading-relaxed pl-4 italic">
                        {t(videos[activeVideo].commentKey)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge inferior */}
              <div className="flex justify-center mt-4">
                <span className="px-4 py-2 bg-purple-900/60 backdrop-blur-sm rounded-full text-white/60 text-xs border border-white/20 inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  {t("videosVerified")}
                </span>
              </div>
            </div>
          </div>

          {/* Columna derecha - Lista */}
          <div className="space-y-4">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 text-orange-200 text-sm uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                {t("videosSuccessLabel")}
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">
                {t("videosTheyAlready")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">{t("videosLiveChange")}</span>
              </h3>
            </div>

            {videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(index)}
                className={`w-full group relative transition-all duration-500 ${
                  activeVideo === index ? 'scale-[1.02]' : 'hover:scale-[1.01]'
                }`}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${video.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500 ${
                  activeVideo === index ? 'opacity-50' : ''
                }`}></div>

                <div className={`relative flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                  activeVideo === index
                    ? 'bg-gradient-to-r from-purple-900/90 to-purple-800/90 border-white/30 shadow-2xl'
                    : 'bg-purple-900/40 backdrop-blur-sm border-white/10 hover:border-white/20'
                }`}>
                  <div className="relative flex-shrink-0">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${video.color} flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg`}>
                      {video.avatar}
                    </div>
                    {activeVideo === index && (
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs border-2 border-white">
                        ▶
                      </span>
                    )}
                  </div>

                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-white font-semibold">{video.name || t(video.nameKey)}</h4>
                    </div>
                    <p className="text-white/50 text-xs mb-1">{t(video.roleKey)}</p>
                    <p className="text-white/70 text-sm line-clamp-2">
                      "{t(video.commentKey).substring(0, 70)}..."
                    </p>
                  </div>

                  {activeVideo === index && (
                    <div className="w-1 h-12 bg-gradient-to-b from-orange-500 to-purple-600 rounded-full flex-shrink-0"></div>
                  )}
                </div>
              </button>
            ))}

            {/* CTA */}
            <div className="mt-6 p-4 sm:p-6 bg-gradient-to-br from-orange-600/20 via-purple-600/20 to-orange-600/20 backdrop-blur-md rounded-2xl border border-white/10 group hover:border-orange-500/30 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center text-3xl shadow-2xl group-hover:scale-110 transition-transform">
                    🎥
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-purple-900"></span>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-base sm:text-lg">{t("videosCTATitle")}</h4>
                  <p className="text-white/70 text-sm">{t("videosCTASub")}</p>
                </div>
                <a href="/contact" className="self-start sm:self-auto px-6 py-2.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-lg">
                  {t("videosCTABtn")}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center gap-4">
            <span className="px-6 py-2 bg-purple-900/60 backdrop-blur-sm rounded-full text-white/60 text-sm border border-white/20 inline-flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              {t("videosFooterLabel")}
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-1000"></span>
            </span>
          </div>
          <div className="mt-4 text-white/40 text-xs flex justify-center gap-6">
            <span>🎞️ {t("videosTestimonials")}</span>
            <span>🎥 {t("videosReal")}</span>
            <span>⭐ 5.0/5 rating</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(0.8); }
          50% { opacity: 0.3; transform: scale(1.2); }
        }
        .animate-twinkle { animation: twinkle 2s ease-in-out infinite; }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }

        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 8s ease infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Videos;
