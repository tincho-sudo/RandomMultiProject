import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import style from "./styles/DetailedClient.module.css";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const DetailedClient = () => {

  const {email} = useParams();
  const [user,setUser] = useState({});

  useEffect(()=>{
    axios.get(`http://localhost:4200/client?email=${email}`)
    .then(res=>{
      setUser(res.data)
      console.log(res.data)
    })
  },[])

  const _exportPdf = () => {

    html2canvas(document.querySelector("#capture")).then(canvas => {
       document.body.appendChild(canvas);  // if you want see your screenshot in body.
       const imgData = canvas.toDataURL('image/png');
       const pdf = new jsPDF();
       pdf.addImage(imgData, 'PNG', 0, 0);
       pdf.save("download.pdf"); 
   });

}

  return (
    <div className={style.container} id="capture">
      <div className={style.cliente}>
          {user.client?.map(e=>{
            return (
              <div key={e.email}>
                <p>Nombre usuario: {e.name}</p>
                <p>Apellido: {e.surname}</p>
                <p>Email: {e.email}</p>
                <p>Dirección: {e.dir}</p>
                <PictureAsPdfIcon className={style.icon} onClick={_exportPdf}/>
              </div>
            )
          })}
      </div>
      <div className={style.orders}>
          {
            user.history?.map(e=>{
              return (
                <div key={e._id} className={style.pedido}>
                  <p>Id pedido: {e._id}</p>
                  <p>Fecha de entrega: {e.dateOfDelivery}</p>
                  <p>Total pagado: {e.toPay}</p>
                  {
                    e.paint?.map(prod=>{
                      return (
                        <div key={prod.sku}>
                          <p>Nombre producto: {prod.name}</p>
                          <p>Color: {prod.color}</p>
                          <p>Cantidad: {prod.stock}</p>
                          <p>Precio x unidad: {prod.price}</p>
                          <p>SKU: {prod.sku}</p>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default DetailedClient;