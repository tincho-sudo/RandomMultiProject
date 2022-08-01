import React, { useEffect, useState } from 'react';
import axios from "axios";
import style from "./styles/Orgs.module.css";

const Orgs = () => {

    const [org,setOrg] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:4200/org")
        .then(res=>{
            setOrg(res.data);
        })
    },[])

  return (
    <div>
        {
            org ? org.map(e=>{
                return(<div key={e.name} className={style.container}>
                    <div className={style.letras}>
                        <p className='display-4'>Nombre: {e.name}</p>
                        <p>Dirección: {e.dir}</p>
                        <p>Teléfono: {e.phone}</p>
                        <p>Cantidad de empleados: {e.employees}</p>
                        <p>Stock total: {e.totalStockQuant}</p>
                        <p>Ventas totales: {e.totalSales}</p>
                        <p>Ganancias totales: {`${e.totalRevenue}$`}</p>
                        <p>Ganancia mensual: {`${e.totalRevenue/12}$`}</p>
                    </div>
                </div>)
            }) : <p>Cargando...</p>
        }
    </div>
  )
}

export default Orgs