import React from 'react';
import style from "./styles/FilteredProduct.module.css";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const FilteredProduct = ({name,color,id,price,stock,sku,nextShipping,current,setProductsSelected,products,productsSelected}) => {


  if(current="home"){

    function addCart(){
      if(!productsSelected.filter(e=> e.sku === sku).length > 0){
        setProductsSelected(prevProductsSelected=> [...prevProductsSelected, {name,color,price,stock: 1,sku,nextShipping}]);
      }else{
        const suma = productsSelected.find(e=> e.sku == sku).stock+=1;
        setProductsSelected(prevProductsSelected=> [...prevProductsSelected])
      }
    }

    function deleteCart(){
      if(!productsSelected.filter(e=> e.sku === sku).length > 0){
        console.log("No se encuentra este elemento en la orden") 
      }else if(productsSelected.filter(e=> e.sku === sku)[0].stock == 1){
        setProductsSelected(prevProductsSelected=> prevProductsSelected.filter(e=> e.sku != sku))
      }else{
        productsSelected.find(e=> e.sku == sku).stock-=1;
        setProductsSelected(prevProductsSelected=> [...prevProductsSelected])
      }
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