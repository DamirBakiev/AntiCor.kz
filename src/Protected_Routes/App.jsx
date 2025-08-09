import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './Login'
import Dashboard from './Dashboard'
import ProtectedRoute from "./ProtectedRoute";
import Home from './Home'
import About from './About'
import Register from './Register'
import Project from './Project'
import Footer from './Footer'
import Header from './Header'
import { LanguageProvider } from "./LanguageProvider";
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
import Logout from "./logout";
// import CaseAnalyzer from "./CaseAnalyzer";
import Report from "./Report";
import GeminiConsultant from "./GeminiConsultant";
import Profile from "./Profile";





function App() {
   const [isAuth, setAuth] = useState(() => {
  return localStorage.getItem("isAuthenticated") === "true";
});

    return(
        <div>
           <LanguageProvider>
            <Router>
               <Header/>
                
                <Routes>
                
                 <Route path="/" element={<Login setAuth={setAuth}/>}/>
                 <Route path="/profile" element={
                    <ProtectedRoute isAuth={isAuth}>
                    <Profile/>
                    </ProtectedRoute>}/>
                <Route path="/report" element={<Report />} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/logout" element={<Logout/>} />

                <Route path="/home" element={<Home/>}/>
                

                <Route path="/dashboard" element={
                    <ProtectedRoute isAuth={isAuth}>
                    <Dashboard/>
                    </ProtectedRoute>}/>

                  <Route path="/about" element={
                    <ProtectedRoute isAuth={isAuth}>
                    <About/>
                    </ProtectedRoute>}/>
                     
                      <Route path="/register" element={<Register/>} />
                      
                     
                      <Route path="/project" element={
                    <ProtectedRoute isAuth={isAuth}>
                    <Project/>
                    </ProtectedRoute>}/>

                    <Route path="/footer" element={<Footer/>}/>
                   
                </Routes>
            </Router>
            <Footer/>
            </LanguageProvider>
     
        </div>
    )
}

export default App