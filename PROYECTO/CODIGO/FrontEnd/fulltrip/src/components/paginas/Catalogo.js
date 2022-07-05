import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import Filtros from '../element/Filtros'
import SubMenu from '../element/SubMenu'
import CatalogoServicios from './CatalogoServicios';



/*const API_URL_VUELOS = `http://34.125.201.105:4000/v1/fullTrip/ReadVuelo`;
const API_URL_CARROS = `http://34.125.201.105:4000/v1/fullTrip/ReadAutomovil`;
const API_URL_HOTELES = `http://34.125.201.105:4000/v1/fullTrip/ReadHabitacion`;*/

const API_URL_VUELOS = `http://localhost:4000/v1/fullTrip/ReadVuelo`;
const API_URL_CARROS = `http://localhost:4000/v1/fullTrip/ReadAutomovil`;
const API_URL_HOTELES = `http://localhost:4000/v1/fullTrip/ReadHabitacion`;
function Catalogo() {
    const [menuElement, setMenuElement] = useState('Vehiculo');
    const [serviceData, setServiceData] = useState([])

    //filtros para Auto
    

    const rend = useRef(false);
    useEffect(() => {
        const x =  getDatos(menuElement);
        axios.get(x,{
        }).then((res)=>{  
          setServiceData(res.data.data);
        }).catch((err) => {
            setServiceData([])
        }); 

    }, [menuElement]);

    function getDatos (type) {
      
      var apiURL = {
        'Vuelos': API_URL_VUELOS,
        'Vehiculo': API_URL_CARROS,
        'default': API_URL_HOTELES,
      };
      return (apiURL[type] || apiURL['default']);
    }

   

  return (
    <>
        <SubMenu setMenu={setMenuElement} />
        <div className="container">
            <button className='filtro-title'>Aplicar Filtros:</button>
            <Filtros menu={menuElement} serv={serviceData}/>
            <CatalogoServicios menu={menuElement} serv={serviceData}/>
        </div>
    </>
  )
}

export default Catalogo