import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "./LanguageProvider";


const About = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="about-page">
      <h2 className="about-heading">{t("about")}</h2>
      <p className="about-text">{t("p_0")}
       
      </p>
      <p className="about-text">{t("p_1")}</p>

      <h3 className="about-heading">{t("a_2")}</h3>
      <p className="about-text">{t("p_2")}</p>

      <h4 className="about-heading">{t("a_3")}</h4>
      <p className="about-text">{t("p_3")} </p>
      <p className="about-text">{t("p_4")}</p>

       <hr style={{ margin: "30px 0" }} />

     
      <button className="button-primary" onClick={() => navigate('/home')}>{t("nt")}</button>
    </div>
  );
};

export default About;
