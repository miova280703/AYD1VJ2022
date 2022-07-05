// import * as React from 'react';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Cookies from "js-cookie";
import Swal from 'sweetalert2'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import  axios  from 'axios';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function ReservarVuelo() {
    const [expanded, setExpanded] = React.useState(false);
    const [filas, setFilas] = useState([]);
    const [dataVuelo, setDataVuelo] = useState([]);
    const [reservar, setReservar] = useState(true)
    const [boletos, setBoletos] = useState(1)
    const [fechaInicioState, setFechaInicioState] = useState("2022-06-11T19:30")
    const [fechaFinState, setFechaFinState] = useState("2022-06-12T19:30")
    const effectRan = useRef(false);
    let params = useParams();

    function isReservable(){
        const rol = Cookies.get("fullTrip_rol");
        if(rol){
            setReservar(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:4000/v1/fullTrip/CreateReservacionVuelo`, {
            CantAsientos : boletos,
		    FechaReserva : fechaInicioState,
		    FechaFinReserva : fechaFinState,
		    IdUsuario : Cookies.get('fullTrip_id') ,
		    IdVuelo : dataVuelo.Id_Vuelo
        }).then((response) => {
          Swal.fire(
            `Reservacion Exitosa!`,
            `se agregado su reserva!`,
            `success`
          )
        }).catch((err) => {
          Swal.fire(
            `Ha ocurrido un problema en la reservacion`,
            `${err}!`,
            `error`
          )
        });
      }


    /*Activo: "1"
AsientosDisponibles: 250
Ciudad_Id_Ciudad: 2
FechaVuelo: "2022-06-30T06:00:00.000Z"
Id_Vuelo: 52
Precio: 225
Servicio_Id_Servicio: 1
img: "https://ayd1-g10-full-trip.s3.amazonaws.com/full-trip-imagenes/vuelo3.jfif" */

    /*useEffect(() => {
       isReservable();
        //setFilas(props.filas)
        // async function setarinformacion(){
        // //   const usuario=await ver_usu();
        // //   const respuesta=await usuario.json();
        // //   return respuesta;
        // }

        // setarinformacion().then((respuesta)=>{
        //   if(respuesta.status===200){
        //     console.log(respuesta.data);
        //     setFilas(respuesta.data);
        //   }else{
        //     console.log("error")
        //   }
        // })       
    }, []);*/

    useEffect(() => {
        if(effectRan.current === false){
            isReservable();
            axios.get(`http://localhost:4000/v1/fullTrip/VueloxId/${params.numero}`, {
                IdAutomovil: params.numero
            }).then((response) => {
                console.log(response.data[0])
                setDataVuelo(response.data[0])
               
            }).catch((err) => {
            console.log(err)
            Swal.fire(
                `Error al cargar los Datos!`,
                `${err}!`,
                `error`
            )

            });
            return () =>{
               
                effectRan.current = true;
            }  
        }   
    }, []);

    return (
        <div className='data-vuelo'>
            <h1>Reservacion de Vuelos</h1>
            <div class="data-vuelo2">
                <Box>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            title={`AsientosDisponibles: `+dataVuelo.AsientosDisponibles}
                            subheader="Con destino a"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={dataVuelo.img}
                        // alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Descripcion
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box>
                    <Card sx={{ maxWidth: 345 }}>
                        <h2>Precio: {dataVuelo.Precio}</h2>
                        <CardContent>

                            <p>
                                <Typography variant="body2" color="text.secondary">
                                    Fecha incio
                                </Typography>
                                <TextField
                                    type="datetime-local" id="meeting-time"
                                    name="meeting-time" value={fechaInicioState}
                                    min="2018-06-07T00:00" max="2018-06-14T00:00"
                                    onChange={event => setFechaInicioState(event.target.value)}
                                />
                            </p>
                            <p>
                                <Typography variant="body2" color="text.secondary">
                                    Fecha fin
                                </Typography>
                                <TextField
                                    type="datetime-local" id="meeting-time"
                                    name="meeting-time" value={fechaFinState}
                                    min="2018-06-07T00:00" max="2018-06-14T00:00"
                                    onChange={event => setFechaFinState(event.target.value)}
                                />
                            </p>
                            <TextField
                                id="outlined-number"
                                label="Number"
                                type="number"
                                value={boletos}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{ marginY: 1 }}
                                onChange={(event) => setBoletos(event.target.value)}
                            />
                        </CardContent>
                        
                        <CardActions disableSpacing textAlign='center'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button className='btn-primario'  disabled={reservar} onClick={handleSubmit} >
                                Reservar
                            </button>
                            
                        </CardActions>

                    </Card>
                </Box>
            </div>
            <div>
            <Box style={{ position: 'absolute', top: '60%', left: '30%' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table" responsive>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">
                                    <Typography gutterBottom variant="h5" component="div">
                                        RESEÑAS
                                    </Typography>
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow  >
                                <StyledTableCell component="th" scope="row" align="center" >
                                    Reseña 1
                                </StyledTableCell>
                            </StyledTableRow>
                            {/* {filas.map((row, numero) => {
                            return (
                                <StyledTableRow key={numero} >
                                    <StyledTableCell component="th" scope="row" align="center" >
                                        {row.nombre}
                                    </StyledTableCell>                                    
                                </StyledTableRow>
                            );
                        })}*/ }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            </div>
        </div>
    );
}

    
               
          
        
          

          
 