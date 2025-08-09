// import { useState } from "react"

// function Unique_key(){
  
//     // let fruits = [
//     //     {name: 'banana', id: 1},
//     //     {name: 'aple', id: 2},
//     //     {name: 'juise', id: 3 },
//     //     {name: 'orange', id: 4}
//     // ]
     
//     const[value, setValue] = useState('')
//     const[tasks, setTasks] = useState([])
//     const[text, setText] = useState('')

//     return (

//         <div>


 
//             <div>
//                 <input type="text" name="" value={value} onChange={(e)=>{setValue(e.target.value)}}/> <button type="" onClick={()=> {
//                     if(!value.trim())return;
//                     setTasks(value)
//                     setTasks([...tasks, {text: text, completed: false}])
//                     console.log(tasks)
//                 }}>Set exam</button>
//             </div>
//             {tasks!= [] &&
//             <ul>
//                 {tasks.map((n,index)=> {
//                     return<li key={index}>{n.text}</li>
//                 })}
//             </ul>

//             }
//         </div>
//     )
// }

// export default Unique_key