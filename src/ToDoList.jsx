import React, { useState, useEffect } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() =>{
    alert('Данные обновлены')
  }, [tasks])

  const addTask = () => {
    if (!input.trim()) return;
    const newTask = {
      id: Date.now(),
      text: input,
      done: false
    };
    setTasks([...tasks, newTask]);
    setInput('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  const submitEdit = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: editingText } : task));
    setEditingId(null);
    setEditingText('');
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.done;
    if (filter === 'completed') return task.done;
    return true;
  });

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const styles = getStyles(isDarkMode);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📝 My To Do List</h2>

      <div style={styles.topControls}>
        <input
          type="text"
          placeholder="Введите текст..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>Save</button>
      </div>

      <div style={styles.filters}>
        <button onClick={() => setFilter('all')} style={styles.filterButton}>All</button>
        <button onClick={() => setFilter('active')} style={styles.filterButton}>Active</button>
        <button onClick={() => setFilter('completed')} style={styles.filterButton}>Complated</button>
        <button onClick={toggleTheme} style={styles.themeButton}>
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <ul style={styles.list}>
        {filteredTasks.map(task => (
          <li key={task.id} style={styles.listItem}>
            {editingId === task.id ? (
              <>
                <input
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  style={styles.editInput}
                />
                <button onClick={() => submitEdit(task.id)} style={styles.saveButton}>💾</button>
              </>
            ) : (
              <>
                <span
                  onClick={() => toggleTask(task.id)}
                  style={{
                    ...styles.taskText,
                    textDecoration: task.done ? 'line-through' : 'none',
                    color: task.done ? '#999' : styles.taskText.color,
                    cursor: 'pointer'
                  }}
                >
                  {task.text}
                </span>
                <div>
                  <button onClick={() => startEditing(task.id, task.text)} style={styles.editButton}>✏️</button>
                  <button onClick={() => deleteTask(task.id)} style={styles.deleteButton}>❌</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const getStyles = (dark) => ({
  container: {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '20px',
    borderRadius: '10px',
    color: dark ? '#fff' : '#000',
    backgroundColor: dark ? 'black' : 'white',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  topControls: {
    display: 'flex',
    gap: '10px',
    marginBottom: '15px'
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  addButton: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  filters: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px'
  },
  filterButton: {
    flex: 1,
    margin: '0 3px',
    padding: '6px 0',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#ddd',
    cursor: 'pointer'
  },
  themeButton: {
    padding: '6px 12px',
    border: 'none',
    backgroundColor: dark ? '#555' : '#eee',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  list: {
    listStyle: 'none',
    paddingLeft: 0
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 5px',
    borderBottom: `1px solid ${dark ? '#444' : '#ccc'}`
  },
  taskText: {
    fontSize: '16px'
  },
  deleteButton: {
    background: 'none',
    border: 'none',
    fontSize: '16px',
    marginLeft: '8px',
    cursor: 'pointer',
    color: '#e53935'
  },
  editButton: {
    background: 'none',
    border: 'none',
    fontSize: '16px',
    marginLeft: '8px',
    cursor: 'pointer',
    color: '#1976d2'
  },
  editInput: {
    flex: 1,
    padding: '6px',
    borderRadius: '4px',
    border: '1px solid #aaa',
    marginRight: '10px'
  },
  saveButton: {
    border: 'none',
    backgroundColor: '#2e7d32',
    color: '#fff',
    padding: '6px',
    borderRadius: '4px',
    cursor: 'pointer'
  }
});

export default ToDoList;
