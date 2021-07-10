import React from 'react'

function Dados(props) {

    let n1=10
    let n2=10
    return (
        <div>
           <p>Canal: {props.canal()} </p> 
           <p>YouTube: {props.youtube}  </p> 
           <p>Curso: {props.curso} </p> 
           <p>A soma de {n1} com {n2} = {props.somar(n1, n2)} </p> 
        </div>
    )
}

export default Dados
