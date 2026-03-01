// components/Team.jsx
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

// Imágenes temporales de Unsplash (profesores)
const teacherImages = {
  spanish1: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
  spanish2: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&h=400&fit=crop",
  spanish3: "https://images.unsplash.com/photo-1494790108755-9989cd7df44e?w=400&h=400&fit=crop",
  english1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  english2: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
  english3: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
  polish1: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  polish2: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
  polish3: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=400&fit=crop"
};

const Team = () => {
  const { t } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(null);

  const languageCards = [
    {
      id: 'spanish',
      title: t('SpaTeachersTitle'),
      titleSpan: t('SpaTeachersTitleSpan'),
      flag: '🇪🇸',
      color: 'from-orange-500 to-orange-400',
      bgPattern: '🇪🇸🇪🇸🇪🇸',
      description: t('SpaTeachersTitleP1'),
      teacherCount: 3,
      route: '/esteachers',
      icon: '💃'
    },
    {
      id: 'english',
      title: t('EngTeachersTitle'),
      titleSpan: t('EngTeachersTitleSpan'),
      flag: '🇬🇧',
      color: 'from-purple-500 to-blue-500',
      bgPattern: '🇬🇧🇬🇧🇬🇧',
      description: t('EngTeachersP1'),
      teacherCount: 3,
      route: '/enteachers',
      icon: '🎸'
    },
    {
      id: 'polish',
      title: t('polTeachersTitle'),
      titleSpan: t('polTeachersSpan'),
      flag: '🇵🇱',
      color: 'from-red-500 to-white',
      bgPattern: '🇵🇱🇵🇱🇵🇱',
      description: t('polTeachersDesc'),
      teacherCount: 3,
      route: '/enteachers',
      icon: '🍺'
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-24">
      {/* Header */}
      <Header />
      
      {/* Fondo consistente */}
      <div className="absolute inset-0 bg-purple-950/40 backdrop-blur-sm"></div>
      
      {/* ARTE ÉPICO - ESTILO COMUNIDAD/PERSONAS */}
      
      {/* Capa 1: Círculos de conexión */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 border-2 border-orange-500/30 rounded-full animate-ping-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 border-2 border-purple-500/30 rounded-full animate-ping-slow animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 border-2 border-white/20 rounded-full"></div>
      </div>

      {/* Capa 2: Banderas flotantes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-40 left-20 text-8xl animate-float-slow">🇪🇸</div>
        <div className="absolute bottom-40 right-20 text-8xl animate-float-slow animation-delay-2000">🇬🇧</div>
        <div className="absolute top-1/2 left-1/4 text-7xl animate-float-slow animation-delay-4000">🇵🇱</div>
      </div>

      {/* Capa 3: Partículas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full animate-float-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              opacity: Math.random() * 0.3
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 max-w-7xl">
        {/* HEADER - ESTILO COMUNIDAD */}
        <div className="text-center mb-16 relative">
          {/* Badge de equipo */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-purple-600/20 backdrop-blur-sm px-6 py-2 rounded-full border border-orange-500/30 mb-6">
            <span className="text-2xl">👥</span>
            <span className="text-white/90 text-sm font-medium tracking-wider">{t("crew")}</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="relative">
              {t("teacherTitle")}
              <span className="absolute -inset-2 bg-gradient-to-r from-orange-500/30 to-purple-600/30 blur-2xl"></span>
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-orange-400 bg-clip-text text-transparent bg-300% animate-gradient">
              {t("teacherTitleSpan")}
            </span>
          </h2>
          
          <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
            {t("teachersP1")}
          </p>

          {/* Separador decorativo */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <span className="text-orange-400 text-2xl animate-pulse">✦</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
          </div>
        </div>

        {/* GRID DE 3 TARJETAS - IDIOMAS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {languageCards.map((lang, index) => (
            <Link
              key={lang.id}
              to={lang.route}
              className="group relative animate-fadeIn"
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setSelectedLang(lang.id)}
              onMouseLeave={() => setSelectedLang(null)}
            >
              {/* Múltiples capas de glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${lang.color} rounded-3xl blur opacity-0 group-hover:opacity-50 transition duration-700`}></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-orange-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-700"></div>
              
              {/* Tarjeta principal - overflow-visible para que el badge se vea completo */}
              <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl rounded-3xl border border-white/20 overflow-visible shadow-2xl h-full hover:scale-[1.02] transition-transform duration-500">
                
                {/* Barra superior con bandera */}
                <div className={`h-3 bg-gradient-to-r ${lang.color}`}></div>
                
                {/* Patrón de fondo de banderas */}
                <div className="absolute inset-0 opacity-5 text-7xl flex flex-wrap">
                  {lang.bgPattern.repeat(20)}
                </div>
                
                <div className="relative p-8 text-center">
                  {/* Icono gigante */}
                  <div className="relative inline-block mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${lang.color} rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition duration-700`}></div>
                    <div className={`relative w-28 h-28 bg-gradient-to-r ${lang.color} rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                      <span className="text-5xl">{lang.flag}</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-purple-900 rounded-full flex items-center justify-center text-2xl border-4 border-white/20">
                      {lang.icon}
                    </div>
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {lang.title}{' '}
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${lang.color}`}>
                      {lang.titleSpan}
                    </span>
                  </h3>
                  
                  {/* Descripción corta */}
                  <p className="text-white/70 text-sm leading-relaxed mb-6 line-clamp-3">
                    {lang.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="flex items-center gap-1">
                      <span className="text-white/60">👥</span>
                      <span className="text-white font-bold">{lang.teacherCount}</span>
                      <span className="text-white/60 text-xs">{t("statTeachersLabel")}</span>
                    </div>
                    <div className="w-px h-4 bg-white/20"></div>
                    <div className="flex items-center gap-1">
                      <span className="text-white/60">⭐</span>
                      <span className="text-white font-bold">4.9</span>
                    </div>
                  </div>
                  
                  {/* Botón */}
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full text-white font-semibold group-hover:scale-105 transition-transform shadow-lg">
                    <span>{t("teachersBtn")}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                  
                  {/* Badge flotante - AHORA SE VE COMPLETO gracias a overflow-visible */}
                  {selectedLang === lang.id && (
                    <div className="absolute -top-3 -right-3 animate-bounce z-20">
                      <span className="px-3 py-1.5 bg-green-500 text-white text-xs rounded-full shadow-lg whitespace-nowrap">
                        ✦ VER EQUIPO COMPLETO
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* MENSAJE DE SELECCIÓN */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-purple-600/20 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20">
            <span className="text-3xl">🖱️</span>
            <span className="text-white/90 text-lg font-light">
              {t("clickToMeetTeam")}
            </span>
          </div>
        </div>

        {/* SEPARADOR INFERIOR */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-8 py-3 bg-purple-900/60 backdrop-blur-sm rounded-full text-white/60 text-sm border border-white/20 inline-flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              🇪🇸 🇬🇧 🇵🇱 3 IDIOMAS · 9 PROFESORES · 1 COMUNIDAD 🇪🇸 🇬🇧 🇵🇱
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-1000"></span>
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* CSS PERSONALIZADO */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.2; }
        }
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-100px) translateX(50px); opacity: 0; }
        }
        .animate-float-particle {
          animation: float-particle 15s linear infinite;
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 8s ease infinite;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
};

export default Team;