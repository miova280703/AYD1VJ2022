// import * as React from 'react';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Swal from 'sweetalert2'
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

export default function Reservar() {
    const [expanded, setExpanded] = React.useState(false);
    const [dataAuto, setDataAuto] = useState([]);
    const [reservar, setReservar] = useState(true)
    const [fechaInicioState, setFechaInicioState] = useState("2018-06-11T19:30")
    const [fechaFinState, setFechaFinState] = useState("2018-06-12T19:30")
    const effectRan = useRef(false);
    let params = useParams();


    function isReservable(){
        const rol = Cookies.get("fullTrip_rol");
        if(rol){
            setReservar(false);
        }
    }

    useEffect(() => {
        if(effectRan.current === false){
            isReservable();
            axios.get(`http://localhost:4000/v1/fullTrip/AutoxId/${params.numero}`, {
                IdAutomovil: params.numero
            }).then((response) => {
                setDataAuto(response.data[0])
               
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


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:4000/v1/fullTrip/CreateReservacionAuto`, {
            CantDias : 7,
		    FechaReserva : fechaInicioState,
		    FechaFinReserva : fechaFinState,
		    IdUsuario : Cookies.get('fullTrip_id') ,
		    IdAuto : dataAuto.Id_Auto
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
Estado: "Disponible"
FechaDisponible: "2022-05-20T06:00:00.000Z"
Id_Auto: 5
Marca: "Tesla"
Modelo: "2000"
Placa: "1ABCD2"
Precio: 2000
Servicio_Id_Servicio: 12 */

   
    return (
        <>
            <Box textAlign='center' style={{ position: 'absolute', top: '10%', left: '40%' }}>
                <h1>Reservas</h1>
            </Box>



            <Box style={{ position: 'absolute', top: '20%', left: '30%' }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        title={dataAuto.Marca+` Modelo: `+dataAuto.Modelo}
                        subheader={dataAuto.Estado}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={dataAuto.img}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Descripcion
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

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
                        })} */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            <Box style={{ position: 'absolute', top: '20%', left: '50%' }}>
                <Card sx={{ maxWidth: 345 }}>
                    <h2>Precio: Q{dataAuto.Precio}</h2>
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
                    </CardContent>
                    <CardActions disableSpacing textAlign='center'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className='btn-primario'  disabled={reservar} onClick={handleSubmit} >
                            Reservar
                        </button>
                        
                    </CardActions>

                </Card>
            </Box>
        </>
    );
}
