import React,{useState,useEffect} from "react";
import {Button,Form} from 'react-bootstrap';
import axios from 'axios';

const Home = ()=>{
    const [localidade,setLocalidade] = useState("");
    const [custo,setCusto] = useState(0);

    useEffect(async ()=>{
        await axios.get('/admin/apartamento')
            .then(res=>{
                console.log(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
    },[]);
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
            <Button variant="primary">Criar</Button>


        </div>
        )
}

export default Home;
