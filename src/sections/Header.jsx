import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: t("home") },
    { path: "/courses", label: t("courses") },
    { path: "/team", label: t("teachers") },
    { path: "/test", label: t("test") },
    // { path: "/collaboration", label: t("collaboration") },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-[#0B1E33]/90 backdrop-blur-xl border-b border-[#2C3E6E]/50 py-3 shadow-2xl shadow-[#0B1E33]/50' 
          : 'bg-transparent py-6'
      }`}
    >
      {/* Efecto de estrella fugaz en el header al hacer scroll */}
      {isScrolled && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-20 h-20 bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 animate-shimmer"></div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo con Link y imagen - EFECTO CÓSMICO */}
          <Link to="/" className="relative group">
            {/* Múltiples capas de glow cósmico */}
            <div className={`absolute -inset-3 bg-gradient-to-r from-[#1A2F4F] to-[#2C3E6E] rounded-lg blur-xl transition-all duration-500 ${
              isScrolled ? 'opacity-40' : 'opacity-0 group-hover:opacity-60'
            }`}></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-[#2C3E6E] to-[#1A2F4F] rounded-lg blur-lg transition-all duration-500 opacity-0 group-hover:opacity-40"></div>
            
            {/* Logo con brillo estelar */}
            <div className="relative">
              <img
                src={logo}
                alt="Lingolandias"
                className="relative h-12 w-auto object-contain brightness-0 invert transition-all duration-500 group-hover:scale-105"
                width="197"
                height="48"
              />
              {/* Punto de luz en el logo */}
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping opacity-75"></span>
            </div>
          </Link>

          {/* Desktop Navigation - ESTILO ESPACIAL */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-5 py-2.5 text-white/90 hover:text-white transition-all duration-300 group overflow-hidden rounded-xl ${
                    isActive ? 'text-white' : ''
                  }`}
                >
                  {/* Fondo de nebulosa en hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-[#1A2F4F]/0 via-[#2C3E6E]/20 to-[#1A2F4F]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></span>
                  
                  {/* Efecto de estrella activa */}
                  {isActive && (
                    <span className="absolute inset-0 bg-[#2C3E6E]/30 rounded-xl">
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full animate-ping"></span>
                    </span>
                  )}
                  
                  <span className="relative z-10 font-medium flex items-center gap-2">
                    {link.label}
                    {isActive && (
                      <span className="w-1.5 h-1.5 bg-[#44A1A0] rounded-full animate-pulse"></span>
                    )}
                  </span>
                  
                  {/* Línea inferior con gradiente cósmico */}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#44A1A0] to-[#2C3E6E] transition-all duration-300 ${
                    isActive ? 'w-3/4' : 'w-0 group-hover:w-1/2'
                  }`}></span>
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions - ESTILO CÓSMICO */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className={`relative group px-6 py-2.5 rounded-full text-white font-semibold transition-all duration-300 overflow-hidden ${
              isScrolled
                ? 'bg-[#1A2F4F]/50 backdrop-blur-sm border border-[#2C3E6E] hover:border-[#44A1A0]'
                : 'bg-white/10 backdrop-blur-sm border border-white/30 hover:border-[#44A1A0]'
            }`}>
              {/* Efecto de onda cósmica */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#44A1A0]/0 via-[#44A1A0]/20 to-[#44A1A0]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%]"></span>
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-[#44A1A0] text-lg">✦</span>
                {t("contact")}
              </span>
            </Link>
            
            <a href="https://wa.me/447578146264" target="_blank" rel="noopener noreferrer" className="relative group px-6 py-2.5 bg-gradient-to-r from-[#1A2F4F] to-[#2C3E6E] rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-2xl shadow-[#0B1E33]/50 overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%]"></span>
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                {t("begin")}
              </span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#25D366] rounded-full animate-ping"></span>
            </a>
          </div>

          {/* Mobile Menu Button - ESTILO CÓSMICO */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="lg:hidden relative w-12 h-12 rounded-xl bg-[#1A2F4F]/50 backdrop-blur-sm border border-[#2C3E6E] flex items-center justify-center text-white hover:border-[#44A1A0] transition-all group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#44A1A0]/0 via-[#44A1A0]/20 to-[#44A1A0]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            <svg
              className="w-6 h-6 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
            {/* Indicador de menú abierto */}
            {isOpen && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#44A1A0] rounded-full animate-ping"></span>
            )}
          </button>
        </nav>

        {/* Mobile Menu - ESTILO GALAXIA */}
        <div
          className={`lg:hidden absolute left-0 right-0 top-full mt-2 mx-4 transition-all duration-500 ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="relative">
            {/* Glow cósmico */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1A2F4F] to-[#2C3E6E] rounded-2xl blur-xl opacity-50"></div>
            
            <div className={`relative ${
              isScrolled 
                ? 'bg-[#0B1E33]/95 backdrop-blur-xl border border-[#2C3E6E]' 
                : 'bg-[#0B1E33]/90 backdrop-blur-xl border border-[#2C3E6E]/50'
            } rounded-2xl p-4 shadow-2xl shadow-[#0B1E33]/50`}>
              
              {/* Estrellas decorativas en móvil */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full animate-ping opacity-30"></div>
                <div className="absolute bottom-2 right-4 w-1.5 h-1.5 bg-[#44A1A0] rounded-full animate-ping animation-delay-1000 opacity-30"></div>
              </div>

              <div className="relative flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`relative px-4 py-3.5 rounded-xl transition-all duration-300 group ${
                        isActive 
                          ? 'bg-gradient-to-r from-[#1A2F4F] to-[#2C3E6E] text-white border border-[#44A1A0]/50' 
                          : 'text-white/90 hover:bg-[#1A2F4F]/50 hover:border-[#2C3E6E] border border-transparent'
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-between">
                        <span className="flex items-center gap-3">
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            isActive ? 'bg-[#44A1A0] animate-pulse' : 'bg-white/30'
                          }`}></span>
                          {link.label}
                        </span>
                        {isActive && (
                          <span className="text-[#44A1A0] text-sm">✦</span>
                        )}
                      </span>
                    </Link>
                  );
                })}
                
                <div className="h-px bg-gradient-to-r from-transparent via-[#2C3E6E] to-transparent my-2"></div>
                
                <Link to="/contact" onClick={() => setIsOpen(false)} className="px-4 py-3.5 text-white/90 hover:bg-[#1A2F4F]/50 rounded-xl transition-all duration-300 text-left flex items-center justify-between group">
                  <span className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#44A1A0]/50 rounded-full"></span>
                    {t("contact")}
                  </span>
                  <span className="text-[#44A1A0] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
                
                <a href="https://wa.me/447578146264" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="mt-2 px-4 py-3.5 bg-gradient-to-r from-[#1A2F4F] to-[#2C3E6E] rounded-xl text-white font-semibold flex items-center justify-center gap-2 border border-[#25D366]/30 hover:scale-[1.02] transition-transform">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  {t("begin")}
                  <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS personalizado para animaciones */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(300%) rotate(45deg); }
        }
        .animate-shimmer {
          animation: shimmer 8s infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </header>
  );
};

export default Header;