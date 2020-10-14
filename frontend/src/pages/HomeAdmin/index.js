import React,{useState,useEffect} from "react";
import {Button,Form} from 'react-bootstrap';
import axios from 'axios';

const Home = ()=>{
    const [localidade,setLocalidade] = useState("");
    const [custo,setCusto] = useState(0);

    const token = localStorage.getItem('authorization');

    const handleShow = async (e)=>{
        e.preventDefault();
        await axios.get('/room',{headers:{'authorization':token}})
            .then(res=>{
                console.log(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
    }

    const submitCriar = async (e)=>{
        e.preventDefault();
        await axios.post('/room',{headers:{'authorization':token}},{localidade,custo})
            .then(res=>{
                console.log(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
    }
    return(
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Localidade</Form.Label>
                    <Form.Control type="localidade" value={localidade} onChange={e=>setLocalidade(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Custo</Form.Label>
                    <Form.Control type="localidade" value={custo} onChange={e=>setCusto(e.target.value)}/>
                </Form.Group>
            </Form>
            <Button variant="primary" onClick={submitCriar}>Criar</Button>
            <Button variant="primary" onClick={handleShow}>Show</Button>

        </div>
        )
}

export default Home;
