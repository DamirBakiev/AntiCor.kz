import React from "react";
import { useLanguage } from "./LanguageProvider";
import "./App.css"; // Стилиді жалғау

const Main = () => {
  const { language, changeLanguage, t } = useLanguage();

  return (
    <div className="app-container">
      <label>
        {t("selectLanguage")}
        <br />
        <select
          className="language-select"
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="kk">Қазақша</option>
          <option value="ru">Русский</option>
          <option value="en">English</option>
        </select>
      </label>
      <h1>{t("greeting")}</h1>
    </div>
  );
};

export default Main;


