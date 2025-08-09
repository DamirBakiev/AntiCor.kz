import React, {createContext, useContext} from "react";
import { useState } from "react";

function Comp1() {
    return(
        <Grandparent/>
    )
}

const ToyContext = createContext()
const ThemeContext = createContext()
const LanguageContext = createContext()

function Grandparent() {
    const [toy, setToy] = useState("Robot")
    const [theme, setTheme] = useState('red')
    const [lan, setLan] = useState('ENG')
    return(
      <div>
        <LanguageContext.Provider value={lan}> 
      <ThemeContext.Provider value={theme}>   
      <ToyContext.Provider value={{lan, setLan}}>
      <Parent/>
      </ToyContext.Provider>
      </ThemeContext.Provider></LanguageContext.Provider>
       
    
      </div>
     
   
      
      
    )
} 

function Parent() {
    return <Child/>
}

function Child() {
    const toy = useContext(ToyContext)
    const theme = useContext(ThemeContext)
    const Language = useContext(LanguageContext)
    return (
        <div style={{backgroundColor: theme}}>{lan.lan === 'eng' ? 'My toy:': lan.lan === 'rus' ? 'Моя игрушка: ':   'Менің ойыншығым:'} {toy}
        <select onChange={(e)=>lan.setLan(e.target.value)}>
        <option value="rus">rus</option>
        <option value="eng">eng</option>
        <option value="kaz">kaz</option>
        </select> 
        </div>
       
    )
}
 export default Comp1
