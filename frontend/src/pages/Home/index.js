import React,{useEffect,useState} from "react";
import {Button} from 'react-bootstrap';
import axios from 'axios';

const Home = ()=>{
    const token = localStorage.getItem('token');
    const [nome,setNome] = useState("");
    if(!localStorage.getItem('isAuth')){
        window.location.href = "http://localhost:3000/login"
    }
    //useEffect(async ()=>{
    //    await axios.get('/room',{headers:{'authorization':token}})
    //        .then(res=>{
    //            setNome(res.data.nome);
    //        })
    //        .catch(err=>{
    //            console.log(err);
    //            
    //        })
    //},[]);
    return(
        <div>
            <h1>{nome}</h1>
            <Button variant="primary">Editar Conta</Button>
            <Button variant="primary">Criar Apartamento</Button>
        </div>
    );
}

export default Home;
