import { useEffect, useState } from "react";

function UseEffect(){
    const[plus, setPLus] = useState(0)
    const[minus, setMinus] = useState(0)
    const[data, setData] = useState([])
    const[text, stText] = useState('')
    const[text1, setText1] =  useState('')
    useEffect(() => {
        alert('Count изменен' + minus)
    }, [minus])
    useEffect(() => {
        alert('Cont повышен' + plus)
    }, [plus])

    function get_data(){
        fetch('https://683ffd195b39a8039a5658ce.mockapi.io/flights')
        .then(response => response.json())
        .then(data =>  setData(data))
        .catch(err => alert("ДАнные загружаются"))
    }

    useEffect(() =>{
        alert('Данные обновлены')
    }, [data])
useEffect(()=>{
    alert('Data saved')
}, [text1])
    function save(){
        setText1(text)
        localStorage.setItem('text', text)
    }
    return(
        <div>
            <button onClick={() => setPLus(plus + 1)}>+</button>
            <button onClick={() => setMinus(minus - 1)}>-</button>
            <p>{plus}</p>
            <p>{minus}</p>
            <button onClick={get_data}>Зaгрузить данные</button>

            <input type="text" onChange={(e) => stText(e.target.value)}/> <button onClick={save} >Сохранитть данные</button>
            <p>{text}</p>
        </div>
    )
}

export default UseEffect
