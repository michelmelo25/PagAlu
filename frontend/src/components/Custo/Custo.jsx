import React from 'react';

const Custo = (props)=>{
    return(
        <div>
            <h5>Nome: {props.props.nome}</h5>
            <h5>Valor: {props.props.valor}</h5>
            <h5>Vencimento: {props.props.vencimento}</h5>
        </div>
    );
}

export default Custo;
