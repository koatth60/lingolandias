import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "pl", lang: "Polski", flag: "🇵🇱" },
  { code: "en", lang: "English", flag: "🇬🇧" },
  { code: "es", lang: "Español", flag: "🇪🇸" }
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      const found = languages.find(lang => lang.code === storedLanguage);
      if (found) {
        setSelectedLanguage(found);
        i18n.changeLanguage(storedLanguage);
      }
    }
  }, [i18n]);

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language.code);
    localStorage.setItem("selectedLanguage", language.code);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 lg:bottom-8 left-6 lg:left-8 2xl:left-[150px] z-50">
      {/* Botón principal - idioma seleccionado */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group"
      >
        {/* Efecto de glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-60 transition duration-500"></div>
        
        {/* Botón con glassmorphism */}
        <div className="relative flex items-center gap-3 bg-purple-900/60 backdrop-blur-xl px-4 py-3 rounded-xl border border-white/20 shadow-xl hover:border-orange-500/50 transition-all">
          {/* Indicador de idioma activo */}
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse border border-white/50"></span>
          
          {/* Bandera y nombre del idioma */}
          <span className="text-2xl">{selectedLanguage.flag}</span>
          <span className="text-white font-medium min-w-[80px] text-left">
            {selectedLanguage.lang}
          </span>
          
          {/* Flecha animada */}
          <svg
            className={`w-5 h-5 text-white/70 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Menú desplegable de idiomas */}
      <div
        className={`absolute bottom-full left-0 mb-2 w-full transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-purple-900/80 backdrop-blur-xl border border-white/20 rounded-xl p-2 shadow-2xl">
          {languages.map((language, index) => (
            <button
              key={language.code}
              onClick={() => handleLanguageClick(language)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all group relative ${
                selectedLanguage.code === language.code
                  ? "bg-gradient-to-r from-orange-500/20 to-purple-600/20 border border-orange-500/50"
                  : "hover:bg-white/10"
              }`}
            >
              {/* Efecto hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-purple-600/0 group-hover:from-orange-500/10 group-hover:to-purple-600/10 rounded-lg transition-all"></div>
              
              {/* Bandera */}
              <span className="text-2xl relative z-10">{language.flag}</span>
              
              {/* Nombre del idioma */}
              <span className={`flex-1 text-left relative z-10 ${
                selectedLanguage.code === language.code
                  ? "text-white font-semibold"
                  : "text-white/80 group-hover:text-white"
              }`}>
                {language.lang}
              </span>
              
              {/* Check de seleccionado */}
              {selectedLanguage.code === language.code && (
                <svg className="w-5 h-5 text-orange-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Versión móvil - Barra inferior (opcional) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-purple-900/80 backdrop-blur-xl border-t border-white/20 p-2 flex justify-center gap-2">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => handleLanguageClick(language)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              selectedLanguage.code === language.code
                ? "bg-gradient-to-r from-orange-500 to-purple-600 text-white"
                : "text-white/70 hover:bg-white/10"
            }`}
          >
            <span className="text-xl">{language.flag}</span>
            <span className="text-sm font-medium hidden xs:block">{language.lang}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;