import React, {useState} from 'react'
import Comp1 from './Comp1'

function UseContext() {
    return <Grandparent/>
}

function Grandparent() {
    const toy = "Robot"
    return <Parent toy = {toy}/>
}

function Parent () {
    return <Child toy = {toy}/>
}

function Child () {
    return <p>My toy: {toy}</p>
}

export default UseContext