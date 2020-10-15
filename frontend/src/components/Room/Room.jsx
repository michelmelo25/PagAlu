import React,{useState,useEffect} from 'react';
import axios from 'axios';

import Membro from '../Membro/Membro';
import Custo from '../Custo/Custo';

const Room = (props)=>{
    const token = localStorage.getItem('token');
    const [membros,setMembros] = useState([]);

    const id = props.props._id;

    useEffect(async ()=>{
        await axios.get('/membros/'+id,{headers:{'authorization':token}})
            .then(res=>{
                setMembros(res.data);
                console.log("membros");
                console.log(res.data);
            })
            .catch(err=>{
                console.log(err);
                
            })
    },[]);

    const membro = membros.map(user=>{
        return <Membro props={user}/>;
    })
    const custos = props.props.membros.map(c=>{
        return <Custo props={c}/>;
    })
    return(
        <div>
            <h3>Apartamento: {props.props.nome}</h3>
            <h3>membros: </h3>{membro}
            <h3>Custos: </h3>{custos}
        </div>
    );
}

export default Room;
