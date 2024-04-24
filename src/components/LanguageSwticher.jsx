import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "pl", lang: "Polski" },
  { code: "en", lang: "English" },
  { code: "es", lang: "Español" }
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage && languages.some(lang => lang.code === storedLanguage)) {
      const selectedLang = languages.find(lang => lang.code === storedLanguage);
      setSelectedLanguage(selectedLang.lang);
      i18n.changeLanguage(storedLanguage);
    } else {
      setSelectedLanguage(languages[0].lang);
      i18n.changeLanguage(languages[0].code);
      localStorage.setItem("selectedLanguage", languages[0].code);
    }
  }, []); // Run only once on component mount

  const handleLanguageClick = ({ lang, code }) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(code);
    localStorage.setItem("selectedLanguage", code);
  };

  const selectedIndex = languages.findIndex(lang => lang.lang === selectedLanguage);

  return (
    <div className="language-container fixed bottom-0 left-[150px] z-20">
      <div
        className="selected-language text-center"
        onClick={() =>
          handleLanguageClick(
            selectedLanguage === "Polski" ? languages[1] : languages[0]
          )
        }
      >
        {selectedLanguage}
      </div>
      <div className="language-options">
        {languages.map((language, index) => (
          <span
            key={language.code}
            onClick={() => handleLanguageClick(language)}
            className={index === selectedIndex ? "selected" : ""}
          >
            {language.lang}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
