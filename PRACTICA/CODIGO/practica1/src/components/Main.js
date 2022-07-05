import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from './Home';
import Ruta1 from './Ruta1';
import Ruta2 from './Ruta2';
import './Formulario.css'
import RouteTable from './RouteTable';
import Ruta3 from './Ruta3';
import Ruta4 from './Ruta4';
import Ruta5 from './Ruta5';
import Multiplicacion from './Multiplicacion';
import Multiplo from './multiplo';
import Ackerman from './Ackerman';
import MayusMinus from './Mayusminus';
import RaizN from './RaizN';
import PotenciaN from './potenciaN';


const Main =()=>{
    
        return(
            <Switch>
                {/*------------HOME-----------*/ }
                <Route path="/home" component={()=><Home/>}/>
                <Route path="/Routes" component={()=><RouteTable/>}/>
                <Route path="/ruta1" component={()=><Ruta1/>}/>
                <Route path="/ruta2" component={()=><Ruta2/>}/>
                <Route path="/ruta3" component={()=><Ruta3/>}/>
                <Route path="/ruta4" component={()=><Ruta4/>}/>
                <Route path="/ruta5" component={()=><Ruta5/>}/>
                <Route path="/Multi" component={()=><Multiplicacion/>}/>
                <Route path="/Multiplo" component={()=><Multiplo/>}/>
                <Route path="/Ackerman" component={()=><Ackerman/>}/>
                <Route path="/MayusMinus" component={()=><MayusMinus/>}/>
                <Route path="/RaizN" component={()=><RaizN/>}/>
                <Route path="/PotenciaN" component={()=><PotenciaN/>}/>
                <Redirect to="/home"/>                
            </Switch>
            
        )            

}

export default Main