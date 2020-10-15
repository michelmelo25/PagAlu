import React,{useEffect,useState} from "react";
import {Button} from 'react-bootstrap';
import axios from 'axios';

const Home = ()=>{
    const token = localStorage.getItem('token');

    if(!localStorage.getItem('isAuth')){
        window.location.href = "http://localhost:3000/login"
    }
    useEffect(async ()=>{
        await axios.get('/rooms',{headers:{'authorization':token}})
            .then(res=>{
                console.log(res.data);
            })
            .catch(err=>{
                console.log(err);
                
            })
    },[]);
    
    const submitCriarRoom = (e)=>{
        e.preventDefault();
        window.location.href="http://localhost:3000/apartamento";
    }

    const submitEditarUser = async (e)=>{
        e.preventDefault();
        await axios.get('/rooms',{headers:{'authorization':token}})
            .then(res=>{
                console.log(res.data);
            })
            .catch(err=>{
                console.log(err);
                
            })
    }
    return(
        <div>
            
            <Button variant="primary" onClick={submitEditarUser}>Editar Conta</Button>
            <Button variant="primary" onClick={submitCriarRoom}>Criar Apartamento</Button>
        </div>
    );
}

export default Home;
