import React, { useEffect, useState } from 'react';
import axios from "axios";
import style from "./styles/CreateOrder.module.css";
import FilteredClient from "../FilteredClient";
import Paginado from "../Paginado";
import FilteredProduct from '../FilteredProduct';

const CreateOrder = () => {

    const [clients,setClients] = useState([]);
    const [products,setProducts] = useState([]);
    const [flag,setFlag] = useState(true);
    const [clientSelected, setClientSelected] = useState({});
    const [productsSelected, setProductsSelected] = useState([]);

    //PAGINADOCLIENTS
    const clientsInPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const max = clients.length / clientsInPage;

    //PAGINADOPRODUCTS
    const productsInPage = 8;
    const [currentPagep, setCurrentPagep] = useState(1);
    const maxp = products.length / productsInPage;

    useEffect(()=>{
        axios.get("http://localhost:4200/clients")
        .then(res=>{
            setClients(res.data);
        })
        .catch(err=>console.log(err));

        axios.get("http://localhost:4200/paints")
        .then(res=>{
            setProducts(res.data);
        })
        .catch(err=>console.log(err));
    },[])

  return (
    <div className={style.maxContainer}>
        <div className={style.twoContainer}>
            <div className={style.clientsContainer}>
                {
                    clients ? clients.slice((currentPage-1) * clientsInPage,(currentPage-1)* clientsInPage + clientsInPage).map((user)=>{
                        return (
                            <FilteredClient
                                key={user._id}
                                email={user.email}
                                name={user.name}
                                surname={user.surname}
                                createdAt={user.createdAt}
                                dir={user.dir}
                                password={user.password}
                                id={user._id}
                                setFlag={setFlag}
                                current={"home"}
                                setClientSelected={setClientSelected}
                            />
                        )
                    }) : <p>Error</p>
                }
                <Paginado
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                max={max}
                />
            </div>
            <div className={style.productsContainer}>
            {
                products ? products.slice((currentPagep-1) * productsInPage,(currentPagep-1)* productsInPage + productsInPage).map((prod)=>{
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
                            current={"home"}
                            setProductsSelected={setProductsSelected}
                            products={products}
                        />
                    )
                }) : <p>No encontrado</p>
            }
            <Paginado
                currentPage={currentPagep}
                setCurrentPage={setCurrentPagep}
                max={maxp}
                />
            </div>
        </div>
        <div className={style.createContainer}>
            <button className="btn btn-primary">Crear orden</button>
        </div>
    </div>
  )
}

export default CreateOrder;