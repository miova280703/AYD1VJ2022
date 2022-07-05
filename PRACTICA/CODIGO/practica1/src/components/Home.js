
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
    
    state ={
        prueba :[]
    }

    async componentDidMount(){
        
        const res = await fetch('http://localhost:3000/')
        const data = await res.json();
        this.setState({prueba:data})
        console.log(data);
        console.log(this.state.prueba);
    }

    render (){

        return(
            <div className="main-container col-12" align="center">
                <h1>Bienvenido</h1>
                <h3>Análisis y diseño 1</h3>
                <h3>Vacaciones de junio 2022</h3>
                <h3>Grupo 10</h3>
                <button onClick={()=>this.Posicion("Routes")} type="button" className="btn btn-primary">
                                        Ver endpoints
                                        </button>
                <Table>
                    <thead>
                        <tr>
                            <th>Carnet</th><th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.prueba.map(post=>{
                            return <tr key={post.carnet}>
                                <td>{post.carnet}</td><td>{post.name}</td>                                
                                </tr>
                        })
                    }
                    </tbody>                                            
                </Table>
                             

            </div>
        )

    }

}
export default withRouter(Home)