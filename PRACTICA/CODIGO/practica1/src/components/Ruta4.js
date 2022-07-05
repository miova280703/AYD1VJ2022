import React from "react";
import { Form, FormGroup, FormControl } from "react-bootstrap";
import './Formulario.css'

class Ruta4 extends React.Component{
    state ={
        form:{
            Username:'',
        },
        resultado: []
    }

    handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
    }

    handleSubmit = async e =>{
        e.preventDefault()
        console.log(this.state.form.Username)
        const numero = this.state.form.Username
        const res = await fetch(`http://localhost:3000/potencia/${numero}`)
        const data = await res.text();
        this.setState({resultado:data})
    }

    Posicion= async (identificador) =>{
        //e.preventDefault()
        window.location.href="/"+identificador
    }

    render(){
        return(
            <div className="main-container col-12" align = "Center">
                <h1>Potencia al Cubo</h1>
                <h3>Ingrese el numero</h3>                               
                <Form onSubmit ={this.handleSubmit}>
                    <FormGroup controlId="formUsername">
                        <FormControl type="text" name="Username" placeholder="Ingrese numero" onChange={this.handleChange} value={this.state.form.Username}/>
                    </FormGroup>
                </Form>
                <h2>{this.state.resultado} </h2>
                <h1> </h1>
                <button onClick={()=>this.Posicion("home")} type="button" className="btn btn-primary">
                                        Inicio
                                        </button>
            </div>
        )                
    }
}

export default Ruta4;