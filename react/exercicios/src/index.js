import React from 'react'
import ReactDOM from 'react-dom'
import Saudacao from './componentes/Saudacao'

// import BomDia from './componentes/BomDia' // componentes devem ter letra maiúscula

// ReactDOM.render(<h1>React</h1>, document.getElementById('root'))

// Como se tivesse fazendo
// $(<h1>).html('React')

// const elemento = <h1>React 2</h1>

// ReactDOM.render(<BomDia nome="Thiago" />, document.getElementById('root'))

// import Multi, { BoaNoite } from './componentes/Multiplos'

// ReactDOM.render(
// <div>
//    <Multi.BoaTarde nome="Thiago" />
//    <BoaNoite nome="Thiago" />
// </div>, document.getElementById('root'))

// ReactDOM.render(
//    <div>
//        <Saudacao tipo="Bom dia" nome="João" />
//    </div>
// , document.getElementById('root'))

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>
, document.getElementById('root'))