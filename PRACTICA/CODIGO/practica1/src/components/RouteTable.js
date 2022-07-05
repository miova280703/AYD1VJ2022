import React from 'react';
import {withRouter} from 'react-router-dom'

import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component{
    
    onSubmit = async (e) =>{
        e.preventDefault();
        this.props.history.push('/login')
     }

    Posicion= async (identificador) =>{
        //e.preventDefault()
        window.location.href="/"+identificador
    }

    render (){

        return(
            <div className="main-container col-12" align="center">
                <h1>Bienvenido</h1>
                <h3>Análisis y diseño 1</h3>
                <h3>Vacaciones de junio 2022</h3>
                <h3>Grupo 10</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>No.</th><th>EndPoint</th><th>Ir</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Número Par o Impar</td>
                            <td><button onClick={()=>this.Posicion("ruta1")} type="button" className="btn btn-primary">
                                        Ver endpoint
                                        </button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Fibonacci</td>
                            <td><button onClick={()=>this.Posicion("ruta2")} type="button" className="btn btn-primary">
                                        Ver endpoint
                                        </button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Palabra Alreves</td>
                            <td><button onClick={()=>this.Posicion("ruta3")} type="button" className="btn btn-primary">
                                        Ver endpoint
                                        </button></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Potencia al Cubo</td>
                            <td><button onClick={()=>this.Posicion("ruta4")} type="button" className="btn btn-primary">
                                        Ver endpoint
                                        </button></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Raíz Cúbica</td>
                            <td><button onClick={()=>this.Posicion("ruta5")} type="button" className="btn btn-primary">
                                        Ver endpoint
                                        </button></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Multiplicacion</td>
                            <td><button onClick={()=>this.Posicion("Multi")} type="button" className="btn btn-primary">
                                        Ver endpoint
                                        </button></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Multiplo</td>
                            <td><button onClick={()=>this.Posicion("Multiplo")} type="button" className="btn btn-primary">
                                        Ver endpoint
                                        </button></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Ackerman</td>
                            <td><button onClick={()=>this.Posicion("Ackerman")} type="button" className="btn btn-primary">
                                        Ver endpoint
                                        </button></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Mayusculas y Minusculas</td>
                            <td><button onClick={()=>this.Posicion("MayusMinus")} type="button" className="btn btn-primary">
                                        Ver endpoint
                                        </button></td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Potencia N</td>
                            <td><button onClick={()=>this.Posicion("PotenciaN")} type="button" className="btn btn-primary">
                                        Ver endpoint
                                        </button></td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Raiz N</td>
                            <td><button onClick={()=>this.Posicion("RaizN")} type="button" className="btn btn-primary">
                                        Ver endpoint
                                        </button></td>
                        </tr>
                    </tbody>                                            
                </Table>
                             

            </div>
        )

    }

}
export default withRouter(Home)