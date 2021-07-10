import React from 'react'
import Dados from './Dados'

function Corpo() {
    const canal = () => {
      return  'React Curso'
    }

    const somar=(v1,v2)=>{
        return v1+v2
    }
    const youtube='youtube.com' 
    const curso='React App'
    return (
        <div>
           <h2>Curso de React</h2> 
           <p>Se inscreva nesse canal</p>
           <p>Ative o sino e clique no joia</p>

           <Dados canal={canal}
        youtube={youtube}
        curso={curso}
        somar={somar}
        
        />
        </div>
        
    )
}

export default Corpo
