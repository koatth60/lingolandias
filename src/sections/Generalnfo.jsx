import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Zaczęło
// estaba en 270px
const GeneralInfo = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-26 overflow-hidden">
      {/* Fondo sutil y uniforme */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/80 via-purple-950/70 to-purple-950/80"></div>
      
      {/* ELEMENTOS ARTÍSTICOS RANDOM - MANCHAS, LÍNEAS, FORMAS */}
      
      {/* Mancha circular grande - superior izquierda */}
      <div className="absolute top-20 -left-20 w-64 h-64 bg-orange-500/20 rounded-full filter blur-3xl animate-pulse"></div>
      
      {/* Mancha circular - centro derecha */}
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      
      {/* Líneas onduladas decorativas */}
      <div className="absolute top-40 right-20 opacity-20">
        <svg width="200" height="100" viewBox="0 0 200 100" fill="none">
          <path d="M0 50 C 30 20, 60 80, 100 50 S 160 20, 200 50" stroke="white" strokeWidth="1" strokeDasharray="5 5"/>
          <path d="M0 70 C 30 40, 60 100, 100 70 S 160 40, 200 70" stroke="orange" strokeWidth="1" strokeDasharray="3 3"/>
        </svg>
      </div>
      
      {/* Puntos flotantes (partículas) */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`
            }}
          />
        ))}
      </div>
      
      {/* Formas geométricas aleatorias */}
      <div className="absolute bottom-40 left-10 opacity-10">
        <div className="w-20 h-20 border-2 border-orange-500/30 rounded-lg rotate-12"></div>
        <div className="w-12 h-12 border-2 border-purple-500/30 rounded-full absolute top-10 left-10"></div>
        <div className="w-8 h-8 border-2 border-white/20 absolute -top-5 -right-5 rotate-45"></div>
      </div>
      
      {/* Líneas diagonales */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          {[...Array(10)].map((_, i) => (
            <line
              key={i}
              x1={i * 20}
              y1="0"
              x2="0"
              y2={i * 20}
              stroke="white"
              strokeWidth="0.5"
              opacity="0.3"
            />
          ))}
        </svg>
      </div>
      
      {/* Círculos concéntricos */}
      <div className="absolute top-1/3 left-1/4 opacity-10">
        <div className="w-32 h-32 border border-orange-500/30 rounded-full"></div>
        <div className="w-24 h-24 border border-purple-500/30 rounded-full absolute top-4 left-4"></div>
        <div className="w-16 h-16 border border-white/30 rounded-full absolute top-8 left-8"></div>
      </div>
      
      {/* Forma abstracta estilo "splash" */}
      <div className="absolute bottom-20 right-20 opacity-10">
        <svg width="150" height="150" viewBox="0 0 150 150">
          <path
            d="M20,70 Q40,30 80,40 Q120,50 130,80 Q140,110 100,120 Q60,130 40,100 Q20,80 20,70"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray="8 4"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#9333ea" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Cuadrícula sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-20 relative">
          {/* Estrella decorativa */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-orange-400/30 text-4xl animate-spin-slow">✨</div>
          
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-orange-200 text-sm font-medium tracking-wider mb-6 relative">
            {t("ourStory")}
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-ping"></span>
          </span>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 relative">
            {t("genInfo")}{" "}
            <span className="text-orange-400 relative">
              {t("genInfoSpan")}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></span>
            </span>
            {/* Adorno decorativo en el título */}
            <span className="absolute -right-12 top-0 text-3xl opacity-20 rotate-12">⚡</span>
          </h2>
          
          <div className="flex justify-center gap-2 relative">
            <span className="w-12 h-1 bg-orange-500/50 rounded-full"></span>
            <span className="w-12 h-1 bg-purple-500/50 rounded-full"></span>
          </div>
        </div>

        {/* Diseño tipo línea de tiempo / artículo */}
        <div className="space-y-16 relative">
          {/* Línea de tiempo vertical decorativa */}
          <div className="absolute left-0 md:left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/0 via-orange-500/30 to-purple-600/0 hidden md:block"></div>
          
          {/* Bloque 1 - El inicio */}
          <div className="grid md:grid-cols-3 gap-8 items-start relative">
            <div className="md:col-span-1">
              <div className="sticky top-32 relative">
                {/* Adorno tipo brújula */}
                <div className="absolute -left-4 -top-4 text-2xl opacity-30">🧭</div>
                <div className="inline-flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full border border-white/10 relative">
                  <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                  <span className="text-orange-200 font-medium">2015</span>
                </div>
                <h3 className="text-3xl font-bold text-white mt-4 mb-2">{t("theBeginning")}</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full"></div>
                
                {/* Adorno de línea */}
                <div className="absolute -right-10 top-10 w-20 h-20 border-r-2 border-b-2 border-orange-500/20 rounded-br-3xl hidden md:block"></div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 relative group hover:border-orange-500/30 transition-colors">
                <span className="absolute -top-3 -left-3 text-4xl opacity-0 group-hover:opacity-30 transition-opacity">“</span>
                <p className="text-white/90 text-xl leading-relaxed font-light relative z-10">
                  {t("genInfoPara1")}
                </p>
                {/* Adorno de esquina */}
                <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-orange-500/30 rounded-br-lg"></div>
              </div>
            </div>
          </div>

          {/* Bloque 2 - El descubrimiento */}
          <div className="grid md:grid-cols-3 gap-8 items-start relative">
            {/* Adorno flotante */}
            <div className="absolute -left-10 top-1/2 text-3xl opacity-20 hidden md:block animate-bounce">💡</div>
            
            <div className="md:col-span-1">
              <div className="sticky top-32">
                <div className="inline-flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full border border-white/10">
                  <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-1000"></span>
                  <span className="text-purple-200 font-medium">{t("theDiscovery")}</span>
                </div>
                <h3 className="text-3xl font-bold text-white mt-4 mb-2">{t("theDiscovery")}</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full"></div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 relative">
                <span className="absolute -top-2 -right-2 text-2xl opacity-30">🔬</span>
                <p className="text-white/90 text-xl leading-relaxed font-light">
                  {t("genInfoPara2")}
                </p>
              </div>
            </div>
          </div>

          {/* Bloque 3 - La filosofía (texto más largo) */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <div className="sticky top-32">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-purple-600/20 px-5 py-2 rounded-full border border-orange-500/30">
                  <span className="w-2 h-2 bg-orange-400 rounded-full animate-ping animation-delay-2000"></span>
                  <span className="text-orange-200 font-medium">{t("ourEssence")}</span>
                </div>
                <h3 className="text-3xl font-bold text-white mt-4 mb-2">{t("ourEssence")}</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full"></div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-gradient-to-br from-orange-500/10 to-purple-600/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 relative">
                {/* Adornos tipo comillas */}
                <span className="absolute top-2 left-4 text-6xl text-orange-500/20 font-serif">"</span>
                <span className="absolute bottom-2 right-4 text-6xl text-purple-500/20 font-serif rotate-180">"</span>
                <p className="text-white/95 text-xl leading-relaxed font-light relative z-10">
                  {t("genInfoPara3")}
                </p>
              </div>
            </div>
          </div>

          {/* Bloque 4 - Orgullo y misión */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <div className="sticky top-32 relative">
                {/* Adorno de estrella */}
                <div className="absolute -left-8 -top-2 text-yellow-500/30 text-2xl">⭐</div>
                <div className="inline-flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full border border-white/10">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span className="text-orange-200 font-medium">{t("today")}</span>
                </div>
                <h3 className="text-3xl font-bold text-white mt-4 mb-2">{t("prideAndMission")}</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full"></div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                <p className="text-white/90 text-xl leading-relaxed font-light mb-6">
                  {t("genInfoPara4")}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-2 text-orange-300">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                    {t("commitment100")}
                  </span>
                  <span className="flex items-center gap-2 text-purple-300">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse animation-delay-1000"></span>
                    {t("provenMethod")}
                  </span>
                </div>
                {/* Adorno de check */}
                <span className="absolute bottom-4 right-4 text-green-500/30 text-2xl">✓</span>
              </div>
            </div>
          </div>

          {/* Bloque 5 - Invitación final - DESTACADO */}
          <div className="mt-24 relative">
            {/* Confeti decorativo */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full opacity-20"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    animation: `float ${3 + Math.random() * 4}s infinite`
                  }}
                />
              ))}
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-r from-orange-600/30 to-purple-600/30 backdrop-blur-md p-12 rounded-3xl border border-white/20 text-center overflow-hidden">
              {/* Adornos de brillos */}
              <div className="absolute top-0 -left-10 w-20 h-20 bg-orange-500/30 rounded-full filter blur-2xl"></div>
              <div className="absolute bottom-0 -right-10 w-20 h-20 bg-purple-500/30 rounded-full filter blur-2xl"></div>
              
              <span className="text-7xl mb-6 block relative animate-float">🚀</span>
              <span className="absolute top-10 right-20 text-4xl opacity-20 animate-spin-slow">✨</span>
              <span className="absolute bottom-10 left-20 text-3xl opacity-20 animate-bounce">🌟</span>
              
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 relative">
                {t("readyForJourney")}
                <span className="absolute -top-3 -right-3 text-yellow-300/30 text-2xl">⚡</span>
              </h3>
              
              <p className="text-white/95 text-xl leading-relaxed font-light max-w-3xl mx-auto mb-8">
                {t("genInfoPara5")}
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center relative">
                <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-2xl shadow-orange-600/25 inline-flex items-center gap-2 text-lg group">
                  {t("joinCommunity")}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link to="/courses" className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold hover:bg-white/20 transition-all text-lg">
                  {t("knowMore")}
                </Link>
              </div>
            </div>
          </div>

          {/* Stats minimalistas con adornos */}
          <div className="grid grid-cols-3 gap-8 pt-16 border-t border-white/10 relative">
            <div className="absolute inset-x-0 top-0 -translate-y-1/2 flex justify-center">
              <span className="px-4 py-1 bg-purple-800/80 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/20">
                {t("yearsOfHistory")}
              </span>
            </div>
            
            <div className="text-center relative group">
              <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 rounded-2xl transition-colors"></div>
              <span className="absolute -top-2 -right-2 text-orange-500/30 group-hover:opacity-100 opacity-0 transition-opacity">🏆</span>
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300 mb-2">10+</div>
              <p className="text-white/60 text-sm uppercase tracking-wider">{t("statYears")}</p>
            </div>
            
            <div className="text-center relative group">
              <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/5 rounded-2xl transition-colors"></div>
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-purple-500/30 group-hover:opacity-100 opacity-0 transition-opacity">👥</span>
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-300 mb-2">1000+</div>
              <p className="text-white/60 text-sm uppercase tracking-wider">{t("statStudents")}</p>
            </div>
            
            <div className="text-center relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-purple-600/0 group-hover:from-orange-500/5 group-hover:to-purple-600/5 rounded-2xl transition-colors"></div>
              <span className="absolute -bottom-2 -left-2 text-orange-500/30 group-hover:opacity-100 opacity-0 transition-opacity">📚</span>
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400 mb-2">15+</div>
              <p className="text-white/60 text-sm uppercase tracking-wider">{t("statTeachersLabel")}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS para animaciones personalizadas */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default GeneralInfo;