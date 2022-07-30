import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import Product from "./Product";
import Paginado from "./Paginado";
import AddProduct from "./AddProduct";
import style from "./styles/ProductCards.module.css";
import FilteredProduct from "./FilteredProduct";

function ProductCards() {

    //PRODUCTOS
    const [products,setProducts] = useState([]);
    const [filteredProduct, setFilteredProduct] = useState([]);
    const [flag,setFlag] = useState(true);

    //PAGINADO
    const productsInPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const max = products.length / productsInPage;

    //SEARCHBAR
    const [input,setInput] = useState("");

    function handleChange(e){
        e.preventDefault();
        setInput(e.target.value);
        if(input != null){
        axios.get(`http://localhost:4200/paint?name=${e.target.value}`)
        .then(res=>{
            setFilteredProduct(res.data);
            console.log(res.data);
        })
        .catch(err=>console.log(err))
    }
    }

    useEffect(()=>{
        axios.get("http://localhost:4200/paints")
        .then(res=>{
            setProducts(res.data);
            console.log(res.data);
        })
        .catch(err=>console.log(err));
    },[flag])

  return (
    <div className={style.clientsContainer}>
        <div className={style.container}>
            {
                products ? products.slice((currentPage-1) * productsInPage,(currentPage-1)* productsInPage + productsInPage).map((prod)=>{
                    return (
                        <Product
                            key={prod._id}
                            name={prod.name}
                            color={prod.color}
                            id={prod._id}
                            price={prod.price}
                            stock={prod.stock}
                            sku={prod.sku}
                            nextShipping={prod.nextShipping}
                            setFlag={setFlag}
                        />
                    )
                }) : <p>Error</p>
            }
        </div>
        <div className={style.paginado}>
            <Paginado
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            max={max}
            />
        </div>
        <div className={style.bottomContainer}>
            <div className={style.searchbar}>
                <form>
                    <label>Buscar producto por nombre:</label>
                    <input 
                    type={"text"}
                    onChange={(e)=>handleChange(e)}
                    ></input>
                </form>
                {
                filteredProduct.paint ? filteredProduct.paint.map((prod)=>{
                    return (
                        <FilteredProduct
                            key={prod._id}
                            name={prod.name}
                            color={prod.color}
                            id={prod._id}
                            price={prod.price}
                            stock={prod.stock}
                            sku={prod.sku}
                            nextShipping={prod.nextShipping}
                            setFlag={setFlag}
                        />
                    )
                }) : <p>No encontrado</p>
            }
            </div>
            <div className={style.addClient}>
                Agregar producto
                <AddProduct
                setFlag={setFlag}
                />
            </div>
        </div>
    </div>
  )
}

export default ProductCards