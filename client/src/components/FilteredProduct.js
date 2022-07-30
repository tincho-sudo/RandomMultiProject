import React from 'react';
import style from "./styles/FilteredProduct.module.css";

const FilteredProduct = ({name,color,id,price,stock,sku}) => {
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