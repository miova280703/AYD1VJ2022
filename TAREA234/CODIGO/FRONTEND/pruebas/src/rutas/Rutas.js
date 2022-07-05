import React from 'react';
import App from '../App';

import {
    BrowserRouter ,
    Routes,
    Route
} from "react-router-dom";
import RegistrarEstudiante from '../components/paginas/registroestudiante';
import AsignacionEstudiante from '../components/paginas/asignacionestudiante'
import Estudiante from '../components/paginas/estudiante';
import Clase from '../components/paginas/clase';

const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                {/* <Route path="/inicio" element={<App/>}/> */}
                <Route path="/registro" element={<RegistrarEstudiante />}/>
                <Route path="/asignacion" element={<AsignacionEstudiante/>}/>
                <Route path="/estudiante" element={<Estudiante/>}/>
                <Route path='/clase' element={<Clase/>}/>
                
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas