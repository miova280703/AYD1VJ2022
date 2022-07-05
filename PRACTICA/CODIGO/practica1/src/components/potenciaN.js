import React from "react";
import { Form, FormGroup, FormControl } from "react-bootstrap";
import './Formulario.css'

class PotenciaN extends React.Component{
    state ={
        form:{
            Name:'',
            a: '',
            
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
        const numero = this.state.form.Name
        const numero2 = this.state.form.a
        const res = await fetch(`http://localhost:3000/POWN/${numero}/${numero2}`)
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
                <h1>Potencia N</h1>
                <h3>Ingrese el numero</h3>                               
                <Form onSubmit ={this.handleSubmit}>
                    <FormGroup controlId="formNombre">
                        <FormControl type="text" name="Name" placeholder="Numero" onChange={this.handleChange} value={this.state.form.Username}/>
                    </FormGroup>
                </Form>
                <Form onSubmit ={this.handleSubmit}>
                    <FormGroup controlId="formApellido">
                        <FormControl type="text" name="a" placeholder="Numero" onChange={this.handleChange} value={this.state.form.a}/>
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

export default PotenciaN;