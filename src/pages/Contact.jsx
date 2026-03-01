// components/Contact.jsx
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import { heropic } from "../assets/export";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      
      // Resetear mensaje de éxito después de 5 segundos
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-24">
      {/* Header */}
      <Header />
      
      {/* Fondo consistente */}
      <div className="absolute inset-0 bg-purple-950/40 backdrop-blur-sm"></div>
      
      {/* ARTE ÉPICO - ESTILO CONTACTO/COMUNICACIÓN */}
      
      {/* Capa 1: Ondas de sonido/comunicación */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#9333ea" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {[...Array(10)].map((_, i) => (
            <path
              key={i}
              d={`M0 ${500 + i * 50} C 250 ${400 + i * 30}, 750 ${600 + i * 30}, 1000 ${500 + i * 50}`}
              stroke="url(#waveGradient)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="10,10"
              opacity="0.3"
              className="animate-wave"
            />
          ))}
        </svg>
      </div>

      {/* Capa 2: Iconos de comunicación flotantes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 text-8xl animate-float-slow">📱</div>
        <div className="absolute bottom-40 right-20 text-8xl animate-float-slow animation-delay-2000">💬</div>
        <div className="absolute top-1/3 right-1/4 text-7xl animate-float-slow animation-delay-4000">📧</div>
        <div className="absolute bottom-1/3 left-1/4 text-7xl animate-float-slow animation-delay-1000">📞</div>
        <div className="absolute top-2/3 left-1/3 text-6xl animate-float-slow animation-delay-3000">✉️</div>
        <div className="absolute bottom-2/3 right-1/3 text-6xl animate-float-slow animation-delay-2500">📍</div>
        <div className="absolute top-40 right-40 text-7xl animate-float-slow animation-delay-1500">🗺️</div>
        <div className="absolute bottom-40 left-40 text-7xl animate-float-slow animation-delay-3500">⏰</div>
      </div>

      {/* Capa 3: Partículas de mensajes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full animate-float-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 15}s`,
              opacity: Math.random() * 0.4,
              width: `${1 + Math.random() * 4}px`,
              height: `${1 + Math.random() * 4}px`
            }}
          />
        ))}
      </div>

      {/* Capa 4: Círculos de conexión */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-orange-500/30 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border-2 border-purple-500/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full"></div>
      </div>

      <div className="relative container mx-auto px-4 max-w-6xl">
        {/* HEADER - ESTILO CONTACTO */}
        <div className="text-center mb-16 relative">
          {/* Badge de contacto */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-purple-600/20 backdrop-blur-sm px-6 py-2 rounded-full border border-orange-500/30 mb-6">
            <span className="text-2xl">💬</span>
            <span className="text-white/90 text-sm font-medium tracking-wider">{t("contactBadge")}</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="relative">
              {t("letsTalk")}
              <span className="absolute -inset-2 bg-gradient-to-r from-orange-500/30 to-purple-600/30 blur-2xl"></span>
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-orange-400 bg-clip-text text-transparent bg-300% animate-gradient">
              {t("aboutYourFuture")}
            </span>
          </h2>
          
          <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
            {t("contactHeroText")}
          </p>

          {/* Estadísticas de respuesta */}
          <div className="flex justify-center items-center gap-8 mt-10">
            <div className="flex items-center gap-2">
              <span className="text-3xl">⚡</span>
              <span className="text-white/70">{t("response24h")}</span>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🌍</span>
              <span className="text-white/70">{t("multilingualSupport")}</span>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🔒</span>
              <span className="text-white/70">{t("secureData")}</span>
            </div>
          </div>

          {/* Separador decorativo */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <span className="text-orange-400 text-2xl animate-pulse">✦</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
          </div>
        </div>

        {/* GRID PRINCIPAL - FORMULARIO + IMAGEN */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA - FORMULARIO */}
          <div className="relative group">
            {/* Múltiples capas de glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition duration-700"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-orange-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-700"></div>
            
            <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl p-8 md:p-10">
              
              {/* Barra superior */}
              <div className="h-1.5 bg-gradient-to-r from-orange-500 via-purple-600 to-orange-500 absolute top-0 left-0 right-0"></div>
              
              {/* Mensaje de éxito */}
              {isSubmitted && (
                <div className="mb-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl text-white flex items-center gap-3 animate-slideDown">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-semibold">{t("messageSentTitle")}</p>
                    <p className="text-white/70 text-sm">{t("messageSentText")}</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Campo: Nombre */}
                <div className="relative group/input">
                  <label className="block text-white/80 text-sm font-medium mb-2 ml-1">
                    {t("fullNameLabel")} <span className="text-orange-400">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-xl">👤</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t("fullNamePlaceholder")}
                      className="w-full pl-12 pr-4 py-3.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 to-purple-600/0 group-hover/input:from-orange-500/5 group-hover/input:to-purple-600/5 transition-all pointer-events-none"></div>
                  </div>
                </div>

                {/* Campo: Teléfono */}
                <div className="relative group/input">
                  <label className="block text-white/80 text-sm font-medium mb-2 ml-1">
                    {t("phoneLabel")} <span className="text-white/40 text-xs ml-1">({t("optional")})</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-xl">📱</span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("phonePlaceholder")}
                      className="w-full pl-12 pr-4 py-3.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Campo: Email */}
                <div className="relative group/input">
                  <label className="block text-white/80 text-sm font-medium mb-2 ml-1">
                    {t("emailLabel")} <span className="text-orange-400">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-xl">📧</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t("emailPlaceholder")}
                      className="w-full pl-12 pr-4 py-3.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Campo: Mensaje */}
                <div className="relative group/input">
                  <label className="block text-white/80 text-sm font-medium mb-2 ml-1">
                    {t("messageLabel")} <span className="text-orange-400">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-5 text-white/40 text-xl">💬</span>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder={t("messagePlaceholder")}
                      className="w-full pl-12 pr-4 py-3.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Botón de envío */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full group/btn overflow-hidden"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-xl blur-xl opacity-50 group-hover/btn:opacity-75 transition duration-700"></div>
                    <div className="relative px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 rounded-xl text-white font-bold text-lg hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                          <span>{t("sending")}</span>
                        </>
                      ) : (
                        <>
                          <span>{t("sendMessage")}</span>
                          <span className="text-2xl group-hover/btn:translate-x-1 transition-transform">→</span>
                        </>
                      )}
                    </div>
                  </button>
                  
                  <p className="text-white/40 text-xs text-center mt-4">
                    ✦ {t("dataPrivacy")} ✦
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* COLUMNA DERECHA - IMAGEN E INFO */}
          <div className="relative">
            <div className="sticky top-32">
              {/* Imagen principal */}
              <div className="relative group mb-8">
                {/* Múltiples capas de glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-700"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-orange-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-700"></div>
                
                <div className="relative overflow-hidden rounded-3xl border-4 border-white/20 shadow-2xl">
                  <img
                    src={heropic}
                    alt="Contact Lingolandias"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-transparent to-transparent"></div>
                  
                  {/* Badge flotante */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-purple-900/80 backdrop-blur-xl p-4 rounded-xl border border-white/20">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">💬</span>
                        <div>
                          <p className="text-white font-semibold">{t("response24h")}</p>
                          <p className="text-white/60 text-sm">{t("businessHours")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Información de contacto adicional */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-orange-500/30 transition-colors">
                  <span className="text-2xl mb-2 block">📧</span>
                  <p className="text-white/80 text-xs font-medium">Email</p>
                  <p className="text-white text-sm">hola@lingolandias.com</p>
                </div>
                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors">
                  <span className="text-2xl mb-2 block">📱</span>
                  <p className="text-white/80 text-xs font-medium">Teléfono</p>
                  <p className="text-white text-sm">+34 123 456 789</p>
                </div>
                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-orange-500/30 transition-colors">
                  <span className="text-2xl mb-2 block">📍</span>
                  <p className="text-white/80 text-xs font-medium">{t("officeLabel")}</p>
                  <p className="text-white text-sm">Madrid, España</p>
                </div>
                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors">
                  <span className="text-2xl mb-2 block">🌍</span>
                  <p className="text-white/80 text-xs font-medium">{t("languagesLabel")}</p>
                  <p className="text-white text-sm">ES · EN · PL</p>
                </div>
              </div>

              {/* Badge de confianza */}
              <div className="mt-6 p-4 bg-gradient-to-r from-orange-500/10 to-purple-600/10 backdrop-blur-sm rounded-xl border border-white/10 text-center">
                <span className="text-3xl mb-2 block">🔒</span>
                <p className="text-white/70 text-xs">
                  {t("dataProtection")}
                </p>
              </div>
            </div>
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
              📱 · 💬 · 📧 · 📞 · {t("writeUs")} · 📍 · 🗺️ · ⏰
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-1000"></span>
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* CSS PERSONALIZADO */}
      <style>{`
        @keyframes wave {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-wave {
          animation: wave 20s linear infinite;
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

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
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

export default Contact;