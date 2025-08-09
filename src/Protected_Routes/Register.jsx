import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "./LanguageProvider";

function Register({ setAuth }) {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!/^[А-Яа-яA-Za-z\s]+$/.test(formData.name || ""))
      newErrors.name = "Аты тек әріптерден тұруы керек";
    if (!/\S+@\S+\.\S+/.test(formData.email || ""))
      newErrors.email = "Жарамды email енгізіңіз";
    if (!/^\+?\d{10,15}$/.test(formData.phone || ""))
      newErrors.phone = "Жарамды телефон нөмірін енгізіңіз";
    if (
      !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password || "")
    )
      newErrors.password = "Пароль кемінде 8 символ, 1 үлкен әріп, 1 сан, 1 арнайы символ болу керек";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Қайталанған пароль сәйкес емес";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("user", JSON.stringify(formData));
      localStorage.setItem("isAuthenticated", "true");
      setAuth(true);
      navigate("/home");
    }
  };

  const inputStyle = {
    width: "100%", padding: "14px", margin: "12px 0",
    borderRadius: "8px", border: "1px solid #bbb", fontSize: "16px"
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", minHeight: "100vh", alignItems: "center", background: "linear-gradient(135deg, #667eea, #764ba2)", padding: "30px" }}>
      <div style={{ background: "#fff", padding: "35px", borderRadius: "16px", maxWidth: "500px", width: "100%" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>{t("registerTitle")}</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Атыңыз" style={inputStyle} value={formData.name || ""} onChange={handleChange} />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

          <input name="email" placeholder="Email" style={inputStyle} value={formData.email || ""} onChange={handleChange} />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

          <input name="phone" placeholder="Телефон" style={inputStyle} value={formData.phone || ""} onChange={handleChange} />
          {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}

          <input type="password" name="password" placeholder="Құпия сөз" style={inputStyle} value={formData.password || ""} onChange={handleChange} />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

          <input type="password" name="confirmPassword" placeholder="Құпия сөзді қайталаңыз" style={inputStyle} value={formData.confirmPassword || ""} onChange={handleChange} />
          {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword}</p>}

             <button type="submit" style={{ ...inputStyle, background: "#0077cc", color: "white", fontWeight: "bold" }}>
            {t("registerBtn")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
