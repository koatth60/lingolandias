import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
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
    { path: "/test", label: "Test" },
    { path: "/collaboration", label: t("collaboration") },
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
            <button className={`relative group px-6 py-2.5 rounded-full text-white font-semibold transition-all duration-300 overflow-hidden ${
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
            </button>
            
            <button className="relative group px-6 py-2.5 bg-gradient-to-r from-[#1A2F4F] to-[#2C3E6E] rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-2xl shadow-[#0B1E33]/50 overflow-hidden">
              {/* Efecto de estrella fugaz */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%]"></span>
              <span className="relative z-10 flex items-center gap-2">
                <span>🚀</span>
                Comenzar
              </span>
              {/* Punto de luz pulsante */}
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#44A1A0] rounded-full animate-ping"></span>
            </button>
          </div>

          {/* Mobile Menu Button - ESTILO CÓSMICO */}
          <button
            onClick={() => setIsOpen(!isOpen)}
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
                
                <button className="px-4 py-3.5 text-white/90 hover:bg-[#1A2F4F]/50 rounded-xl transition-all duration-300 text-left flex items-center justify-between group">
                  <span className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#44A1A0]/50 rounded-full"></span>
                    {t("contact")}
                  </span>
                  <span className="text-[#44A1A0] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>
                
                <button className="mt-2 px-4 py-3.5 bg-gradient-to-r from-[#1A2F4F] to-[#2C3E6E] rounded-xl text-white font-semibold flex items-center justify-center gap-2 border border-[#44A1A0]/30 hover:scale-[1.02] transition-transform">
                  <span>🚀</span>
                  Comenzar
                  <span className="w-1.5 h-1.5 bg-[#44A1A0] rounded-full animate-pulse"></span>
                </button>
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