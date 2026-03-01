// components/Footer.jsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-white/10">
      {/* Fondo consistente con blur */}
      <div className="absolute inset-0 bg-purple-950/90 backdrop-blur-xl"></div>
      
      {/* ARTE DE FOOTER - ONDAS Y PARTÍCULAS */}
      
      {/* Ondas decorativas inferiores */}
      <div className="absolute bottom-0 left-0 right-0 opacity-20">
        <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,115.92,120.24,175.31,112.2,237.21,103.85,293.1,89.73,321.39,56.44Z" 
                fill="url(#gradientWave)"></path>
          <defs>
            <linearGradient id="gradientWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#9333ea" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Partículas flotantes estilo constelación */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Líneas de conexión decorativas */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-600/20 to-transparent"></div>

      <div className="relative container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* COLUMNA 1 - LOGO Y DESCRIPCIÓN */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="relative group inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
              <img 
                src={logo} 
                alt="Lingolandias" 
                className="relative h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              {t("footerDesc")}
            </p>
            
            {/* Badge de calificación */}
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 w-fit">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-orange-400 text-sm">★</span>
                ))}
              </div>
              <span className="text-white/80 text-sm font-medium">4.9</span>
              <span className="text-white/40 text-xs">· {t("footerReviews")}</span>
            </div>
          </div>

          {/* COLUMNA 2 - ACADEMIA */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              {t("footAcademy")}
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full"></span>
            </h3>
            
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-white/70 hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-orange-500/50 rounded-full group-hover:bg-orange-500 transition-all"></span>
                  {t("footAbout")}
                </Link>
              </li>
              <li>
                <Link to="/method" className="text-white/70 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-500/50 rounded-full group-hover:bg-purple-500 transition-all"></span>
                  {t("footMethod")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-orange-500/50 rounded-full group-hover:bg-orange-500 transition-all"></span>
                  {t("footContact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3 - CURSOS */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              {t("footCourses")}
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full"></span>
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-center justify-between group">
                <Link to="/courses/english" className="text-white/70 hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span className="text-xl">🇬🇧</span>
                  {t("footEnglish")}
                </Link>
                <span className="text-xs px-2 py-1 bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity">
                  {t("footerPopular")}
                </span>
              </li>
              <li className="flex items-center justify-between group">
                <Link to="/courses/spanish" className="text-white/70 hover:text-purple-400 transition-colors flex items-center gap-2">
                  <span className="text-xl">🇪🇸</span>
                  {t("footSpanish")}
                </Link>
                <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity">
                  {t("footerNew")}
                </span>
              </li>
              <li className="flex items-center justify-between group">
                <Link to="/courses/polish" className="text-white/70 hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span className="text-xl">🇵🇱</span>
                  {t("footPolish")}
                </Link>
                <span className="text-xs px-2 py-1 bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity">
                  {t("footerPro")}
                </span>
              </li>
            </ul>

            {/* Badge de niveles */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-white/50">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                {t("footerAllLevels")}
              </div>
            </div>
          </div>

          {/* COLUMNA 4 - REDES SOCIALES */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              {t("footSocials")}
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full"></span>
            </h3>
            
            <div className="space-y-4">
              {/* Facebook */}
              <a 
                href="https://facebook.com/lingolandias" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between group p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#1877F2]/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#1877F2]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-[#1877F2] font-bold">f</span>
                  </div>
                  <div>
                    <span className="text-white text-sm font-medium">Facebook</span>
                    <p className="text-white/40 text-xs">@lingolandias</p>
                  </div>
                </div>
                <span className="text-white/30 group-hover:text-white transition-colors">→</span>
              </a>
              
              {/* Instagram */}
              <a 
                href="https://instagram.com/lingolandias" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between group p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#E4405F]/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm">📷</span>
                  </div>
                  <div>
                    <span className="text-white text-sm font-medium">Instagram</span>
                    <p className="text-white/40 text-xs">@lingolandias</p>
                  </div>
                </div>
                <span className="text-white/30 group-hover:text-white transition-colors">→</span>
              </a>
              
              {/* Twitter/X */}
              <a 
                href="https://twitter.com/lingolandias" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between group p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm">𝕏</span>
                  </div>
                  <div>
                    <span className="text-white text-sm font-medium">Twitter / X</span>
                    <p className="text-white/40 text-xs">@lingolandias</p>
                  </div>
                </div>
                <span className="text-white/30 group-hover:text-white transition-colors">→</span>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/company/lingolandias" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between group p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#0A66C2]/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#0A66C2]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-[#0A66C2] text-sm">in</span>
                  </div>
                  <div>
                    <span className="text-white text-sm font-medium">LinkedIn</span>
                    <p className="text-white/40 text-xs">/company/lingolandias</p>
                  </div>
                </div>
                <span className="text-white/30 group-hover:text-white transition-colors">→</span>
              </a>
            </div>

            {/* Newsletter */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/60 text-xs mb-3">📬 {t("footerNewsletter")}</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={t("footerEmailPlaceholder")}
                  className="flex-1 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-orange-500/50 transition-colors"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-xl text-white text-sm font-semibold hover:scale-105 transition-transform shadow-lg whitespace-nowrap">
                  {t("footerSend")}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SEPARADOR CON GLOW */}
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-6 py-2 bg-purple-900/80 backdrop-blur-sm rounded-full text-white/40 text-xs border border-white/20">
              {t("footerConnecting")}
            </span>
          </div>
        </div>

        {/* BOTTOM BAR - COPYRIGHT */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/40 text-xs">
            © {currentYear} Lingolandias. {t("footerRights")}
          </div>
          
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-white/40 hover:text-orange-400 text-xs transition-colors">
              {t("footerPrivacy")}
            </Link>
            <Link to="/terms" className="text-white/40 hover:text-purple-400 text-xs transition-colors">
              {t("footerTerms")}
            </Link>
            <Link to="/cookies" className="text-white/40 hover:text-orange-400 text-xs transition-colors">
              Cookies
            </Link>
          </div>

          {/* Hecho con 💜 */}
          <div className="flex items-center gap-1 text-white/30 text-xs">
            <span>{t("footerMadeWith")}</span>
            <span className="text-orange-400 animate-pulse">❤️</span>
            <span>{t("footerInBerlin")}</span>
          </div>
        </div>
      </div>

      {/* CSS personalizado */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;