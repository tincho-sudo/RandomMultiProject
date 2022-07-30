import React from 'react';
import style from "./styles/Product.module.css";
import ProductPopper from "./ProductPopper";

function Product({name,color,id,price,stock,sku,nextShipping,setFlag}) {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <p>Nombre: {name}</p>
        <ProductPopper edit={"name"} id={id} setFlag={setFlag}/>
      </div>
      <div className={style.text}>
        <p>Color: {color}</p>
        <ProductPopper edit={"surname"} id={id} setFlag={setFlag}/>
      </div>
      <div className={style.text}>
        <p>Price: {price}</p>
        <ProductPopper edit={"email"} id={id} setFlag={setFlag}/>
      </div>
      <div className={style.text}>
        <p>Stock: {stock}</p>
        <ProductPopper edit={"email"} id={id} setFlag={setFlag}/>
      </div>
      <div className={style.text}>
        <p>Sku: {sku}</p>
        <ProductPopper edit={"email"} id={id} setFlag={setFlag}/>
      </div>
    </div>
  )
}

export default Product