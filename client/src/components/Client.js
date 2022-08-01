import React from 'react';
import style from "./styles/Client.module.css";
import ClientPopper from "./ClientPopper";
import InfoIcon from '@mui/icons-material/Info';
import {Link} from "react-router-dom";

function Client({email, name, surname, createdAt, id, setFlag}) {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <p>Nombre: {name}</p>
        <ClientPopper edit={"name"} email={email} setFlag={setFlag}/>
      </div>
      <div className={style.text}>
        <p>Apellido: {surname}</p>
        <ClientPopper edit={"surname"} email={email} setFlag={setFlag}/>
      </div>
      <div className={style.text}>
        <p>Email: {email}</p>
        <ClientPopper edit={"email"} email={email} setFlag={setFlag}/>
      </div>
      <div className={style.text}>
        <div className={style.both}>
        <p>Registrado: {createdAt}</p>
          <Link to={`/clientes/${email}`}>
            <InfoIcon className={style.info}/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Client