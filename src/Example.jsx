import './App.css'
import { useState } from 'react'
function Example(promps){
    return(
        <div className='class1'>
            <h1>Моя визитная карта</h1>
            <div className='div'>
                <p>Имя: {promps.name}</p>
      <p>Профессия: {promps.age}</p>
      <p>Горорд: {promps.city}</p>
            </div>  

            <div>
                <h2>ProfileCard</h2>
                <p>Bio: {promps.bio}</p>
                <img src={promps.src} alt="" />
            </div>
    </div>
    )
}
export default Example