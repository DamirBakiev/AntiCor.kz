// import React, { useState, useEffect } from 'react';

// const About = () => {
//   const [count, setCount] = useState(0);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     setMessage('Добро пожаловать на страницу О нас!');
//   }, []);

//   const handleClick = () => {
//     setCount(prevCount => prevCount + 1);
//   };

//   return (
//     <div>
//       <h1>О нас</h1>
//       <p>{message}</p>
//       <p>Вы нажали {count} раз(а).</p>
//       <button onClick={handleClick}>Нажми меня</button>
//     </div>
//   );
// };

// export default About;


import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>About Me</h2>
      <p>Мен React және Frontend технологияларын үйреніп жүрген жас маманмын.</p>
      <h1></h1>
      <button onClick={() => navigate('/profile')}>Go to My Profile</button>
    </div>
  );
};

export default About;

