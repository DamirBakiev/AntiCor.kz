import React, { useState } from "react"

function Ternary(){
    const isAdmin = false
    const isSubscribed = true
    const isOnline = false
    const teTEmperature = 35
    const [isDarck, setisDarck] = useState(true)
    return (
        <div>
          {isAdmin && <h1>He is Admin</h1>}
          {isSubscribed && <h2>He is Premium user</h2>} 
          {!isSubscribed && <h3>He not is Premium user</h3>}
          <p>{isOnline ? "🟢User is online" : "🔴User is not online"}</p>
          {/* {teTEmperature>35 ? <p style={{color: "blue"}}>cool</p>: teTEmperature<35 ? <p style={{color: "red"}}>HOt</p>: teTEmperature=35 ? <p style={{color: "orange"}}>norm</p> : <p>unnorma</p>} */}
          <button style={{
            backgroundColor: isDarck ? 'black' : 'white',
            color: isDarck ? 'white' : 'black'
          }}
           onClick={()=> setisDarck(!isDarck)}>{isDarck ? 'Darck' : 'Light'}</button>
        </div>
    )
}

export default Ternary