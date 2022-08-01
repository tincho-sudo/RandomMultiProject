import React, { useEffect, useState } from 'react';
import axios from "axios";
import style from "./styles/Orgs.module.css";

const Orgs = () => {

    const [org,setOrg] = useState({});

    useEffect(()=>{
        axios.get("http://localhost:4200/org")
        .then(res=>{
            setOrg(res.data);
            console.log(res.data)
        })
    },[])

  return (
    <div className={style.container}>
        <div className={style.letras}>
            <p className='display-4'>Nombre: {org[0].name}</p>
            <p>Dirección: {org[0].dir}</p>
            <p>Teléfono: {org[0].phone}</p>
            <p>Cantidad de empleados: {org[0].employees}</p>
            <p>Stock total: {org[0].totalStockQuant}</p>
            <p>Ventas totales: {org[0].totalSales}</p>
            <p>Ganancias totales: {org[0].totalRevenue}</p>
        </div>
    </div>
  )
}

export default Orgs