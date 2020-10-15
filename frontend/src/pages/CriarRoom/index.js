import React,{useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import './style.css';
import axios from 'axios';

const CriarRoom = ()=>{
    const [custo, setCusto] = useState("");
    const [nome, setNome] = useState("");
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    
    if(!localStorage.getItem('isAuth')){
        window.location.href = "http://localhost:3000/login"
    }

    const submitCriar = async (e)=>{
        e.preventDefault();
        
        await axios.post('/room',{nome:nome},{headers:{'authorization':token}})
            .then(res=>{
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return(
        <div>
            <div className="register-color-block"></div>
            <div className="register-space">
                <div className="register-content">
                    <Form className="register-label">
                        <Form.Group className="register-label">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="name" value={nome} onChange={e=>setNome(e.target.value)} placeholder="Coloque sua senha"/>
                        </Form.Group>
                        <Button variant="primary" onClick={submitCriar}>Criar</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default CriarRoom;
