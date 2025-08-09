import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageProvider';


const Header = () => {
  const { changeLanguage, t } = useLanguage();
  
  

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">AntiCor.kz</Link>
      </div>

      <nav className="nav-links">
        <Link style={{fontSize: "10px"}} to="/report">{t("report_title")}</Link>
        <Link to="/home">{t("home")}</Link>
        <Link to="/dashboard">{t("statistics")}</Link>
        <Link to="/project">{t("profile")}</Link>
        <Link to="/about">{t("about")}</Link>
        <Link to="/profile">Profile</Link>
        
        <button onClick={changeLanguage} style={{ marginLeft: "20px", background: "none", border: "none", fontSize: "20px", cursor: "pointer" }}>
          🌐
        </button>
        
      </nav>
    </header>
  );
};

export default Header;



