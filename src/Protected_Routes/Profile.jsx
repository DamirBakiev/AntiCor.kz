import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "./LanguageProvider";


const Profile = () => {
  const { t } = useLanguage();
  const [user, setUser] = useState({});
  const [articles, setArticles] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user")) || {
      name: "Аноним",
      email: "user@example.com",
      avatar: "https://via.placeholder.com/150"
    };
    setUser(storedUser);

    setArticles([
      { id: 1, title: "Борьба с коррупцией в образовании", date: "2025-08-01" },
      { id: 2, title: "Как улучшить прозрачность тендеров", date: "2025-07-15" },
    ]);

    setRecommendations([
      "Создать единый портал открытых данных",
      "Внедрить независимый аудит госзакупок",
    ]);
  }, []);

  // Обработка загрузки нового аватара
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

  // Клик по аватару вызывает выбор файла
  const triggerFileSelect = () => {
    fileInputRef.current.click();
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
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>

      {/* Статистика */}
      <div className="profile-stats">
        <div className="stat-card">
          <span className="stat-number">12</span>
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

      {/* Статьи */}
      <div className="profile-section">
        <h3>{t("my_articles")}</h3>
        {articles.length > 0 ? (
          <ul>
            {articles.map((a) => (
              <li key={a.id}>
                <strong>{a.title}</strong> <span>({a.date})</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>{t("no_articles")}</p>
        )}
      </div>

      {/* Рекомендации */}
      <div className="profile-section">
        <h3>{t("my_recommendations")}</h3>
        {recommendations.length > 0 ? (
          <ul>
            {recommendations.map((rec, i) => (
              <li key={i}>{rec}</li>
            ))}
          </ul>
        ) : (
          <p>{t("no_recommendations")}</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
