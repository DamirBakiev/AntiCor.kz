
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [username, setUsername] = useState('');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    setGreeting('Добро пожаловать на главную страницу!');
  }, []);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = () => {
    alert(`Привет, ${username || 'гость'}!`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Главная страница</h1>
      <p>{greeting}</p>

      <div style={{ marginTop: '20px' }}>
        <input 
          type="text" 
          placeholder="Введите ваше имя" 
          value={username} 
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit} style={{ marginLeft: '10px' }}>
          Поздороваться
        </button>
      </div>
    </div>
  );
};

export default Home;

