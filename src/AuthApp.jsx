import React, { useState } from 'react';

function AuthApp(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    
    console.log('Тіркелді:', emailOrPhone, password);
    setShowRegisterForm(false); 
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '400px', margin: 'auto' }}>
      {!isLoggedIn && !showRegisterForm && (
        <>
          <h2>Жүйеге кіру қажет</h2>
          <button onClick={handleLogin} style={{ marginRight: '10px', backgroundColor: 'aquamarine', display: 'block', paddingRight: '10px'}}>Login</button>
          <button onClick={handleRegisterClick} style={{backgroundColor: 'aquamarine'}}>Register</button>
        </>
      )}

      {isLoggedIn && (
        <>
          <h2>Бастапқы бетке қош келдіңіз</h2>
          <button onClick={handleLogout} style={{backgroundColor: 'aquamarine'}}>Log out</button>
        </>
      )}

      {showRegisterForm && !isLoggedIn && (
        <form onSubmit={handleRegisterSubmit}>
          <h2>Тіркелу</h2>
          <div>
            <label>Email немесе Телефон: </label><br />
            <input
              type="text"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <label>Құпия сөз: </label><br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" style={{ marginTop: '10px', backgroundColor: 'aquamarine' }}>Register</button>
        </form>
      )}
    </div>
  );
};

export default AuthApp;
