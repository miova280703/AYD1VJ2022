// import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

export default function Estudiante() {

    const navigate = useNavigate();
    const Salir = ()=>{
        navigate('/')
    }

    const Asignar = () => {
        navigate('/asignacion')
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
                        image="https://res.cloudinary.com/ingenieria/image/upload/v1656280724/IMAGENES_MOZILLA/3MCSFBBPAZGBPAXMDWZQ2DX5FE_uoivwg.webp"
                    />
                    <CardContent>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                ESTUDIANTE
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            Bienvenido estudiante, asignate a tus clases.
                        </Typography>
                        <br></br>
                        
                    </CardContent>
                    <CardActions>
                        <p></p>
                        <Box style={{ textAlign: 'center', position: 'absolute', top: '90%', left: '20%' }}>
                            <Button variant="contained" color="primary" onClick={Asignar}>Asignarse!</Button>
                        </Box>
                        <Box style={{ textAlign: 'center', position: 'absolute', top: '90%', left: '50%' }}>
                            <Button variant="contained" color="primary" onClick={Salir}>Salir!</Button>
                        </Box>
                    </CardActions>
                </Card>
            </Box>

        </>

    )
}


