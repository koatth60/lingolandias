// components/Metod.jsx
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Metod = () => {
  const { t } = useTranslation();
  const [openQuestion, setOpenQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      icon: "⏳",
      question: t("methodQ1"),
      answer: t("methodQ1P"),
      color: "from-orange-500 to-orange-400"
    },
    {
      id: 2,
      icon: "🗣️",
      question: t("methodQ2"),
      answer: t("methodQ2P"),
      color: "from-purple-500 to-purple-400"
    },
    {
      id: 3,
      icon: "📝",
      question: t("methodQ3"),
      answer: t("methodQ3P"),
      color: "from-orange-500 to-purple-600"
    },
    {
      id: 4,
      icon: "🔄",
      question: t("methodQ4"),
      answer: t("methodQ4P"),
      color: "from-purple-600 to-orange-500"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Fondo consistente con el body */}
      <div className="absolute inset-0 bg-purple-950/40 backdrop-blur-sm"></div>
      
      {/* Elementos artísticos EXCLUSIVOS para Metod */}
      
      {/* Círculos concéntricos animados */}
      <div className="absolute top-20 right-20 opacity-20">
        <div className="relative">
          <div className="w-64 h-64 border-2 border-orange-500/30 rounded-full animate-ping-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-purple-500/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-orange-500/20 to-purple-600/20 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Líneas de energía */}
      <div className="absolute left-10 bottom-20 opacity-10">
        <svg width="300" height="200" viewBox="0 0 300 200">
          <path d="M0 100 C 50 20, 100 180, 150 100 S 250 20, 300 100" stroke="url(#gradientEnergy)" strokeWidth="2" fill="none" strokeDasharray="8 8">
            <animate attributeName="stroke-dashoffset" from="0" to="1000" dur="30s" repeatCount="indefinite" />
          </path>
          <defs>
            <linearGradient id="gradientEnergy" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Partículas de aprendizaje */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-5 animate-float-random"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          >
            {['📚', '🗣️', '✨', '💬', '🎯', '🌟', '⚡', '💡'][i % 8]}
          </div>
        ))}
      </div>

      <div className="relative container mx-auto px-4 max-w-7xl">
        {/* Header - ESPECTACULAR */}
        <div className="text-center mb-20 relative">
          {/* Corona decorativa */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-10 text-7xl opacity-20 animate-pulse-slow">👑</div>
          
          <div className="inline-block relative">
            <span className="absolute -inset-10 bg-gradient-to-r from-orange-500/30 to-purple-600/30 rounded-full blur-3xl"></span>
            <h2 className="relative text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-orange-400 bg-clip-text text-transparent bg-300% animate-gradient">
                {t("methodH")}
              </span>
            </h2>
          </div>
          
          {/* Línea decorativa con brillo */}
          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <span className="text-orange-400 text-2xl animate-pulse">✦</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
        </div>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Columna izquierda - Filosofía del método */}
          <div className="relative">
            {/* Tarjeta principal - Enfoque holístico */}
            <div className="sticky top-32">
              <div className="relative group">
                {/* Múltiples capas de glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition duration-700"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-orange-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-700"></div>
                
                <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-2xl">
                  {/* Icono flotante */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-600 rounded-2xl rotate-12 flex items-center justify-center shadow-2xl group-hover:rotate-45 transition-transform duration-500">
                    <span className="text-3xl">✨</span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl">🎯</span>
                    <div>
                      <span className="px-4 py-1.5 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-200 text-sm font-medium">
                        Filosofía única
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-white/95 text-xl leading-relaxed font-light">
                    {t("methodP")}
                  </p>
                  
                  {/* Stats decorativas del método */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">100%</span>
                      <p className="text-white/60 text-xs mt-1">Personalizado</p>
                    </div>
                    <div className="text-center">
                      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-300">0</span>
                      <p className="text-white/60 text-xs mt-1">Estrés</p>
                    </div>
                    <div className="text-center">
                      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">24/7</span>
                      <p className="text-white/60 text-xs mt-1">Flexibilidad</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Preguntas frecuentes */}
          <div className="space-y-4">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 text-orange-200 text-sm uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                Resolvemos tus dudas
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse animation-delay-1000"></span>
              </span>
              <h3 className="text-3xl font-bold text-white mt-2">
                Preguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">frecuentes</span>
              </h3>
            </div>

            {questions.map((q) => (
              <div
                key={q.id}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${q.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
                
                <div className="relative bg-purple-900/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
                  {/* Botón de la pregunta */}
                  <button
                    onClick={() => setOpenQuestion(openQuestion === q.id ? null : q.id)}
                    className="w-full flex items-center gap-4 p-6 text-left transition-all"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${q.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                      {q.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg group-hover:text-orange-200 transition-colors">
                        {q.question}
                      </h4>
                    </div>
                    
                    <div className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ${
                      openQuestion === q.id ? 'rotate-180 bg-gradient-to-r from-orange-500 to-purple-600' : ''
                    }`}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {/* Respuesta con animación */}
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      openQuestion === q.id
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 pt-0 border-t border-white/10">
                      <div className="flex gap-3">
                        <span className="text-orange-400 text-xl">💬</span>
                        <p className="text-white/80 leading-relaxed">
                          {q.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Tarjeta de CTA adicional */}
            <div className="mt-8 p-6 bg-gradient-to-r from-orange-600/20 to-purple-600/20 backdrop-blur-md rounded-2xl border border-white/10">
              <div className="flex items-center gap-4">
                <span className="text-3xl">🎓</span>
                <div className="flex-1">
                  <h4 className="text-white font-semibold">¿Listo para empezar?</h4>
                  <p className="text-white/70 text-sm">Descubre nuestro método en una clase gratuita</p>
                </div>
                <button className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-lg whitespace-nowrap">
                  Clase muestra
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Separador inferior artístico */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-6 py-2 bg-purple-900/60 backdrop-blur-sm rounded-full text-white/60 text-sm border border-white/20">
              ⚡ Aprende sin darte cuenta ⚡
            </span>
          </div>
        </div>
      </div>

      {/* CSS personalizado */}
      <style>{`
        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.1; }
        }
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
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
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 8s ease infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Metod;