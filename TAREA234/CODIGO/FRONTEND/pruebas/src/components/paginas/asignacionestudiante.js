import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ClassIcon from '@mui/icons-material/Class';
import { useNavigate } from 'react-router-dom';
import { asignarEstudiante } from '../../api/acciones';

export default function AsignacionEstudiante() {

    const [nombreState, setNombreState]=useState("")
    const [direccionState, setDireccionState]=useState("")
    const [ciudadState, setCiudadState]=useState("")
    const [paisState, setPaisState]=useState("")
    const [correoState, setCorreoState]=useState("")
    const navigate = useNavigate();
 
    async function Asignar() {        

        console.log("nombre: " + nombreState)
        console.log("correo: " + correoState)
        console.log("pais: " + paisState)
        console.log("ciudad: " + ciudadState)
        console.log("direccion: " + direccionState)

        try {
            const respuesta = await asignarEstudiante(nombreState, direccionState, ciudadState, paisState, correoState).then(res => {
                // setStatusState(res.status)
                //console.log(res)
                if (res.status === 200) {
                    // alert(mensajeState)                    
                    navigate('/clase')
                } else {
                    // alert(mensajeState)
                    document.getElementById("Nombre").value=""
                    document.getElementById("Curso").value=""
                    document.getElementById("Seccion").value=""
                    document.getElementById("Dia").value=""
                    document.getElementById("Hora").value=""
                }
            })
            // return respuesta1.json()+respuesta.json();
        } catch (error) {
            console.log(error);
        }

    }

    const Salir = () => {
        navigate('/')
    }

    return (
        <>
            
            <Box
                sx={{ textAlign: 'left', position: 'absolute', top: '5%', left: '35%' }}
            >
                <Card sx={{ maxWidth: 750 }}>
                    <CardMedia
                        component="img"
                        alt="logo full trip"
                        height="250"
                        image="https://res.cloudinary.com/ingenieria/image/upload/v1656267841/IMAGENES_MOZILLA/maxresdefault_zyeuru.jpg"
                    />
                    <CardContent>
                        <Box sx={{textAlign: 'center'}}>
                        <Typography gutterBottom variant="h5" component="div">
                            Asignar Cursos
                        </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            Ingresa la informacion del curso a asignar.
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
                                label="Ingresa Nombre de tu Servicio:"
                                placeholder="Gwen Stacy"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountBoxIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                onChange={event => setNombreState(event.target.value)}
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
                                id="Curso"
                                label="Ingresa Curso a Asignar:"
                                placeholder="Matematica"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <ClassIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                onChange={event => setDireccionState(event.target.value)}
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
                                id="Seccion"
                                label="Ingresa Seccion del Curso a Asignar:"
                                placeholder="A"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <ClassIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                onChange={event => setCiudadState(event.target.value)}
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
                                id="Dia"
                                label="Ingresa Dia:"
                                placeholder="Lunes"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CalendarTodayIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                onChange={event => setPaisState(event.target.value)}
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
                                id="Hora"
                                label="Ingresa Hora:"
                                placeholder="8:00"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CalendarTodayIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                onChange={event => setCorreoState(event.target.value)}
                            />
                        </Box>
                        
                        
                    </CardContent>
                    <CardActions>
                        <p></p>
                        <Box style={{ textAlign: 'center', position: 'absolute', top: '95%', left: '25%' }}>
                            <Button variant="contained" color="primary" onClick={Asignar}>Registrarse!</Button>
                        </Box>
                        <Box style={{ textAlign: 'center', position: 'absolute', top: '95%', left: '55%' }}>
                            <Button variant="contained" color="primary" onClick={Salir}>Salir!</Button>
                        </Box>
                    </CardActions>
                </Card>
            </Box>

        </>

    )
}

