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
    localStorage.setItem("isAuthenticated", "true");
setAuth(true);
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

  return (
    <div className="button_5" style={{}}>
     <h1 style={{ textAlign: "center" }}>{t("log")}</h1>

<input
  className="input_11"
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

<input
  className="input_11"
  type="password"
  placeholder={t("password")}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

      {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
      <button onClick={handleLogin}>{t("login")}</button>
      <button onClick={handleRegister}>{t("register")}</button>
    </div>
  );
}

export default Logout;


