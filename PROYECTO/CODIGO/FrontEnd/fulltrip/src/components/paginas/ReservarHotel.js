// import * as React from 'react';
import React, { useEffect, useState, useRef } from 'react'
import { useParams } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Cookies from "js-cookie";
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
import axios from 'axios';
import Swal from 'sweetalert2'


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

export default function ReservarHotel() {
    const [expanded, setExpanded] = React.useState(false);
    const [filas, setFilas] = useState([]);
    const [dataHotel, setDataHotel] = useState([]);
    const [reservar, setReservar] = useState(true)
    const [boletos, setBoletos] = useState(1)
    const [fechaInicioState, setFechaInicioState] = useState("2022-06-11T19:30")
    const [fechaFinState, setFechaFinState] = useState("2022-06-12T19:30")
    const effectRan = useRef(false);
    let params = useParams();


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:4000/v1/fullTrip/CreateReservacionHabitacion`, {
            CantHabitaciones : boletos,
		    FechaIngreso : fechaInicioState,
		    FechaSalida : fechaFinState,
		    IdUsuario : Cookies.get('fullTrip_id') ,
		    IdHabitacion : dataHotel.Id_Habitacion
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


   /* function isReservable(){
        const rol = Cookies.get("fullTrip_rol");
        if(rol){
            setReservar(false);
        }
    }*/

   /* useEffect(() => {
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


    function isReservable(){
        const rol = Cookies.get("fullTrip_rol");
        if(rol){
            setReservar(false);
        }
    }

    useEffect(() => {
        if(effectRan.current === false){
            isReservable();
            axios.get(`http://localhost:4000/v1/fullTrip/HabitacionxId/${params.numero}`, {
                IdHabitacion: params.numero
            }).then((response) => {
                console.log(response.data);
                setDataHotel(response.data[0])
               
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
        <>
            <div className='data-vuelo'>
            <h1>Reservacion de Vuelos</h1>
            <div class="data-vuelo2">
                <Box>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            title={'Habitacion:' +dataHotel.Id_Habitacion}
                            subheader={'Cantidad max:'+dataHotel.CantPersonas}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={dataHotel.img}
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
                        <h2>Precio: {dataHotel.Precio}</h2>
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
        </>
    );
}


