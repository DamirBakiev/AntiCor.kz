import React, {useEffect, useState} from "react";
import axios from "axios";

function Axios() {
    const [formData, setFormData] = useState([]);
    const[res, setRes] = useState('')
const[name, setName] = useState('')
const[email, setEmail] = useState('')
const[phone, setPhone] = useState('')
const[password, setPassword] = useState('')
const[confirmPassword, setConfirmPassword] = useState('')
const [errors, setErrors] = useState({});

function send () {
   
    const newErrors = {};

    if (!/^[А-Яа-яA-Za-z\s]+$/.test(name)) {
        newErrors.name = "Аты тек әріптерден тұруы керек";
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = "Жарамды email енгізіңіз";
    }

    if (!/^\+?\d{10,15}$/.test(phone)) {
        newErrors.phone = "Жарамды телефон нөмірін енгізіңіз";
    }

    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        newErrors.password = "Пароль кемінде 8 символ, 1 үлкен әріп, 1 сан, 1 арнайы символ болу керек";
    }

    if (password !== confirmPassword) {
        newErrors.confirmPassword = "Қайталанған пароль сәйкес емес";
    }

 
    const isEmailExist = formData.some(user => user.email === email);
    if (isEmailExist) {
        newErrors.email = "Бұл email бұрын тіркелген";
    }

    const isPhoneExist = formData.some(user => user.phone === phone);
    if (isPhoneExist) {
        newErrors.phone = "Бұл телефон нөмірі бұрын тіркелген";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length !== 0) {
        return;
    }
    
    axios.post('https://68578f8c21f5d3463e557f11.mockapi.io/Users/users', {
    name: name,
    email: email,
    phone: phone,
    password: password,
    confirmPassword: confirmPassword,
    })
    .then((response)=>{
        setRes(response.data.id)
    })
}

useEffect(() =>{
    axios.get('https://68578f8c21f5d3463e557f11.mockapi.io/Users/users')
    .then((response)=>{
        setFormData(response.data)
    })
})
return(
    <div>
        <h1></h1>

   <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />{errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
        <input type="text" onChange={(e)=> setEmail(e.target.value)}/>{errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
        <input type="text" onChange={(e)=> setPhone(e.target.value)}/>{errors.phone && <p style={{color: 'red'}}>{errors.phone}</p>}
        <input type="text" onChange={(e)=> setPassword(e.target.value)}/>{errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
        <input type="text" onChange={(e)=> setConfirmPassword(e.target.value)}/>{errors.confirmPassword && <p style={{color: 'red'}}>{errors.confirmPassword}</p>}
        <button onClick={send}>send</button>

    </div>
        {formData.map((formData)=>{
      return(
                <div style={{
                   margin: "5px",
    padding: "5px",
    border: "1px solid black",
    background: "#f0f0f0",
    fontFamily: "Arial"


                }}>
                    <p>name: {formData.name}</p>
                    <p>email:{formData.email}</p>
                    <p>phone:{formData.phone}</p>
                    <p>password:{formData.password}</p>
                    <p>confirmPassword:{formData.confirmPassword}</p>
                    <p>{formData.id}</p>
                </div>
            )
        })}
    </div>
)


}

export default Axios