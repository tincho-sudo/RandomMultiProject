import React from 'react';
import style from "./styles/Client.module.css";

function Client({email, name, surname, createdAt}) {
  return (
    <div className={style.container}>
      <p>Nombre: {name}</p>
      <p>Apellido: {surname}</p>
      <p>Email: {email}</p>
      <p>Registrado: {createdAt}</p>
    </div>
  )
}

export default Client