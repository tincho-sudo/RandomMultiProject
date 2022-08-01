import React, { useEffect, useState } from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import style from "./styles/DetailedOrder.module.css";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const DetailedOrder = () => {

    const {id} = useParams();
    const [order,setOrder] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:4200/orders")
        .then(res=>{
            setOrder(res.data.filter(e=>e._id == id))
            console.log(res.data.filter(e=>e._id == id))
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    const _exportPdf = () => {

        html2canvas(document.querySelector("#capture")).then(canvas => {
           const imgData = canvas.toDataURL('image/png');
           const pdf = new jsPDF();
           pdf.addImage(imgData, 'PNG', 0, 0);
           pdf.save("download.pdf"); 
       });
   
    }

  return (
    <div>
        {
            order ? order.map(e=>{
                return(<div key={e._id} className={style.container} id="capture">
                    <div className={style.letras}>
                        <div className={style.pdf}>
                            <p>Id factura: {e._id}</p>
                            <PictureAsPdfIcon className={style.icon} onClick={_exportPdf}/>
                        </div>
                        <p>Costo total: {`${e.toPay}$`}</p>
                        <p>Fecha de entrega: {e.dateOfDelivery}</p>
                        <p>Nombre y apellido cliente: {`${e.client.name}  ${e.client.surname}`} </p>
                        <p>Email cliente: {e.client.email}</p>
                        <p>Direccion cliente: {e.client.dir}</p>
                        {
                            e.paint.map(prod=>{
                                return (
                                    <div key={prod.sku}>
                                        <p>Nombre producto: {prod.name}</p>
                                        <p>Cantidad: {prod.stock}</p>
                                        <p>SKU: {prod.sku}</p>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>)
            }) : <p>Cargando...</p>
        }
    </div>
  )
}

export default DetailedOrder