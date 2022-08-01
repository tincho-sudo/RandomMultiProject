import React, { useEffect, useState } from 'react';
import axios from "axios";
import styles from "./styles/Orders.module.css";
import Order from './Order';
import Paginado from "../Paginado";

const Orders = () => {

    const [orders,setOrders] = useState([]);
    const [flag,setFlag] = useState(true);

     //PAGINADO
     const ordersInPage = 3;
     const [currentPage, setCurrentPage] = useState(1);
     const max = orders.length / ordersInPage;

    useEffect(()=>{
        axios.get("http://localhost:4200/orders")
        .then(res=>{
            setOrders(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[flag])

  return (
    <div>
        <div className={styles.container}>
            {
                orders?.slice((currentPage-1) * ordersInPage,(currentPage-1)* ordersInPage + ordersInPage).map((order)=>{
                    return(
                        <div key={order._id}>
                            <Order
                            _id={order._id}
                            client={order.client}
                            paint={order.paint}
                            statusZ={order.statusZ}
                            toPay={order.toPay}
                            dateOfDelivery={order.dateOfDelivery}
                            setFlag={setFlag}
                            orders={orders}
                            />
                        </div>
                    )
                })
            }
        </div>
        <div>
            <Paginado
             currentPage={currentPage}
             setCurrentPage={setCurrentPage}
             max={max}
            />
        </div>
    </div>
  )
}

export default Orders