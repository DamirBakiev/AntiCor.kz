import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "./LanguageProvider";

const Project = () => {
  const navigate = useNavigate();
  const data = [
    { region: "Восточно-Казахстанская область (ВКО)", cases: 140 },
    { region: "Астана", cases: 110 },
    { region: "Алматы", cases: 95 },
    { region: "Караганда", cases: 90 },
    { region: "Туркестан", cases: 85 },
    { region: "Кызылорда", cases: 82 },
    { region: "Павлодар", cases: 78 },
    { region: "Атырау", cases: 70 },
    { region: "Мангистау", cases: 65 },
    { region: "Костанай", cases: 60 },
    { region: "Актобе", cases: 55 },
    { region: "Жамбыл", cases: 50 },
    { region: "Улытау", cases: 47 },
    { region: "Северный Казахстан", cases: 42 },
    { region: "Акмола", cases: 40 },
    { region: "Жетысу", cases: 33 },
    { region: "Западный Казахстан", cases: 30 },
  ];

  const containerStyle = {
    padding: "40px",
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "#fdfdfd",
    fontFamily: "'Segoe UI', sans-serif",
    boxSizing: "border-box"
  };

  const headingStyle = {
    fontSize: "28px",
    color: "#2c3e50",
    marginBottom: "20px",
    textAlign: "center",
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: '#333',
    marginBottom: '20px',
    lineHeight: "1.7"
  };

  const buttonStyle = {
    padding: "14px 32px",
    fontSize: "18px",
    backgroundColor: "#0077cc",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    display: "block",
    margin: "40px auto 0",
    boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
    transition: "background-color 0.3s ease"
  };
  const { t } = useLanguage();

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>{t("pro_1")}</h2>
      <p style={paragraphStyle}>{t("profile_1")}</p>

      <h2 style={headingStyle}>{t("pro_2")}</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", marginBottom: "40px" }}>
        <thead style={{ backgroundColor: "#f9f9f9" }}>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "12px" }}>{t("profile_2")}</th>
            <th style={{ border: "1px solid #ccc", padding: "12px" }}>{t("profile_3")}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((regionData, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#fff" : "#f7f7f7" }}>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{regionData.region}</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{regionData.cases}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={headingStyle}>{t("pro_3")}</h2>
      <p style={paragraphStyle}>{t("profile_4")}</p>
      <p style={paragraphStyle}>{t("profile_5")}</p>
      <p style={paragraphStyle}>{t("profile_6")}</p>
      <p style={paragraphStyle}>{t("profile_7")}</p>

      <h2 style={headingStyle}>{t("pro_4")}</h2>
      <ul>
        <li style={paragraphStyle}>{t("profile_8")}</li>
        <li style={paragraphStyle}>{t("profile_9")}</li>
        <li style={paragraphStyle}>{t("profile_10")}</li>
        <li style={paragraphStyle}>{t("profile_11")}</li>
      </ul>

      <h2 style={headingStyle}>{t("pro_5")}</h2>
      <p style={paragraphStyle}>{t("profile_12")}</p>

      <button style={buttonStyle} onClick={() => navigate('/about')}>{t("tn")}</button>
    </div>
  );
};

export default Project;
