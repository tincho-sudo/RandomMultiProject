import React from 'react';
import style from "./styles/Product.module.css";
import ProductPopper from "./ProductPopper";

function Product({name,color,id,price,stock,sku,nextShipping,setFlag}) {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <p>Nombre: {name}</p>
        <ProductPopper edit={"name"} idprod={id} setFlag={setFlag}/>
      </div>
      <div className={style.text}>
        <p>Color: {color}</p>
        <ProductPopper edit={"color"} idprod={id} setFlag={setFlag}/>
      </div>
      <div className={style.text}>
        <p>Price: {price}</p>
        <ProductPopper edit={"price"} idprod={id} setFlag={setFlag}/>
      </div>
      <div className={style.text}>
        <p>Stock: {stock}</p>
        <ProductPopper edit={"stock"} idprod={id} setFlag={setFlag}/>
      </div>
      <div className={style.text}>
        <p>Sku: {sku}</p>
        <ProductPopper edit={"sku"} idprod={id} setFlag={setFlag}/>
      </div>
    </div>
  )
}

export default Product