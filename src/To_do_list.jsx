// import React, { useState } from 'react';

// function ToDoList(){
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');
//   const[value, setValue] = useState('')
//   const [text, setText] = useState('')

  // const addTask = () => {
  //   if(!taskText.trim()) return;
  //   setTasks([...tasks, {text: taskText, completed: false}]);
  //   setTaskText("")
  // }
  // const toggleComplete = (index)=> {
  //   setTasks(
  //     tasks.map((task, i) => (i=== index ? {...task, completed: !task.completed}: task))
  //   )
  // }
  // return(
  //   <div>
  //     <input onChange={(e)=> setValue(e.target.value)}/> 
      
  //     <button onClick={()=>{
  //       setText(value)
  //       setTasks([...tasks, {text: text, completed: false}])
  //     }
  //     }>Submit</button>
  //     {

  //       tasks.map((task, index)=>{
  //           return(
  //             <div key={index}>
  //                <p style={{
  //                 textDecoration: task.completed ? 'line-through': 'none'
  //                }}>{task.text}</p> <button onClick={()=> toggleComplete(index)}>{task.completed ? '☑️': '❌'}</button>
  //             </div>
  //           )
  //       })
  //     }
  //   </div>
  // )

//   const handleAddTask = () => {
//     if (newTask.trim() === '') return;

//     const task = {
//       id: Date.now(),
//       text: newTask,
//       completed: false
//     };

//     setTasks([...tasks, task]);
//     setNewTask('');
//   };

 
//   const handleDeleteTask = (id) => {
//     setTasks(tasks.filter(task => task.id !== id));
//   };


//   const toggleTaskCompletion = (id) => {
//     setTasks(tasks.map(task => 
//       task.id === id ? { ...task, completed: !task.completed } : task
//     ));
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: 'auto', fontFamily: 'Arial' }}>
//       <h2>📝 Менің тапсырмаларым</h2>

//       <div style={{ display: 'flex', gap: '10px' }}>
//         <input
//           type="text"
//           placeholder="Жаңа тапсырма..."
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//           style={{ flex: 1 }}
//         />
//         <button onClick={handleAddTask}>Қосу</button>
//       </div>

//       <ul style={{ paddingLeft: 0, marginTop: '20px' }}>
//         {tasks.map(task => (
//           <li key={task.id} style={{
//             listStyle: 'none',
//             marginBottom: '10px',
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
       
//           }}>
//             <span onClick={() => toggleTaskCompletion(task.id)} style={{ cursor: 'pointer' }}>
//               {task.text}
//             </span>
//             <button onClick={() => handleDeleteTask(task.id)} style={{ marginLeft: '10px' }}>❌</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ToDoList;




// export default To_do_list;
