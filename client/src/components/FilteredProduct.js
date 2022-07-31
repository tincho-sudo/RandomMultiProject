import React from 'react';
import style from "./styles/FilteredProduct.module.css";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const FilteredProduct = ({name,color,id,price,stock,sku,current,setProductsSelected,products}) => {


  if(current="home"){

    function addCart(){
      console.log("Hola")
    }

    function deleteCart(){
      console.log("Hola2")
    }

    const stockStyle = {
      backgroundColor: stock <= 0 ? "lightgrey" : null
    }

    return(
      <div className={style.containerSelected} style={stockStyle}>
      <p>Nombre: {name}</p>
      <p>Color: {color}</p>
      <p>Precio: {price}</p>
      <p>Stock: {stock}</p>
      <p>SKU: {sku}</p>
      <AddIcon className={style.icon} onClick={()=>addCart()}/>
      <DeleteIcon className={style.icon} onClick={()=>deleteCart()}/>
    </div>
    )
  }

  return (
    <div className={style.container}>
      <p>Nombre: {name}</p>
      <p>Color: {color}</p>
      <p>Precio: {price}</p>
      <p>Stock: {stock}</p>
      <p>SKU: {sku}</p>
    </div>
  )
}

export default FilteredProduct