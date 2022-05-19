import React from "react"

export default props =>
// Formas de utilizar mais de um elemento
//    <div>
//        <h1>Bom dia, {props.nome}!</h1>
//        <h2>Até breve!</h2>
//    </div>

//    <React.Fragment> // pode importar {Fragment} e usar apenas <Fragment>
//        <h1>Bom dia, {props.nome}!</h1>
//        <h2>Até breve!</h2>
//    </React.Fragment>

[
    <h1 key="h1">Bom dia, {props.nome}!</h1>,
    <h2 key="h2">Até breve!</h2>
]
    