import React, { useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState(['Анна', 'Борис', 'Виктор']);
  const [newUser, setNewUser] = useState('');

  const handleAddUser = () => {
    if (newUser.trim()) {
      setUsers([...users, newUser.trim()]);
      setNewUser('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Список пользователей</h1>

      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Введите имя"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
      />
      <button onClick={handleAddUser} style={{ marginLeft: '10px' }}>
        Добавить
      </button>
    </div>
  );
};

export default Users;
