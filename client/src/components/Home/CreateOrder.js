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

    const totalPrice = productsSelected.reduce((prev,curr)=>prev+(curr.price * curr.stock),0)

    //PAGINADOCLIENTS
    const clientsInPage = 7;
    const [currentPage, setCurrentPage] = useState(1);
    const max = clients.length / clientsInPage;

    //PAGINADOPRODUCTS
    const productsInPage = 7;
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

    const handleSubmit = ()=> {
        let product = {client: clientSelected, paint: productsSelected, statusZ: 1, toPay: totalPrice, dateOfDelivery: Date.now()}
        axios.post("http://localhost:4200/neworder", product)
    }

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
                            productsSelected={productsSelected}
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
            <div className={style.clientSelected}>
                <p>Cliente</p>
                <p>{clientSelected.name}</p>
                <p>{clientSelected.email}</p>
            </div>
            <div className={style.clientSelected}>
                <p>Productos</p>
                {
                    productsSelected?.map(e=>{
                        return (
                            <div className={style.productSelecteditem}>
                                <p>Nombre: {e.name}</p>
                                <p>Cantidad: {e.stock}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className={style.totalPrice}>
                <p>Precio total: {totalPrice}</p>
            </div>
            <div>
                <button className="btn btn-primary" onClick={handleSubmit}>Crear orden</button>
            </div>
        </div>
    </div>
  )
}

export default CreateOrder;