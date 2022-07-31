import React, { useState } from 'react';
import style from "./styles/AddProduct.module.css";
import axios from "axios";

const AddProduct = ({setFlag}) => {

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
        console.log(input)
        axios.post(`http://localhost:4200/newpaint`, input)
        .then(res=>{
            console.log("producto agregado")
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
                <label>Color</label>
                <input type="text" name="color" onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
                <label>Precio</label>
                <input type="number" name="price" onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
                <label>Stock</label>
                <input type="number" name="stock" onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
                <label>SKU</label>
                <input type="text" name="sku" onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
                <label>Next Shipping</label>
                <input type="text" name="nextShipping" onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
                <button type="submit" onClick={(e)=>handleSubmit(e)}>Agregar</button>
            </div>
            

        </form>
    </div>
  )
}

export default AddProduct