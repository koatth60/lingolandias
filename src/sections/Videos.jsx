// components/Videos.jsx
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const videos = [
  {
    id: 1,
    embedId: "dQw4w9WgXcQ",
    name: "María González",
    country: "🇪🇸 España",
    level: "B2 → C1",
    comment: "En 6 meses pasé de no poder pedir un café a mantener conversaciones fluidas con mis compañeros británicos. El método es increíble.",
    avatar: "M",
    color: "from-orange-500 to-orange-400"
  },
  {
    id: 2,
    embedId: "opZ69P-0Jbc",
    name: "James Wilson",
    country: "🇺🇸 USA",
    level: "A2 → B2",
    comment: "I moved to Madrid for work and needed Spanish fast. The holistic approach made all the difference. Now I'm confident in meetings!",
    avatar: "J",
    color: "from-purple-500 to-purple-400"
  },
  {
    id: 3,
    embedId: "V-_O7nl0Ii0",
    name: "Kasia Nowak",
    country: "🇵🇱 Polonia",
    level: "A1 → B1",
    comment: "Myślałam, że angielski jest poza moim zasięgiem. Lingolandias udowodniło mi, że każdy może mówić płynnie. Totalnie zakochana w tej metodzie!",
    avatar: "K",
    color: "from-orange-500 to-purple-600"
  },
  {
    id: 4,
    embedId: "WXxV9g7lsFE",
    name: "Carlos Méndez",
    country: "🇲🇽 México",
    level: "B1 → C1",
    comment: "Los profesores no solo enseñan, inspiran. Por primera vez disfruto aprender inglés y ya no me da miedo equivocarme.",
    avatar: "C",
    color: "from-purple-600 to-orange-500"
  },
  {
    id: 5,
    embedId: "fJ9rUzIMcZQ",
    name: "Sarah Johnson",
    country: "🇬🇧 UK",
    level: "Native",
    comment: "I joined to learn Spanish and ended up discovering a whole new philosophy of teaching. The grammar just... happens. It's magic!",
    avatar: "S",
    color: "from-orange-400 to-purple-500"
  }
];

const Videos = () => {
  const { t } = useTranslation();
  const [activeVideo, setActiveVideo] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Fondo consistente */}
      <div className="absolute inset-0 bg-purple-950/40 backdrop-blur-sm"></div>
      
      {/* ARTE ESPECTACULAR - ATMÓSFERA DE CINE */}
      
      {/* Luces de escenario - Barras de luz láser */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-orange-500/0 via-orange-500/50 to-purple-600/0 animate-pulse-slow"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-orange-600/0 animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-orange-500/0 via-orange-500/50 to-purple-600/0 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute bottom-0 right-1/4 w-px h-full bg-gradient-to-t from-purple-500/0 via-purple-500/50 to-orange-600/0 animate-pulse-slow animation-delay-1500"></div>
      </div>

      {/* Cámaras decorativas */}
      <div className="absolute top-20 right-20 opacity-20 rotate-12">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <circle cx="12" cy="12" r="4" />
          <path d="M18 5L22 2M18 19L22 22M6 5L2 2M6 19L2 22" />
        </svg>
      </div>

      {/* Claqueta decorativa */}
      <div className="absolute bottom-20 left-20 opacity-20 rotate-12 animate-float">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="url(#gradientReel)" strokeWidth="1.5">
          <rect x="2" y="6" width="20" height="12" rx="1" />
          <path d="M6 6L6 18M18 6L18 18" stroke="orange" />
          <defs>
            <linearGradient id="gradientReel" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Reflectores circulares */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-purple-600/0 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute inset-20 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-orange-500/0 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </div>

      {/* Estrellas de cine */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/20 text-xs animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            ⭐
          </div>
        ))}
      </div>

      <div className="relative container mx-auto px-4 max-w-7xl">
        {/* Header - ESTILO FESTIVAL DE CINE */}
        <div className="text-center mb-20 relative">
          {/* Cortina decorativa superior */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-10 flex gap-2">
            <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-transparent rounded-t-full"></div>
            <div className="w-2 h-10 bg-gradient-to-b from-purple-600 to-transparent rounded-t-full"></div>
            <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-transparent rounded-t-full"></div>
          </div>

          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-orange-200 text-sm font-medium tracking-wider mb-6 relative">
            🎬 TESTIMONIOS REALES
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
          </span>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="relative">
              VOCES QUE
              <span className="absolute -inset-2 bg-gradient-to-r from-orange-500/30 to-purple-600/30 blur-2xl"></span>
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-orange-400 bg-clip-text text-transparent bg-300% animate-gradient">
              INSPIRAN
            </span>
          </h2>
          
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Más de 1000 estudiantes ya transformaron su forma de aprender idiomas
          </p>

          {/* Barra de progreso de testimonios */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveVideo(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeVideo === i 
                    ? 'w-8 bg-gradient-to-r from-orange-500 to-purple-600' 
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grid de testimonios */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Columna izquierda - Video principal + Reproductor */}
          <div className="relative">
            <div className="sticky top-32">
              {/* Marco de película */}
              <div className="relative group">
                {/* Múltiples capas de glow cinematográfico */}
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition duration-700"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-orange-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-700"></div>
                
                {/* Contenedor del video - ASPECTO DE CINE */}
                <div className="relative bg-purple-900/80 backdrop-blur-xl rounded-3xl border-2 border-white/20 overflow-hidden shadow-2xl">
                  {/* Barra superior de película */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-purple-600 to-orange-500"></div>
                  
                  {/* Video embed */}
                  <div className="relative aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${videos[activeVideo].embedId}?autoplay=${autoplay ? 1 : 0}&mute=1&rel=0&modestbranding=1`}
                      title={`Testimonio de ${videos[activeVideo].name}`}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    
                    {/* Overlay de reproducción (decorativo) */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-purple-900/50 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Información del video - ESTILO CRÉDITOS */}
                  <div className="p-6 bg-gradient-to-b from-purple-900/90 to-purple-950/90 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${videos[activeVideo].color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                          {videos[activeVideo].avatar}
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg">{videos[activeVideo].name}</h3>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-white/70">{videos[activeVideo].country}</span>
                            <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                            <span className="text-orange-300 font-medium">{videos[activeVideo].level}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Botón de autoplay */}
                      <button
                        onClick={() => setAutoplay(!autoplay)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                          autoplay 
                            ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white' 
                            : 'bg-white/10 text-white/70 hover:bg-white/20'
                        }`}
                      >
                        {autoplay ? '🔊 Autoplay ON' : '🔇 Autoplay OFF'}
                      </button>
                    </div>
                    
                    {/* Comentario destacado */}
                    <div className="relative">
                      <span className="absolute -top-2 -left-2 text-4xl text-orange-500/30 font-serif">"</span>
                      <p className="text-white/90 text-lg leading-relaxed pl-4 italic">
                        {videos[activeVideo].comment}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Indicador de película */}
              <div className="flex justify-center mt-4">
                <span className="px-4 py-2 bg-purple-900/60 backdrop-blur-sm rounded-full text-white/60 text-xs border border-white/20 inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                  GRABACIÓN EN VIVO - TESTIMONIO REAL
                </span>
              </div>
            </div>
          </div>

          {/* Columna derecha - Lista de testimonios */}
          <div className="space-y-4">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 text-orange-200 text-sm uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                HISTORIAS DE ÉXITO
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">
                Ellos ya <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">viven el cambio</span>
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
                  {/* Thumbnail pequeño */}
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${video.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                      {video.avatar}
                    </div>
                    {activeVideo === index && (
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs border-2 border-white">
                        ▶
                      </span>
                    )}
                  </div>
                  
                  {/* Información */}
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-white font-semibold">{video.name}</h4>
                      <span className="text-white/50 text-xs">{video.country}</span>
                    </div>
                    <p className="text-white/70 text-sm line-clamp-2">
                      "{video.comment.substring(0, 70)}..."
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs font-medium bg-gradient-to-r ${video.color} bg-clip-text text-transparent`}>
                        {video.level}
                      </span>
                      <span className="text-white/30 text-xs">•</span>
                      <span className="text-white/40 text-xs">Ver testimonio →</span>
                    </div>
                  </div>
                  
                  {/* Indicador de reproducción */}
                  {activeVideo === index && (
                    <div className="w-1 h-12 bg-gradient-to-b from-orange-500 to-purple-600 rounded-full"></div>
                  )}
                </div>
              </button>
            ))}

            {/* CTA de comunidad */}
            <div className="mt-8 p-6 bg-gradient-to-br from-orange-600/20 via-purple-600/20 to-orange-600/20 backdrop-blur-md rounded-2xl border border-white/10 group hover:border-orange-500/30 transition-all">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center text-3xl shadow-2xl group-hover:scale-110 transition-transform">
                    🎥
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-purple-900"></span>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-lg">¿Tu historia aquí?</h4>
                  <p className="text-white/70 text-sm">Comparte tu experiencia aprendiendo con nosotros</p>
                </div>
                <button className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-lg whitespace-nowrap">
                  Ser parte
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer cinematográfico */}
        <div className="mt-20 text-center relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center gap-4">
            <span className="px-6 py-2 bg-purple-900/60 backdrop-blur-sm rounded-full text-white/60 text-sm border border-white/20 inline-flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              🎬 ESTRENO MUNDIAL - HISTORIAS REALES
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-1000"></span>
            </span>
          </div>
          <div className="mt-4 text-white/40 text-xs flex justify-center gap-6">
            <span>🎞️ 5 testimonios</span>
            <span>🎥 100% reales</span>
            <span>⭐ 4.9/5 rating</span>
          </div>
        </div>
      </div>

      {/* CSS personalizado */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(0.8); }
          50% { opacity: 0.3; transform: scale(1.2); }
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(15deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1500 { animation-delay: 1.5s; }
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