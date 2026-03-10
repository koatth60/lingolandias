// components/Test.jsx
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

const Test = () => {
  const { t } = useTranslation();
  const [hoverCard, setHoverCard] = useState(null);

  const testCards = [
    {
      id: 'english',
      title: t('engCardTitle'),
      titleSpan: t('engCardTitleSpan'),
      flag: '🇬🇧',
      color: 'from-purple-500 to-blue-500',
      bgPattern: '🇬🇧🇬🇧🇬🇧',
      description: t('engTestDesc'),
      features: [t('engFeat1'), t('engFeat2'), t('engFeat3'), t('engFeat4')],
      levels: ['A1', 'A2', 'B1', 'B2'],
      route: '/english-quiz',
      accent: '🎧',
    },
    {
      id: 'spanish',
      title: t('esCardTitle'),
      titleSpan: t('esCardTitleSpan'),
      flag: '🇪🇸',
      color: 'from-orange-500 to-orange-400',
      bgPattern: '🇪🇸🇪🇸🇪🇸',
      description: t('esTestDesc'),
      features: [t('esFeat1'), t('esFeat2'), t('esFeat3'), t('esFeat4')],
      levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
      route: '/spanish-quiz',
      accent: '💃',
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-24">
      {/* Header */}
      <Header />
      
      {/* Fondo consistente */}
      <div className="absolute inset-0 bg-purple-950/40 backdrop-blur-sm"></div>
      
      {/* ARTE ÉPICO - ESTILO EXAMEN/EVALUACIÓN */}
      
      {/* Capa 1: Círculos de evaluación */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 border-2 border-orange-500/30 rounded-full animate-ping-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 border-2 border-purple-500/30 rounded-full animate-ping-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full"></div>
      </div>

      {/* Capa 2: Símbolos de examen flotantes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-40 left-20 text-8xl animate-float-slow">📝</div>
        <div className="absolute bottom-40 right-20 text-8xl animate-float-slow animation-delay-2000">📊</div>
        <div className="absolute top-1/3 right-1/4 text-7xl animate-float-slow animation-delay-4000">🎓</div>
        <div className="absolute bottom-1/3 left-1/4 text-7xl animate-float-slow animation-delay-1000">✏️</div>
        <div className="absolute top-2/3 left-1/3 text-6xl animate-float-slow animation-delay-3000">⏱️</div>
        <div className="absolute bottom-2/3 right-1/3 text-6xl animate-float-slow animation-delay-2500">🏆</div>
      </div>

      {/* Capa 3: Partículas tipo confeti académico */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full animate-float-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              opacity: Math.random() * 0.3,
              width: `${1 + Math.random() * 4}px`,
              height: `${1 + Math.random() * 4}px`
            }}
          />
        ))}
      </div>

      {/* Capa 4: Líneas de examen */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Capa 5: Checkmarks gigantes */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-1/4 right-1/4 text-9xl">✓</div>
        <div className="absolute bottom-1/4 left-1/4 text-9xl">✓</div>
        <div className="absolute top-3/4 right-1/3 text-8xl">✓</div>
      </div>

      <div className="relative container mx-auto px-4 max-w-6xl">
        {/* HEADER - ESTILO EVALUACIÓN */}
        <div className="text-center mb-16 relative">
          {/* Badge de test */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-purple-600/20 backdrop-blur-sm px-6 py-2 rounded-full border border-orange-500/30 mb-6">
            <span className="text-2xl">📝</span>
            <span className="text-white/90 text-sm font-medium tracking-wider">{t("levelTestBadge")}</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
            <span className="relative">
              {t("whatsYourLevel")}
              <span className="absolute -inset-2 bg-gradient-to-r from-orange-500/30 to-purple-600/30 blur-2xl"></span>
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-orange-400 bg-clip-text text-transparent bg-300% animate-gradient">
              {t("languageLevelQ")}
            </span>
          </h2>
          
          <p className="text-white/80 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            {t("testHeroText")}
          </p>

          {/* Estadísticas rápidas */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mt-10">
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl">⏱️</span>
              <span className="text-white/70 text-sm sm:text-base">{t("testTime")}</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl">📊</span>
              <span className="text-white/70 text-sm sm:text-base">{t("immediateResult")}</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl">💬</span>
              <span className="text-white/70 text-sm sm:text-base">{t("testGuidance")}</span>
            </div>
          </div>

          {/* Separador decorativo */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <span className="text-orange-400 text-2xl animate-pulse">✦</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
          </div>
        </div>

        {/* GRID DE 2 TARJETAS - INGLÉS Y ESPAÑOL */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {testCards.map((test, index) => (
            <Link
              key={test.id}
              to={test.route}
              className="group relative animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoverCard(test.id)}
              onMouseLeave={() => setHoverCard(null)}
            >
              {/* Múltiples capas de glow épicas */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${test.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition duration-700`}></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-orange-500 rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition duration-700"></div>
              <div className="absolute -inset-3 bg-white/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-20 transition duration-700"></div>
              
              {/* Tarjeta principal */}
              <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl rounded-3xl border border-white/20 overflow-visible shadow-2xl h-full hover:scale-[1.02] transition-transform duration-500">
                
                {/* Barra superior animada */}
                <div className={`h-2 bg-gradient-to-r ${test.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 w-full h-full bg-white/30 animate-shimmer"></div>
                </div>
                
                {/* Patrón de fondo de banderas */}
                <div className="absolute inset-0 opacity-5 text-8xl flex flex-wrap justify-center items-start pt-20">
                  {test.bgPattern.repeat(30)}
                </div>
                
                <div className="relative p-5 sm:p-8 text-center">
                  {/* Icono principal con efectos */}
                  <div className="relative inline-block mb-8">
                    {/* Múltiples círculos de glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${test.color} rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition duration-700`}></div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition duration-700"></div>
                    
                    {/* Círculo principal */}
                    <div className={`relative w-24 h-24 sm:w-36 sm:h-36 bg-gradient-to-r ${test.color} rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 ring-4 ring-white/20`}>
                      <span className="text-4xl sm:text-6xl">{test.flag}</span>
                    </div>
                    
                    {/* Icono de acento flotante */}
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 sm:w-14 sm:h-14 bg-purple-900 rounded-full flex items-center justify-center text-xl sm:text-3xl border-4 border-white/30 shadow-xl animate-bounce-slow">
                      {test.accent}
                    </div>

                    {/* Badge de tiempo */}
                    <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm border-4 border-white/30 shadow-xl animate-pulse-slow">
                      15'
                    </div>
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                    {test.title}{' '}
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${test.color}`}>
                      {test.titleSpan}
                    </span>
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-white/70 text-base leading-relaxed mb-6 px-4">
                    {test.description}
                  </p>
                  
                  {/* Features en grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {test.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-white/80 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                        <span className="text-green-400 text-lg">✓</span>
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Niveles */}
                  <div className="mb-8">
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-3">{t("evaluatedLevels")}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {test.levels.map((level, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1.5 bg-gradient-to-r ${test.color} bg-opacity-20 rounded-full text-xs font-bold text-white border border-white/20 shadow-lg`}
                        >
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Botón principal */}
                  <div className="relative inline-block">
                    <div className={`absolute -inset-2 bg-gradient-to-r ${test.color} rounded-full blur-xl opacity-0 group-hover:opacity-60 transition duration-700`}></div>
                    <button className="relative px-6 py-3 sm:px-10 sm:py-5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full text-white font-bold text-base sm:text-xl hover:scale-105 transition-transform shadow-2xl inline-flex items-center gap-3 group/btn">
                      <span>{t("startTest")}</span>
                      <span className="text-2xl group-hover/btn:translate-x-2 transition-transform">→</span>
                    </button>
                  </div>
                  
                  {/* Badge flotante de "RECOMENDADO" */}
                  {hoverCard === test.id && (
                    <div className="absolute -top-4 -right-4 animate-bounce z-20">
                      <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm rounded-full shadow-2xl border-2 border-white/30 font-bold whitespace-nowrap flex items-center gap-1">
                        <span className="text-lg">✨</span>
                        {t("officialTest")}
                        <span className="text-lg">✨</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* SECCIÓN DE BENEFICIOS */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-purple-600/10 rounded-3xl blur-3xl"></div>

          <div className="relative bg-white/5 backdrop-blur-md p-6 sm:p-10 rounded-3xl border border-white/20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-8">
              {t("whyTakeTest")}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-3 shadow-lg">
                  🎯
                </div>
                <p className="text-white font-semibold">{t("testAccurate")}</p>
                <p className="text-white/50 text-xs mt-1">{t("testAccurateSub")}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-3 shadow-lg">
                  ⚡
                </div>
                <p className="text-white font-semibold">{t("testFast")}</p>
                <p className="text-white/50 text-xs mt-1">{t("testFastSub")}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-3 shadow-lg">
                  📊
                </div>
                <p className="text-white font-semibold">{t("testDetailed")}</p>
                <p className="text-white/50 text-xs mt-1">{t("testDetailedSub")}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-3 shadow-lg">
                  💬
                </div>
                <p className="text-white font-semibold">{t("testGuidance")}</p>
                <p className="text-white/50 text-xs mt-1">{t("testGuidanceSub")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* BADGE INFERIOR ÉPICO */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-purple-600/20 backdrop-blur-sm px-5 sm:px-8 py-3 sm:py-4 rounded-full border border-white/20">
            <span className="text-2xl sm:text-3xl animate-pulse">📝</span>
            <span className="text-white/90 text-sm sm:text-lg font-light">
              {t("testQuestionsInfo")}
            </span>
            <span className="text-2xl sm:text-3xl animate-pulse animation-delay-1000">📊</span>
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
              {t("testSeparator")}
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

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 8s ease infinite;
        }

        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
};

export default Test;