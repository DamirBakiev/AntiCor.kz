import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "./LanguageProvider";


function Logout({ setAuth }) {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.removeItem("isAuthenticated");
    setAuth(false);
  }, [setAuth]);

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      if (email === storedUser.email && password === storedUser.password) {
        localStorage.setItem("isAuthenticated", "true");
        setAuth(true);
        navigate("/home");
      } else {
        setError(t("invalidCreds") || "Қате email немесе құпия сөз");
      }
    } else {
      setError(t("noUser") || "Қолданушы табылмады. Алдымен тіркеліңіз.");
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleExit = () => {
    localStorage.clear();
    setAuth(false);
    navigate("/logout");
  };

  return (
    <div className="logout-container">
      <h1>{t("log")}</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder={t("password")}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button className="btn btn-login" onClick={handleLogin}>
        {t("login")}
      </button>
      <button className="btn btn-register" onClick={handleRegister}>
        {t("register")}
      </button>
      <button className="btn btn-exit" onClick={handleExit}>
        Выйти
      </button>
    </div>
  );
}

export default Logout;



