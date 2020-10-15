import React,{useEffect,useState} from "react";
import {Button} from 'react-bootstrap';
import axios from 'axios';

import Room from '../../components/Room/Room';

const Home = ()=>{
    const token = localStorage.getItem('token');
    const [salas,setSalas] = useState([])

    if(!localStorage.getItem('isAuth')){
        window.location.href = "http://localhost:3000/login"
    }
    useEffect(async ()=>{
        await axios.get('/rooms',{headers:{'authorization':token}})
            .then(res=>{
                setSalas(res.data);
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
    const sala = salas.map(s =>{
        return <Room props={s}/>
    })
    return(
        <div>
            {sala}
            <Button variant="primary" onClick={submitEditarUser}>Editar Conta</Button>
            <Button variant="primary" onClick={submitCriarRoom}>Criar Apartamento</Button>
        </div>
    );
}

export default Home;
