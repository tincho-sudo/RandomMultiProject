import React, { useState } from 'react';
import style from "./styles/AddClient.module.css"
import axios from "axios";

function AddClient({setFlag}) {

    const [input,setInput] = useState({})

    function handleChange(e){
        e.preventDefault()
        setInput({
            ...input, 
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post(`http://localhost:4200/newclient`, input)
        .then(res=>{
            console.log("Usuario agregado")
            setFlag(prevFlag=>!prevFlag)
        })
    }

  return (
    <div>
        <form className={style.formContainer}>
            <div>
                <label>Nombre</label>
                <input type="text" name="name" onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
                <label>Apellido</label>
                <input type="text" name="surname" onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="email" onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
                <label>Contraseña</label>
                <input type="text" name="password" onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
                <label>Direccion</label>
                <input type="text" name="dir" onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
                <button type="submit" onCanPlay={(e)=>handleSubmit(e)}>Agregar</button>
            </div>
            

        </form>
    </div>
  )
}

export default AddClient;