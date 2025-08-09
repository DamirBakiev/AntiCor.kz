import React from 'react';
import { useLanguage } from "./LanguageProvider";


import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaTwitter,
  FaFacebookMessenger
} from 'react-icons/fa';


const Footer = () => {
  const { t } = useLanguage();
 
  return (
    <footer className="site-footer">
      <div className="footer-section">
        <h4>Anticor.kz</h4>
        <p>{t("right")}</p>
      </div>

      <div className="footer-section">
        <h4>{t("linkss")}</h4>
        <ul>
          <li><a href="/home">{t("Home_page")}</a></li>
          <li><a href="/about">{t("Contact_us")}</a></li>
          <li><a href="/about">{t("Contact_by")}</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>{t("Contact_by")}</h4>
        <p>+7 (707) 123-45-67</p>
        <p>info@worldcars.kz</p>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer"><FaTiktok /></a>
          <a href="https://wa.me/77071234567" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://www.messenger.com/" target="_blank" rel="noreferrer"><FaFacebookMessenger /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


