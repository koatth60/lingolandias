// components/Reviews.jsx
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const reviews = [
  {
    id: 1,
    name: "Ana Martínez",
    avatar: "A",
    country: "🇪🇸 España",
    rating: 5,
    date: "Hace 2 días",
    platform: "Facebook",
    platformIcon: "f",
    review: "¡Me encanta! Los profesores son muy pacientes y las clases son dinámicas. Empecé desde cero y ya puedo mantener conversaciones básicas. La metodología es muy diferente a lo que conocía, aprendes sin darte cuenta.",
    likes: 24,
    comments: 3,
    verified: true
  },
  {
    id: 2,
    name: "Thomas Müller",
    avatar: "T",
    country: "🇩🇪 Alemania",
    rating: 5,
    date: "Hace 3 días",
    platform: "Facebook",
    platformIcon: "f",
    review: "Endlich verstehe ich englische Grammatik! Die Methode ist genial - man lernt durch Sprechen, nicht durch Auswendiglernen. Absolut empfehlenswert!",
    likes: 18,
    comments: 2,
    verified: true
  },
  {
    id: 3,
    name: "Laura Kowalski",
    avatar: "L",
    country: "🇵🇱 Polonia",
    rating: 5,
    date: "Hace 5 días",
    platform: "Facebook",
    platformIcon: "f",
    review: "Najlepsza szkoła językowa! Po miesiącu zauważyłam ogromną różnicę. Wreszcie nie boję się mówić po angielsku. Polecam każdemu! ❤️",
    likes: 32,
    comments: 5,
    verified: true
  },
  {
    id: 4,
    name: "John Smith",
    avatar: "J",
    country: "🇺🇸 USA",
    rating: 5,
    date: "Hace 1 semana",
    platform: "Facebook",
    platformIcon: "f",
    review: "Learning Spanish here has been a game-changer. The holistic approach actually works! My coworkers are amazed at my progress in just 3 months.",
    likes: 45,
    comments: 7,
    verified: true
  },
  {
    id: 5,
    name: "Sofia Rossi",
    avatar: "S",
    country: "🇮🇹 Italia",
    rating: 4,
    date: "Hace 1 semana",
    platform: "Facebook",
    platformIcon: "f",
    review: "Insegnanti preparati e ambiente accogliente. L'unica scuola dove ho visto veramente risultati. Forse un po' cara ma ne vale la pena!",
    likes: 15,
    comments: 2,
    verified: true
  },
  {
    id: 6,
    name: "Carlos Ruiz",
    avatar: "C",
    country: "🇦🇷 Argentina",
    rating: 5,
    date: "Hace 2 semanas",
    platform: "Facebook",
    platformIcon: "f",
    review: "Recomendada 100%. La flexibilidad horaria me salvó las papas con mi trabajo. Los profesores son unos genios, hacen que quieras aprender.",
    likes: 28,
    comments: 4,
    verified: true
  }
];

const Reviews = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [visibleReviews, setVisibleReviews] = useState(4);

  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length;
  const fiveStarPercentage = (reviews.filter(r => r.rating === 5).length / totalReviews * 100).toFixed(0);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Fondo consistente */}
      <div className="absolute inset-0 bg-purple-950/40 backdrop-blur-sm"></div>
      
      {/* ARTE DE REDES SOCIALES - VIBE FACEBOOK/INSTAGRAM */}
      
      {/* Patrón de "me gusta" flotantes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-float-random"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              transform: `rotate(${Math.random() * 90}deg)`
            }}
          >
            {i % 3 === 0 ? '👍' : i % 3 === 1 ? '❤️' : '⭐'}
          </div>
        ))}
      </div>

      {/* Iconos de Facebook decorativos */}
      <div className="absolute top-20 left-10 opacity-20">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8L13 8C11.8954 8 11 8.89543 11 10V16M11 12H14" stroke="url(#gradientFB)" />
          <defs>
            <linearGradient id="gradientFB" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Corazones pulsantes estilo likes */}
      <div className="absolute bottom-40 right-20 opacity-20">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500/30 to-purple-600/30 rounded-full animate-ping-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">❤️</div>
        </div>
      </div>

      {/* Estrellas de rating flotantes */}
      <div className="absolute top-1/3 right-1/4 opacity-10">
        <div className="flex gap-1 text-2xl animate-pulse-slow">
          <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
        </div>
      </div>

      <div className="relative container mx-auto px-4 max-w-7xl">
        {/* Header - ESTILO RED SOCIAL */}
        <div className="text-center mb-16 relative">
          {/* Badge de Facebook */}
          <div className="inline-flex items-center gap-2 bg-[#1877F2]/20 backdrop-blur-sm px-4 py-2 rounded-full border border-[#1877F2]/30 mb-6">
            <span className="text-[#1877F2] font-bold">f</span>
            <span className="text-white/90 text-sm">Reviews de Facebook</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Lo que dicen
            <span className="relative ml-4">
              <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-orange-400 bg-clip-text text-transparent bg-300% animate-gradient">
                nuestros alumnos
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full"></span>
            </span>
          </h2>

          {/* Rating general - ESTILO FACEBOOK */}
          <div className="inline-flex items-center gap-8 bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/10">
            <div className="text-left">
              <div className="text-4xl font-bold text-white">{averageRating}</div>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-xl ${i < Math.round(parseFloat(averageRating)) ? 'text-orange-400' : 'text-white/20'}`}>★</span>
                ))}
              </div>
              <div className="text-white/60 text-sm mt-1">{totalReviews} reseñas</div>
            </div>
            
            <div className="w-px h-12 bg-white/20"></div>
            
            <div className="text-left">
              <div className="text-white/80 text-sm mb-2">Excelente</div>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-500 to-purple-600 rounded-full"
                    style={{ width: `${fiveStarPercentage}%` }}
                  ></div>
                </div>
                <span className="text-white/60 text-xs">{fiveStarPercentage}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filtros rápidos */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              filter === 'all'
                ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg'
                : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
            }`}
          >
            Todas las reseñas
          </button>
          <button
            onClick={() => setFilter('5star')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              filter === '5star'
                ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg'
                : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
            }`}
          >
            ⭐ 5 estrellas
          </button>
          <button
            onClick={() => setFilter('recent')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              filter === 'recent'
                ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg'
                : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
            }`}
          >
            Más recientes
          </button>
          <button
            onClick={() => setFilter('popular')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              filter === 'popular'
                ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg'
                : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
            }`}
          >
            ❤️ Más likes
          </button>
        </div>

        {/* Grid de reseñas - ESTILO FACEBOOK FEED */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.slice(0, visibleReviews).map((review, index) => (
            <div
              key={review.id}
              className="group relative animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Efecto de glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              
              {/* Tarjeta de reseña - ESTILO FACEBOOK CARD */}
              <div className="relative bg-gradient-to-br from-purple-900/80 to-purple-800/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all shadow-xl">
                
                {/* Header de la reseña - Avatar + nombre + fecha */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar con gradiente */}
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${
                      review.rating === 5 
                        ? 'from-orange-500 to-purple-600' 
                        : 'from-orange-400 to-orange-500'
                    } flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                      {review.avatar}
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-white font-semibold">{review.name}</h3>
                        {review.verified && (
                          <span className="text-blue-400 text-xs bg-blue-400/10 px-1.5 py-0.5 rounded-full border border-blue-400/30">
                            ✓ Verificado
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-white/60">{review.country}</span>
                        <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                        <span className="text-white/40 text-xs">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Platform badge */}
                  <span className="text-[#1877F2] font-bold text-xl bg-[#1877F2]/10 px-2 py-1 rounded-lg">
                    f
                  </span>
                </div>
                
                {/* Rating en estrellas */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-lg ${i < review.rating ? 'text-orange-400' : 'text-white/20'}`}>★</span>
                  ))}
                  <span className="text-white/40 text-xs ml-2">{review.rating}.0</span>
                </div>
                
                {/* Texto de la reseña */}
                <div className="relative mb-4">
                  <span className="absolute -top-2 -left-2 text-3xl text-orange-500/20 font-serif">"</span>
                  <p className="text-white/90 leading-relaxed pl-2">
                    {review.review}
                  </p>
                </div>
                
                {/* Footer - Likes y comentarios (ESTILO FACEBOOK) */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1.5 text-white/60 hover:text-orange-400 transition-colors group/btn">
                      <span className="text-lg group-hover/btn:scale-110 transition-transform">👍</span>
                      <span className="text-sm">{review.likes}</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-white/60 hover:text-purple-400 transition-colors">
                      <span className="text-lg">💬</span>
                      <span className="text-sm">{review.comments}</span>
                    </button>
                  </div>
                  
                  <button className="text-xs text-white/40 hover:text-orange-400 transition-colors">
                    Compartir
                  </button>
                </div>
                
                {/* Badge de "Recomendado" */}
                {review.rating === 5 && (
                  <div className="absolute -top-2 -right-2">
                    <span className="px-2 py-1 bg-gradient-to-r from-orange-500 to-purple-600 text-white text-xs rounded-full shadow-lg animate-pulse-slow">
                      ⭐ Recomendado
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Botón "Ver más reseñas" */}
        {visibleReviews < reviews.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleReviews(reviews.length)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold hover:bg-white/10 transition-all"
            >
              <span>Ver más reseñas en Facebook</span>
              <span className="text-[#1877F2] group-hover:scale-110 transition-transform">f</span>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            </button>
          </div>
        )}

        {/* Widget de Facebook simulado */}
        <div className="mt-20 p-6 bg-[#1877F2]/5 backdrop-blur-md rounded-2xl border border-[#1877F2]/20">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                f
              </div>
              <div>
                <h4 className="text-white font-semibold">Lingolandias en Facebook</h4>
                <p className="text-white/60 text-sm">4.9 ⭐ · 150+ reseñas</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-[#1877F2] hover:bg-[#1877F2]/90 rounded-full text-white font-semibold transition-all flex items-center gap-2 shadow-lg">
              <span>👍</span>
              Me gusta la página
            </button>
          </div>
        </div>

        {/* Stats sociales */}
        <div className="grid grid-cols-3 gap-4 mt-16 pt-8 border-t border-white/10">
          <div className="text-center">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">150+</div>
            <p className="text-white/60 text-xs mt-1">Reseñas en Facebook</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-300">4.9</div>
            <p className="text-white/60 text-xs mt-1">Calificación promedio</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">95%</div>
            <p className="text-white/60 text-xs mt-1">Recomendarían la escuela</p>
          </div>
        </div>
      </div>

      {/* CSS personalizado */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.1; }
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        @keyframes float-random {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -20px) rotate(5deg); }
          50% { transform: translate(-10px, 30px) rotate(-5deg); }
          75% { transform: translate(-30px, -10px) rotate(3deg); }
        }
        .animate-float-random {
          animation: float-random 15s infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Reviews;