import React from 'react';
import style from "./styles/Client.module.css";
import EditIcon from '@mui/icons-material/Edit';

function Client({email, name, surname, createdAt, id}) {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <p>Nombre: {name}</p>
        <button><EditIcon/></button>
      </div>
      <div className={style.text}>
        <p>Apellido: {surname}</p>
        <button><EditIcon/></button>
      </div>
      <div className={style.text}>
        <p>Email: {email}</p>
        <button><EditIcon/></button>
      </div>
      <div className={style.text}>
        <p>Registrado: {createdAt}</p>
      </div>
    </div>
  )
}

export default Client