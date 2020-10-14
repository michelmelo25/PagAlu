import React,{useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import './style.css';
import axios from 'axios';

const Registrar = ()=>{
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");


    const submitRegistrar = (e)=>{
        e.preventDefault();
        
        axios.post('/register',{nome:nome,email:email,password:senha})
            .then(res=>{
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
            console.log("OK")
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
                        <Form.Group className="register-label">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Coloque seu email"/>
                        </Form.Group>
                        <Form.Group className="register-label">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" value={senha} onChange={e=>setSenha(e.target.value)} placeholder="Coloque sua senha"/>
                        </Form.Group>
                        <Button variant="primary" onClick={submitRegistrar}>Registrar</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Registrar;
