import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './style.css';

const Login = ()=>{
    return(
        <div>
            <div className="login-space">
                <div className="login-content">
                    <Form>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Coloque seu email"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Coloque sua senha"/>
                        </Form.Group>
                        <Button variant="primary">Logar</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;
