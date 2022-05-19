import React, { Component } from "react";

export default class Saudacao extends Component{
    
    state = {
        tipo: "Fala",
        nome: "Pedro"
    }
    
    constructor(props){
        super(props)
        // this.state

        this.setTipo = this.setTipo.bind(this)
        // this.setNome = this.setNome.bind(this)
    }

     setTipo(e){
        // let i = 1
        // setInterval(() => {
        //     this.setState({ tipo: i++ }) // Altera o estado ++ a cada 1 segundo
        // }, 1000)
        this.setState({ tipo: e.target.value }) // Altera o estado para o valor inserido
     }

    setNome(e){
        this.setState({ nome: e.target.value })
    }
    
    render(){
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} 
                onChange={this.setTipo}/> {/* Muda o estado */}
                <input type="text" placeholder="Nome..." value={nome} 
                onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}