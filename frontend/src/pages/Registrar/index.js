import React,{useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import './style.css';
import axios from 'axios';

const Registrar = ()=>{
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");


    const handleLogin = async (e)=>{
        e.preventDefault();
        await axios.post('/register',{nome:nome,email:email,password:senha})
            .then(res=>{
                localStorage.setItem('authorization',res.data.token);
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return(
        <div>
            <div className="login-color-block"></div>
            <div className="login-space">
                <div className="login-content">
                    <Form className="login-label">
                        <Form.Group className="login-label">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Coloque seu email"/>
                        </Form.Group>
                        <Form.Group className="login-label">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" value={senha} onChange={e=>setSenha(e.target.value)} placeholder="Coloque sua senha"/>
                        </Form.Group>
                        <Button variant="primary" onClick={handleLogin}>Logar</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Registrar;
