import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyIcon from '@mui/icons-material/Key';
import { useNavigate } from 'react-router-dom';
import { resgistrarEstudiante } from '../../api/acciones';

export default function RegistrarEstudiante() {

    const [nombreState, setNombreState] = useState("")
    const [apellidoState, setApellidoState] = useState("")
    const [correoState, setCorreoState] = useState("")
    const [fechaState, setFechaState] = useState("")
    const [contraState, setContraState] = useState("")
    const [confiContraState, setConfiContraState] = useState("")
    // const [statusState, setStatusState] = useState(0)
    const navigate = useNavigate();
    async function Registrar() {

        console.log("nombre: " + nombreState)
        console.log("apellido: " + apellidoState)
        console.log("correo: " + correoState)
        console.log("fecha: " + fechaState)
        console.log("contra: " + contraState)
        console.log("conficontra: " + confiContraState)

        try {
            const respuesta = await resgistrarEstudiante(nombreState, apellidoState, correoState, fechaState, contraState, confiContraState).then(res => {
                // setStatusState(res.status)
                //console.log(res)
                if (res.status === 200) {
                    // alert(mensajeState)                    
                    navigate('/')
                } else {
                    // alert(mensajeState)
                    document.getElementById("Nombre").value=""
                    document.getElementById("Apellido").value=""
                    document.getElementById("Correo").value=""
                    document.getElementById("Fecha").value=""
                    document.getElementById("Contra").value=""
                    document.getElementById("Confirmacion").value="" 
                }
            })
            return respuesta.json();
        } catch (error) {
            console.log(error);
        }

    }
    

    return (
        <>
            <Box
                sx={{ textAlign: 'left', position: 'absolute', top: '5%', left: '30%' }}
            >
                <Card sx={{ maxWidth: 750 }}>
                    <CardMedia
                        component="img"
                        alt="logo full trip"
                        height="250"
                        image="https://res.cloudinary.com/ingenieria/image/upload/v1656265612/IMAGENES_MOZILLA/spiderman-lejos-de-casa-marvel-1547720163_wdnxv2.jpg"
                    />
                    <CardContent>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Registrate
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            Ingresa tu información en los campos correspondientes para poder asignarte cursos.
                        </Typography>
                        <br></br>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '70ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="Nombre"
                                name='TFNombre'
                                label="Ingresa tu Nombre:"
                                placeholder="Peter"
                                // value={nombreState}
                                // //onChange={valorNombre} 
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountBoxIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                onChange={event => setNombreState(event.target.value)}
                            // ref={inputNombre}
                            />
                        </Box>

                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '70ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="Apellido"
                                label="Ingresa tu Apellido:"
                                name='TFApellido'
                                placeholder="Parker"
                                // value={apellidoState}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountBoxIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                onChange={event => setApellidoState(event.target.value)}
                            />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '70ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="Correo"
                                label="Ingresa tu Correo Electronico:"
                                placeholder="peter_parker@gmail.com"
                                name='TFCorreo'
                                // value={correoState}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AlternateEmailIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                onChange={event => setCorreoState(event.target.value)}
                            />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '70ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="Fecha"
                                label="Ingresa tu Fecha de Nacimiento:"
                                name='TFFecha'
                                // value={fechaState}
                                placeholder="28/07/1998"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CalendarMonthIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                onChange={event => setFechaState(event.target.value)}
                            />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '70ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="Contra"
                                label="Ingresa tu Contraseña:"
                                name='TFContra'
                                placeholder="********"
                                // value={contraState}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <KeyIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                type="password"
                                variant="standard"
                                onChange={event => setContraState(event.target.value)}
                            />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '70ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="Confirmacion"
                                type="password"
                                name='TFConfiContra'
                                label="Ingresa tu Confirmacion de Contraseña:"
                                // value={confiContraState}
                                placeholder="********"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <KeyIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                onChange={event => setConfiContraState(event.target.value)}
                            />
                        </Box>
                    </CardContent>
                    <CardActions>
                        <p></p>
                        <Box style={{ textAlign: 'center', position: 'absolute', top: '95%', left: '35%' }}>
                            <Button variant="contained" color="primary" onClick={Registrar}>Registrarse!</Button>
                        </Box>
                    </CardActions>
                </Card>
            </Box>

        </>

    )
}

