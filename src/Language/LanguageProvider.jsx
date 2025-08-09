import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  kk: {
    greeting: "Сәлем әлем!",
    selectLanguage: "Тілді таңдаңыз:",
  },
  ru: {
    greeting: "Привет, мир!",
    selectLanguage: "Выберите язык:",
  },
  en: {
    greeting: "Hello, world!",
    selectLanguage: "Select language:",
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("kk");

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
export const useLanguage = () => useContext(LanguageContext);

