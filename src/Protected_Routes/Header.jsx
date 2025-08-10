import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageProvider';
import './Sistem.css'


const Header = () => {
  const { changeLanguage, t } = useLanguage();

   const navigate = useNavigate();

    const handleLogout = () => {
  
   localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
    }

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">AntiCor.kz</Link>
      </div>

      <nav className="nav-links">
        <Link style={{fontSize: "10px"}} to="/report">{t("report_title")}</Link>
        <Link to="/home">{t("home")}</Link>
        <Link to="/dashboard">{t("statistics")}</Link>
        <Link to="/project">{t("analysis")}</Link>
        <Link to="/about">{t("about")}</Link>
        <Link to="/profile">{t("profile")}</Link>
        
        <button onClick={changeLanguage} style={{width: "7%", marginLeft: "20px", background: "none", border: "none", fontSize: "20px", cursor: "pointer", textAlign: "center" }}>
          🌐
        </button>
         <button onClick={handleLogout} className="logout-btn">
        Выйти
      </button>
      </nav>
     
      
      
      
       

    </header>
  );
};

export default Header;



