import React, { useState } from 'react'
import axios from 'axios';
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
import { useNavigate } from 'react-router-dom';
import KeyIcon from '@mui/icons-material/Key';
import { iniciarSesion } from './api/acciones';

export default function RegistrarTurista() {

    const [nombreState, setNombreState] = useState("")
    const [confiContraState, setConfiContraState] = useState("")
    const navigate = useNavigate();
    async function Entrar() {

        console.log("nombre: " + nombreState)
        console.log("conficontra: " + confiContraState)

        try {
            const respuesta = await iniciarSesion(nombreState, confiContraState).then(res=> {
                // setStatusState(res.status)
                //console.log(res)
                if (res.status === 200) {
                    // alert(mensajeState)                    
                    navigate('/estudiante')
                } else {
                    // alert(mensajeState)
                    document.getElementById("CorreoEst").value = ""
                    document.getElementById("ContraEst").value = ""
                }
            })


            return respuesta;
        } catch (error) {
            console.log(error);
        }

    }


    const Registrar = () => {
        navigate('/registro')
    }

    return (
        <>
            <Box
                sx={{ textAlign: 'left', position: 'absolute', top: '25%', left: '1%' }}
            >
                {/* <img src='https://res.cloudinary.com/ingenieria/image/upload/v1656031186/csu/turistas_h66khn.jpg'></img> */}
            </Box>
            <Box
                sx={{ textAlign: 'left', position: 'absolute', top: '5%', left: '30%' }}
            >
                <Card sx={{ maxWidth: 750 }}>
                    <CardMedia
                        component="img"
                        alt="logo full trip"
                        height="350"
                        image="https://res.cloudinary.com/ingenieria/image/upload/v1656223214/IMAGENES_MOZILLA/YFFTRYWU3VDRZJBYXJBPUBPOPE_ztdcay.jpg"
                    />
                    <CardContent>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                INICIAR SESION
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            Ingresa tus credenciales para iniciar sesion.
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
                                id="CorreoEst"
                                name='Correo'
                                label="Ingresa tu Correo Electronico:"
                                placeholder="spidy@gmail.com"
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
                                id="ContraEst"
                                type="password"
                                name='Contra'
                                label="Ingresa tu Contraseña:"
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
                        <Box style={{ textAlign: 'center', position: 'absolute', top: '94%', left: '20%' }}>
                            <Button variant="contained" color="primary" onClick={Registrar}>Registrarse!</Button>
                        </Box>
                        <Box style={{ textAlign: 'center', position: 'absolute', top: '94%', left: '50%' }}>
                            <Button variant="contained" color="primary" onClick={Entrar}>Entrar!</Button>
                        </Box>
                    </CardActions>
                </Card>
            </Box>

        </>

    )
}


