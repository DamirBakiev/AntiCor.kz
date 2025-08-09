import React from "react";
import { useNavigate } from "react-router-dom";
import photo from '../assets/photo.png';
import sim from '../assets/future.png';
import cor from '../assets/corup.png';
import many from '../assets/many.png';
import ment from '../assets/ment.png';
import korp from '../assets/korp.png';
import dollar from '../assets/dollar.png';
import frend from '../assets/frend.png';
import push from '../assets/welcome.png';
import { useLanguage } from "./LanguageProvider";

import GeminiConsultant from "./GeminiConsultant";



const Home = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();


  const sectionStyle = {
    background: "linear-gradient(145deg, #f0f0f0, #ffffff)",
    padding: "30px",
    borderRadius: "18px",
    marginBottom: "40px",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)"
  };

  const imageStyle = {
    width: "48%",
    borderRadius: "16px",
    transition: "transform 0.3s ease-in-out",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)"
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

  return (
    <div style={{ padding: "40px", maxWidth: "100%", margin: "0 auto", fontFamily: "'Segoe UI', sans-serif" }}>
      <h2 style={headingStyle}>{t("h2")}</h2>

      <div style={{ ...sectionStyle, display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "center" }}>
        <img src={photo} alt="welcome" style={imageStyle} />
        <img src={many} alt="welcome" style={imageStyle} />
      </div>

      <p style={paragraphStyle}>{t("p_5")}</p>

      <h3 style={headingStyle}>{t("h3")}</h3>
      <div style={{ ...sectionStyle, display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "center" }}>
        <img src={sim} alt="welcome" style={imageStyle} />
        <img src={ment} alt="welcome" style={imageStyle} />
      </div>

      <p style={paragraphStyle}>{t("p_6")}</p>

      <h4 style={headingStyle}>{t("h4")}</h4>
      <div style={{ ...sectionStyle, display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "center" }}>
        <img src={cor} alt="welcome" style={imageStyle} />
        <img src={korp} alt="welcome" style={imageStyle} />
      </div>

      <p style={paragraphStyle}>{t("p_7")}</p>

      <h5 style={headingStyle}>{t("h5")}</h5>
      <div style={{ ...sectionStyle, display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "center" }}>
        <img src={dollar} alt="welcome" style={imageStyle} />
        <img src={frend} alt="welcome" style={imageStyle} />
      </div>

      <p style={paragraphStyle}>{t("p_8")}</p>

      <h6 style={{ ...headingStyle, fontSize: "22px" }}>{t("h6")}</h6>

      <img src={push} alt="welcome" style={{ width: "100%", maxWidth: "600px", display: "block", margin: "0 auto 30px", borderRadius: "16px", boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }} />

      
      <div><GeminiConsultant/></div> 
      

      <button style={{ padding: "14px 32px", fontSize: "18px", backgroundColor: "#0077cc", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", display: "block", margin: "0 auto", boxShadow: "0 8px 16px rgba(0,0,0,0.15)", transition: "background-color 0.3s ease" }} onClick={() => navigate('/dashboard')}>
       {t("btn")}
      </button>
    </div>
  );
};

export default Home;