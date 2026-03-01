// components/Courses.jsx
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

const Courses = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('individual');

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-24">
      {/* Header */}
      <Header />
      
      {/* Fondo consistente */}
      <div className="absolute inset-0 bg-purple-950/40 backdrop-blur-sm"></div>
      
      {/* ARTE ÉPICO - ESTILO SUPERHÉROES */}
      
      {/* Capa 1: Rayos de energía */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-orange-500/0 via-orange-500/50 to-purple-600/0 animate-pulse-slow"></div>
        <div className="absolute top-0 left-2/4 w-1 h-full bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-orange-600/0 animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-orange-500/0 via-orange-500/50 to-purple-600/0 animate-pulse-slow animation-delay-2000"></div>
      </div>

      {/* Capa 2: Estrellas fugaces de poder */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full animate-shoot"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 10}s`,
              boxShadow: '0 0 10px rgba(249,115,22,0.5)'
            }}
          />
        ))}
      </div>

      {/* Capa 3: Símbolos de poder flotantes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 text-8xl animate-float-slow">⚡</div>
        <div className="absolute bottom-40 right-20 text-8xl animate-float-slow animation-delay-2000">💪</div>
        <div className="absolute top-1/3 right-1/4 text-7xl animate-float-slow animation-delay-4000">🦸</div>
        <div className="absolute bottom-20 left-1/4 text-7xl animate-float-slow animation-delay-1000">🌟</div>
      </div>

      {/* Capa 4: Círculos de poder concéntricos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
        <div className="relative">
          <div className="w-[600px] h-[600px] border-2 border-orange-500/30 rounded-full animate-ping-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-purple-500/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border-2 border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-gradient-to-r from-orange-500/20 to-purple-600/20 rounded-full blur-xl"></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 max-w-7xl">
        {/* HEADER - ESTILO SUPERHÉROE */}
        <div className="text-center mb-16 relative">
          {/* Badge de poder */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-purple-600/20 backdrop-blur-sm px-6 py-2 rounded-full border border-orange-500/30 mb-6">
            <span className="text-2xl">🦸</span>
            <span className="text-white/90 text-sm font-medium tracking-wider">{t("discoverSuperpowers")}</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="relative">
              {t("courseTitle")}
              <span className="absolute -inset-2 bg-gradient-to-r from-orange-500/30 to-purple-600/30 blur-2xl"></span>
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-orange-400 bg-clip-text text-transparent bg-300% animate-gradient text-6xl md:text-7xl">
              {t("superAdventure")}
            </span>
          </h2>
          
          <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
            {t("courseSubtitle")}
          </p>

          {/* Separador con símbolos */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <span className="text-orange-400 text-2xl animate-pulse">⚡</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
          </div>
        </div>

        {/* SELECTOR DE MODO - INDIVIDUAL VS PAREJA */}
        <div className="flex justify-center mb-16">
          <div className="bg-purple-900/60 backdrop-blur-xl p-1.5 rounded-2xl border border-white/10 inline-flex shadow-2xl">
            <button
              onClick={() => setActiveTab('individual')}
              className={`relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 ${
                activeTab === 'individual'
                  ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-2xl">🦸</span>
                {t("titleIndividual")}
              </span>
              {activeTab === 'individual' && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('couple')}
              className={`relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 ${
                activeTab === 'couple'
                  ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-2xl">👥</span>
                {t("titleCouple")}
              </span>
              {activeTab === 'couple' && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
              )}
            </button>
          </div>
        </div>

        {/* CONTENIDO PRINCIPAL - TARJETA DE PODER */}
        <div className="relative group">
          {/* Múltiples capas de glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition duration-700"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-orange-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-700"></div>
          
          <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
            
            {/* Barra superior de poder */}
            <div className="h-2 bg-gradient-to-r from-orange-500 via-purple-600 to-orange-500"></div>
            
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                
                {/* COLUMNA IZQUIERDA - ICONO Y TÍTULO */}
                <div className="relative">
                  {/* Círculo de poder */}
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse-slow"></div>
                    <div className="relative w-32 h-32 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-6xl">
                        {activeTab === 'individual' ? '🦸' : '👥'}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mt-8 mb-4">
                    {activeTab === 'individual' ? t("titleIndividual") : t("titleCouple")}
                  </h3>
                  
                  {/* Stats de poder */}
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1 text-orange-300">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                      {activeTab === 'individual' ? t("oneTeacher") : t("twoStudents")}
                    </span>
                    <span className="flex items-center gap-1 text-purple-300">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse animation-delay-1000"></span>
                      {activeTab === 'individual' ? t("fullyPersonalized") : t("morePractice")}
                    </span>
                  </div>
                </div>
                
                {/* COLUMNA DERECHA - DESCRIPCIÓN */}
                <div className="relative">
                  <span className="absolute -top-4 -left-4 text-6xl text-orange-500/20 font-serif">"</span>
                  <p className="text-white/90 text-xl leading-relaxed font-light relative z-10">
                    {activeTab === 'individual' ? t("titleIndividualP") : t("titleCoupleP")}
                  </p>
                  
                  {/* Beneficios extra */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-white/70">
                        <span className="text-orange-400">✓</span>
                        <span className="text-sm">{t("flexibleSchedules")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <span className="text-purple-400">✓</span>
                        <span className="text-sm">{t("materialIncluded")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <span className="text-orange-400">✓</span>
                        <span className="text-sm">{t("continuousFollowUp")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <span className="text-purple-400">✓</span>
                        <span className="text-sm">{t("certification")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TEXTO ADICIONAL - BENEFICIOS EXTRA */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 h-full">
              <span className="text-4xl mb-4 block">🌍</span>
              <h4 className="text-white font-bold text-xl mb-3">{t("intlConnections")}</h4>
              <p className="text-white/70 leading-relaxed">
                {t("courseP1")}
              </p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-orange-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 h-full">
              <span className="text-4xl mb-4 block">🎯</span>
              <h4 className="text-white font-bold text-xl mb-3">{t("interactiveMethod")}</h4>
              <p className="text-white/70 leading-relaxed">
                {t("courseP2")}
              </p>
            </div>
          </div>
        </div>

        {/* CALL TO ACTION - NIVELES Y CONTACTO */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
          
          <div className="relative bg-gradient-to-r from-orange-600/30 to-purple-600/30 backdrop-blur-md p-12 rounded-3xl border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              {/* Info de niveles */}
              <div>
                <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-orange-200 text-sm font-medium mb-4 border border-white/20">
                  🎓 {t("allLevels")}
                </span>
                <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t("courseP3")}
                </h4>
                <div className="flex items-center gap-3 text-white/80">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">A1</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">A2</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">B1</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">B2</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">C1</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">C2</span>
                </div>
              </div>
              
              {/* Botón de contacto */}
              <div className="text-right">
                <Link to="/contact">
                  <button className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full text-white font-bold text-xl hover:scale-105 transition-transform shadow-2xl hover:shadow-orange-500/30 inline-flex items-center gap-3">
                    <span>{t("courseButton")}</span>
                    <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
                  </button>
                </Link>
                <p className="text-white/50 text-sm mt-3">
                  ⚡ {t("freeTrialClass")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SEPARADOR INFERIOR ÉPICO */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-8 py-3 bg-purple-900/60 backdrop-blur-sm rounded-full text-white/60 text-sm border border-white/20 inline-flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              🦸‍♂️ {t("languageSuperhero")} 🦸‍♀️
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-1000"></span>
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* CSS PERSONALIZADO */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.1; }
        }
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes shoot {
          0% { transform: translateX(-100px) translateY(-100px) rotate(0deg); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% { transform: translateX(100vw) translateY(100vh) rotate(45deg); opacity: 0; }
        }
        .animate-shoot {
          animation: shoot 10s linear infinite;
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
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
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
};

export default Courses;