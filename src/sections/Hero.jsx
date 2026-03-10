// components/Hero.jsx - Versión corregida sin conflicto con header
import { levels } from "../Constants";
import { Link } from "react-router-dom";
import QuoteAndInfo from "../components/QuoteAndInfo";
import Levels from "../components/Levels";
import { heroGif } from "../assets/export";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 sm:pt-32 pb-28 sm:pb-36">
      {/* BACKGROUND ARTÍSTICO - ÉPICO */}
      
      {/* Capa 1: Círculos de energía pulsante */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-60 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow animation-delay-4000"></div>
      </div>

      {/* Capa 2: Líneas de onda decorativas */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-scan"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent animate-scan animation-delay-1000"></div>
      </div>

      {/* Capa 3: Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4">
        {/* SECCIÓN 1: HERO PRINCIPAL - SIN BADGE SUPERIOR */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center relative">
          
          {/* Elemento decorativo: Estrella fugaz - reposicionada */}
          <div className="absolute -top-40 -right-20 text-6xl opacity-20 animate-shoot">✨</div>
          
          <div className="text-white space-y-6 relative">
            {/* Línea decorativa en lugar de badge */}
            <div className="flex items-center gap-2 text-orange-200/80 text-sm font-light">
              <span className="w-8 h-px bg-gradient-to-r from-orange-500 to-purple-600"></span>
              <span>Lingolandias Academy</span>
              <span className="w-8 h-px bg-gradient-to-r from-purple-600 to-orange-500"></span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight relative">
              <span className="relative">
                {t("hero1")}
                <span className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-purple-600/20 blur-2xl -z-10"></span>
              </span>
            </h1>
            
            <p className="text-base sm:text-xl lg:text-2xl text-orange-100 relative">
              {t("hero2")}{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-purple-200 relative">
                {t("hero2Span")}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full"></span>
              </span>
            </p>
            
            <p className="text-base lg:text-lg text-purple-100 leading-relaxed max-w-xl">
              {t("hero3")}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="https://wa.me/447578146264" target="_blank" rel="noopener noreferrer" className="relative group px-5 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-orange-500/25 overflow-hidden">
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative">{t("startNow")}</span>
              </a>
              <Link to="/courses" className="px-5 py-3 sm:px-8 sm:py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold hover:bg-white/20 transition-all relative group">
                <span className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500"></span>
                <span className="relative">{t("learnMore")}</span>
              </Link>
            </div>

            {/* Stats rápidas - reposicionadas ligeramente */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-lg">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center text-white text-xs">
                  +99
                </div>
              </div>
              <div className="text-white/80 text-sm">
                {t("heroActiveStudents")}
              </div>
            </div>

            {/* Trust badges - NUEVO! */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 text-white/50 text-xs">
              <span className="flex items-center gap-1">
                <span className="text-orange-400">✓</span> 100% online
              </span>
              <span className="flex items-center gap-1">
                <span className="text-purple-400">✓</span> {t("heroLiveClasses")}
              </span>
              <span className="flex items-center gap-1">
                <span className="text-orange-400">✓</span> {t("heroCertification")}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col items-center relative">
            {/* Elementos decorativos alrededor de la imagen */}
            <div className="absolute inset-0">
              <div className="absolute -top-20 -left-20 text-4xl opacity-20 animate-spin-slow">⚡</div>
              <div className="absolute -bottom-20 -right-20 text-4xl opacity-20 animate-bounce">🌟</div>
            </div>

            <div className="relative group">
              {/* Múltiples capas de glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-700"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition duration-700"></div>
              
              <img
                src={heroGif}
                alt="Lingolandias Academy founder and director - Learn English and Spanish online"
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] object-cover border-4 border-white/30 rounded-full shadow-2xl group-hover:scale-105 transition-transform duration-700"
                decoding="async"
                width="380"
                height="380"
              />

              {/* Anillo rotatorio */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-orange-500 border-r-purple-600 animate-spin-slow"></div>
            </div>
            
            <figcaption className="mt-6 text-center relative">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20">
                  <span className="text-orange-200 text-xs uppercase tracking-wider flex items-center gap-2 justify-center">
                    <span className="w-1 h-1 bg-orange-500 rounded-full animate-pulse"></span>
                    {t("director")}
                  </span>
                  <span className="text-white text-lg font-semibold block mt-0.5">Agata Kozłowska</span>
                </div>
              </div>
            </figcaption>

            {/* Badge de experiencia - NUEVO! */}
            <div className="hidden sm:block absolute -right-4 top-1/4 bg-gradient-to-r from-orange-500 to-purple-600 px-4 py-2 rounded-full text-white text-xs font-bold shadow-xl animate-float">
              {t("heroYearsExp")}
            </div>
          </div>
        </div>

        {/* SECCIÓN 2: QUOTE AND INFO */}
        <QuoteAndInfo />
        
        {/* SECCIÓN 3: LEVELS */}
        <Levels />
      </div>

      {/* SEPARADOR INFERIOR ÉPICO */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Capa 1: Onda principal */}
        <div className="relative h-20 w-full">
          <svg className="absolute bottom-0 w-full h-28" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,115.92,120.24,175.31,112.2,237.21,103.85,293.1,89.73,321.39,56.44Z" 
                  fill="url(#gradientWaveHero)" 
                  opacity="0.25">
              <animate attributeName="d" 
                dur="20s" 
                values="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,115.92,120.24,175.31,112.2,237.21,103.85,293.1,89.73,321.39,56.44Z;
                        M321.39,36.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,11,906.67,52,985.66,72.83c70.05,18.48,146.53,26.09,214.34,3V120H0V75.8C59.71,98.11,115.92,100.24,175.31,92.2,237.21,83.85,293.1,69.73,321.39,36.44Z"
                repeatCount="indefinite" />
            </path>
            <defs>
              <linearGradient id="gradientWaveHero" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#9333ea" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Capa 2: Partículas de luz ascendentes */}
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 w-0.5 bg-gradient-to-t from-orange-500 to-transparent rounded-full animate-particle-up"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                opacity: Math.random() * 0.4,
                height: `${10 + Math.random() * 20}px`,
              }}
            />
          ))}
        </div>

        {/* Capa 3: Badge decorativo - reposicionado más arriba */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-purple-900/70 backdrop-blur-xl px-6 py-2.5 rounded-full border border-white/20 shadow-2xl flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-white/90 text-xs font-medium">{t("heroDiscoverLevel")}</span>
              <span className="text-orange-400 text-xs font-bold">→</span>
            </div>
          </div>
        </div>
      </div>

      {/* CSS PERSONALIZADO */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }

        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-100px) translateX(50px); opacity: 0; }
        }
        .animate-float-particle {
          animation: float-particle 15s linear infinite;
        }

        @keyframes particle-up {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% { transform: translateY(-80px) scale(1.2); opacity: 0; }
        }
        .animate-particle-up {
          animation: particle-up 4s ease-out infinite;
        }

        @keyframes shoot {
          0% { transform: translateX(0) translateY(0) rotate(0deg); opacity: 0; }
          20% { opacity: 0.4; }
          80% { opacity: 0.4; }
          100% { transform: translateX(200px) translateY(-200px) rotate(45deg); opacity: 0; }
        }
        .animate-shoot {
          animation: shoot 12s linear infinite;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
};

export default Hero;