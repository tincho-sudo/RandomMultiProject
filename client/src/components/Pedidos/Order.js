import axios from 'axios';
import React from 'react';
import style from "./styles/Order.module.css";

const Order = ({_id,client,paint,statusZ,toPay,dateOfDelivery,setFlag,orders}) => {

    const handleStatus = (e)=>{
        e.preventDefault();
        if(e.target.name == "finished"){
            let pack = {orderId: _id, statusZ: 2}
            axios.put("http://localhost:4200/modifyorder",pack)
            .then(res=>{
                console.log("Modificado")
                setFlag(prevFlag=>!prevFlag)
            })
        }
        if(e.target.name == "cancelled"){
            let pack = {orderId: _id, statusZ: 3}
            axios.put("http://localhost:4200/modifyorder",pack)
            .then(res=>{
                console.log("Modificado")
                setFlag(prevFlag=>!prevFlag)
            })
        }
    }

  return (
    <div className={style.container}>
        <p>Cliente: {client.email}</p>
        <div className={style.products}>
            {paint.map(e=>{
                return (
                    <div key={e.sku}>
                        <p>Producto: {e.name}</p>
                        <p>Cantidad: {e.stock}</p>
                    </div>
                )
            })}
        </div>
        <p>Total: {`${toPay}$`}</p>
        <p>Fecha: {dateOfDelivery}</p>
        <p>Estado: {statusZ == 1? "pending" : statusZ == 2? "Finalizado" : "Cancelado"}</p>
        <div className={style.botones}>
            <button name='finished' disabled={statusZ > 1} onClick={(e)=>handleStatus(e)}>Finalizado</button>
            <button name="cancelled"  disabled={statusZ > 1} onClick={(e)=>handleStatus(e)}>Cancelado</button>
        </div>
    </div>
  )
}

export default Order;