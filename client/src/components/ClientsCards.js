import React, { useEffect, useState } from 'react';
import axios from "axios";
import Client from "./Client";
import FilteredClient from "./FilteredClient";
import style from "./styles/ClientsCards.module.css";
import Paginado from "./Paginado";

function ClientsCards() {

    //CLIENTES
    const [clients,setClients] = useState([]);
    const [filteredClient, setFilteredClient] = useState([]);

    //PAGINADO
    const clientsInPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const max = clients.length / clientsInPage;

    //SEARCHBAR
    const [input,setInput] = useState("");

    function handleChange(e){
        e.preventDefault();
        setInput(e.target.value);
        if(input != null){
        axios.get(`http://localhost:4200/client?email=${e.target.value}`)
        .then(res=>{
            setFilteredClient(res.data);
            console.log(res.data);
        })
        .catch(err=>console.log(err))
    }
    }

    useEffect(()=>{
        axios.get("http://localhost:4200/clients")
        .then(res=>{
            setClients(res.data);
            console.log(res.data);
        })
        .catch(err=>console.log(err));
    },[])

  return (
    <div className={style.clientsContainer}>
        <div className={style.container}>
            {
                clients ? clients.slice((currentPage-1) * clientsInPage,(currentPage-1)* clientsInPage + clientsInPage).map((user)=>{
                    return (
                        <Client
                            key={user._id}
                            email={user.email}
                            name={user.name}
                            surname={user.surname}
                            createdAt={user.createdAt}
                            id={user._id}
                        />
                    )
                }) : <p>Error</p>
            }
        </div>
        <div className={style.paginado}>
            <Paginado
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            max={max}
            />
        </div>
        <div className={style.bottomContainer}>
            <div className={style.searchbar}>
                <form>
                    <label>Buscar cliente por email:</label>
                    <input 
                    type={"text"}
                    onChange={(e)=>handleChange(e)}
                    ></input>
                </form>
                {
                filteredClient.client ? filteredClient.client.map((user)=>{
                    return (
                        <FilteredClient
                            key={user._id}
                            email={user.email}
                            name={user.name}
                            surname={user.surname}
                            createdAt={user.createdAt}
                        />
                    )
                }) : <p>No enconrado</p>
            }
            </div>
            <div className={style.addClient}>
                Agregar cliente
            </div>
        </div>
    </div>
  )
}

export default ClientsCards;