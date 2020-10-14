import React,{useEffect,useState} from "react";
import {Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import axios from 'axios';

const Home = ()=>{
    const token = localStorage.getItem('token');
    const [nome,setNome] = useState("");
    const [diaPagamento,setDiaPagamento] = useState("");
    const [ultimoPagamento,setUltimoPagamento] = useState("");

    useEffect(async ()=>{
        await axios.get('/users')
            .then(res=>{
                setNome(res.data.nome);
                setDiaPagamento(res.data.nome);
                setUltimoPagamento(res.data.ultimoPagamento);
            })
            .catch(err=>{
                console.log(err);
            })
    },[]);
    if(localStorage.getItem('isAuth')){
        return(
            <div>
                <h1>{nome}</h1>
                <h3>Dia de Pagamento: {diaPagamento}</h3>
                <h3>Ultimo Pagamento: {ultimoPagamento}</h3>
                <Button variant="primary">Editar Conta</Button>
                <Button variant="primary">Pagar Aluguel</Button>
            </div>
        );
    }else{
        return(
            <Redirect to='/login' />
        );
    }
}

export default Home;
