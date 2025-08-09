import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageProvider";


import { useNavigate } from "react-router-dom";

function Login ({setAuth}) {
    const navigate = useNavigate()
    // const { t } = useLanguage();
   

    const handleLogin = () => {
        setAuth(true)
        navigate("/logout")
    }

    const handleHome = () => {
        setAuth(true)
        navigate("/home")
    }

    const handleAbout = () => {
        setAuth (true)
        navigate("/about")
    }
     const handleRegister = () => {
        setAuth (true)
        navigate("/register")
    }
    const { t } = useLanguage();

    return(
        <div className="button_5">
            <h1 style={{textAlign: "center"}}>{t("log")}</h1>
            <button onClick={handleLogin}>{t("login")}</button>
            <button onClick={handleRegister}>{t("register")}</button>

        </div>
    )
}

export default Login