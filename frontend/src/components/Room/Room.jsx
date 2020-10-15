import React from 'react';


import Membro from '../Membro/Membro';
import Custo from '../Custo/Custo';

const Room = (props)=>{
    const membros = props.props.membros.map(user=>{
        return <Membro props={user}/>;
    })
    const custos = props.props.membros.map(c=>{
        return <Custo props={c}/>;
    })
    return(
        <div>
            <h3>Apartamento: {props.props.nome}</h3>
            <h3>membros: </h3>{membros}
            <h3>Custos: </h3>{custos}
        </div>
    );
}

export default Room;
