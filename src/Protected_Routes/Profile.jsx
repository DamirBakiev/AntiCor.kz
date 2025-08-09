import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "./LanguageProvider";
// import "./Profile.css"; 

const generateCases = (count) => {
  const cases = [];
  for (let i = 1; i <= count; i++) {
    cases.push({
      id: i,
      title: `Дело №${i}`,
      info: `Подробная информация по делу №${i}. Это пример описания решённого дела.`,
    });
  }
  return cases;
};

const generateRecommendations = (count) => {
  const recommendations = [];
  for (let i = 1; i <= count; i++) {
    recommendations.push({
      id: i,
      text: `Рекомендация №${i}: пример содержимого рекомендации.`,
      info: `Подробности по рекомендации №${i}. Дополнительные данные.`,
    });
  }
  return recommendations;
};

const generateArticles = (count) => {
  const articles = [];
  for (let i = 1; i <= count; i++) {
    articles.push({
      id: i,
      title: `Статья №${i}`,
      date: `2025-08-${(i < 10 ? "0" : "") + i}`,
      info: `Содержание и подробности статьи №${i}. Пример текста статьи.`,
    });
  }
  return articles;
};

const Profile = () => {
  const { t } = useLanguage();
  const [user, setUser] = useState({});
  const [myReports, setMyReports] = useState([]);
  const [cases, setCases] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [articles, setArticles] = useState([]);
  const [expandedCases, setExpandedCases] = useState(new Set());
  const [expandedRecommendations, setExpandedRecommendations] = useState(new Set());
  const [expandedArticles, setExpandedArticles] = useState(new Set());
  const fileInputRef = useRef(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user")) || {
      name: "Аноним",
      email: "user@example.com",
      avatar: "https://via.placeholder.com/150"
    };
    setUser(storedUser);

    const storedReports = JSON.parse(localStorage.getItem("myReports")) || [];
    setMyReports(storedReports);

    const baseCasesCount = 12;
    const baseRecCount = 5;
    const baseArticlesCount = 6;

    const totalCases = baseCasesCount + storedReports.length;
    const totalRec = baseRecCount + storedReports.length;
    const totalArticles = baseArticlesCount + storedReports.length;

    setCases(generateCases(totalCases));
    setRecommendations(generateRecommendations(totalRec));
    setArticles(generateArticles(totalArticles));
  }, []);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedUser = { ...user, avatar: reader.result };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };

  const toggleCase = (id) => {
    setExpandedCases(prev => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  const toggleRec = (id) => {
    setExpandedRecommendations(prev => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  const toggleArticle = (id) => {
    setExpandedArticles(prev => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  return (
    <div className="profile-page">

      {/* Шапка */}
      <div className="profile-header">
        <div className="profile-header-overlay">
          <img
            src={user.avatar}
            alt="Аватар"
            className="profile-avatar"
            onClick={triggerFileSelect}
            title={t("change_avatar")}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleAvatarChange}
          />
          <h2 className="profile-name">{user.name}</h2>
          <p className="profile-email">{user.email}</p>
        </div>
      </div>

      {/* Статистика */}
      <div className="profile-stats">
        <div className="stat-card">
          <span className="stat-number">{cases.length}</span>
          <span className="stat-label">{t("cases_solved")}</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{recommendations.length}</span>
          <span className="stat-label">{t("recommendations_count")}</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{articles.length}</span>
          <span className="stat-label">{t("articles_count")}</span>
        </div>
      </div>

      {/* Решённые дела */}
      <SectionList
        title={t("my_cases") || "Решённые дела"}
        items={cases}
        expandedSet={expandedCases}
        toggle={toggleCase}
        renderTitle={item => `${item.id}. ${item.title}`}
        renderInfo={item => item.info}
      />

      {/* Рекомендации */}
      <SectionList
        title={t("my_recommendations")}
        items={recommendations}
        expandedSet={expandedRecommendations}
        toggle={toggleRec}
        renderTitle={item => `${item.id}. ${item.text}`}
        renderInfo={item => item.info}
      />

      {/* Статьи */}
      <SectionList
        title={t("my_articles")}
        items={articles}
        expandedSet={expandedArticles}
        toggle={toggleArticle}
        renderTitle={item => `${item.id}. ${item.title} (${item.date})`}
        renderInfo={item => item.info}
      />

      {/* Мои анонимные репорты */}
      <div className="profile-section">
        <h3 className="section-title">{t("my_reports")}</h3>
        {myReports.length > 0 ? (
          <ul className="report-list">
            {myReports.map((rep, i) => (
              <li key={i} className="report-item">
                <strong>{rep.location}</strong> — {rep.date} {rep.time}
                <p>{rep.description}</p>
                {rep.evidence && (
                  <div>
                    {rep.evidence.startsWith("data:image") ? (
                      <img src={rep.evidence} alt="Evidence" className="report-evidence-img" />
                    ) : (
                      <a href={rep.evidence} download className="report-evidence-link">📎 Скачать файл</a>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-reports">{t("no_reports")}</p>
        )}
      </div>
    </div>
  );
};

const SectionList = ({ title, items, expandedSet, toggle, renderTitle, renderInfo }) => (
  <div className="profile-section">
    <h3 className="section-title">{title}</h3>
    <ul className="section-list">
      {items.map(item => {
        const isExpanded = expandedSet.has(item.id);
        return (
          <li
            key={item.id}
            className="list-item"
          >
            <div
              onClick={() => toggle(item.id)}
              className="item-title"
              aria-expanded={isExpanded}
            >
              {renderTitle(item)}
              <span className="toggle-arrow">{isExpanded ? "▲" : "▼"}</span>
            </div>
            {isExpanded && (
              <p className="item-info">{renderInfo(item)}</p>
            )}
          </li>
        );
      })}
    </ul>
  </div>
);

export default Profile;


