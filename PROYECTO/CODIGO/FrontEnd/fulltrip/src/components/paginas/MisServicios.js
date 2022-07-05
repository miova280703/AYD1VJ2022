// import * as React from 'react';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Cookies from "js-cookie";
import Swal from 'sweetalert2'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NavBar from '../element/NavBar'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#7D3C98",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: "#E3CFEA",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function MisServiciosHotel() {
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);

    const [precioState, setPrecioState] = useState("")
    const [capacidadState, setCapacidadState] = useState("")
    const [fechaFinState, setFechaFinState] = useState("")

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const [filasTablaState, setFilasTablaState] = useState([]);
    const [nombreServicioState, setNombreServicioState] = useState("");

    const [precioEditarState, setPrecioEditarState] = useState("");
    const [fechaEditarState, setFechaEditarState] = useState("");
    const [capacidadEditarState, setCapacidadEditarState] = useState("");
    const [estadoEditarState, setEstadoEditarState] = useState("");
    const [estadoEditarState1, setEstadoEditarState1] = useState("");
    const [idEditarState, setIdEditarState] = useState(0);
    const [imagenEditarState, setImagenEditarState] = useState("");
    const handleEstadoChange = (event) => {
        setEstadoEditarState(event.target.value);
    };


    const formData = new FormData();

    formData.append('File', selectedFile);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
        const files = event.target.files;
        const file = files[0];
        getBase64(file);
    };


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };

    const handleOpen = () => {
        setOpen(true);
        // setIndice(n);
        // console.log("nombre: " + n)
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen1 = () => {
        setOpen1(true);
        // setIndice(n);
        // console.log("nombre: " + n)
    };
    const handleClose1 = () => {
        setOpen1(false);
    };


    const [base64code, setbase64code] = useState("")
    const onChange = e => {
        const files = e.target.files;
        const file = files[0];
        getBase64(file);
    };

    const onLoad = fileString => {
        // console.log(fileString);
        const myArray = fileString.split(",", 2);
        setbase64code(myArray[1])
        // this.base64code = fileString
    };

    const getBase64 = file => {
        let reader = new FileReader();
        // console.log(reader)
        reader.readAsDataURL(file);
        reader.onload = () => {
            onLoad(reader.result);
        };
    };

    const id_usuario = Cookies.get('fullTrip_id')

    const RECIBIR_URL = `http://34.125.201.105:4000/v1/fullTrip/HabitacionXservicio`
    const RECIBIR_URL1 = `http://localhost:4000/v1/fullTrip/HabitacionXservicio`

    async function LlenarTabla() {
        axios.post(RECIBIR_URL1, {
            IdServicio: id_usuario
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then((res) => {
            console.log(res.data.data)
            setFilasTablaState(res.data.data);
        }).catch((err) => {
            console.log(err.data)
        });
    }

    //http://localhost:4000/v1/fullTrip/NombreServicio
    const NOMBRE_URL = `http://34.125.201.105:4000/v1/fullTrip/NombreServicio`
    const NOMBRE_URL1 = `http://localhost:4000/v1/fullTrip/NombreServicio`

    async function NombreServicio() {
        axios.post(NOMBRE_URL1, {
            IdServicio: id_usuario
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then((res) => {
            console.log(res.data.data[0].Nombre)
            setNombreServicioState(res.data.data[0].Nombre);
        }).catch((err) => {
            console.log(err.data)
            
        });

    }

    ///v1/fullTrip/UpdateHabitacion
    const EDITAR_URL = `http://34.125.201.105:4000/v1/fullTrip/UpdateHabitacion`
    const EDITAR_URL1 = `http://localhost:4000/v1/fullTrip/UpdateHabitacion`
    async function Editar(n, m) {
        handleOpen1()
        setIdEditarState(n);
        console.log("habitacion a editar: " + n + " " + m);
        setPrecioEditarState(filasTablaState[m].Precio);
        const fecha = filasTablaState[m].FechaDisponibilidad.split(":")
        const fecha1 = fecha[0] + ":" + fecha[1]
        setFechaEditarState(fecha1)
        setCapacidadEditarState(filasTablaState[m].CantPersonas)
        setEstadoEditarState1(filasTablaState[m].Estado);
        setImagenEditarState(filasTablaState[m].img)
    }

    async function GuardarEditar() {
        console.log(precioEditarState);
        console.log(fechaEditarState);
        console.log(capacidadEditarState);
        if (estadoEditarState === 1) {
            setEstadoEditarState1("disponible")
        } else if (estadoEditarState === 2) {
            setEstadoEditarState1("ocupado")
        }
        console.log(estadoEditarState1);


        axios.put(EDITAR_URL1, {
            IdHabitacion: idEditarState,
            Precio: precioEditarState,
            Estado: estadoEditarState1,
            FechaDisponible: fechaEditarState,
            CantPersonas: capacidadEditarState,
            Imagen: imagenEditarState,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then((res) => {
            console.log(res.data)
            handleClose1()
            Swal.fire(
                `Modificacion con Exito!`,
                `${res.data.data.msg}!`,
                `success`
            )
        }).catch((err) => {
            console.log(err.data)
            Swal.fire(
                `No se ha podido eliminar`,
                `${err}!`,
                `error`
            )
        });
    }

    const ELIMINAR_URL = `http://34.125.201.105:4000/v1/fullTrip/DeleteHabitacion`
    const ELIMINAR_URL1 = `http://localhost:4000/v1/fullTrip/DeleteHabitacion`

    async function Eliminar(n) {
        console.log("habitacion a editar: " + n);
        axios.put(ELIMINAR_URL1, {
            IdHabitacion: n
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then((res) => {
            console.log(res.data)
            Swal.fire(
                `Se ha eliminado habitacion con Exito`,
                `${res.data.data.msg}!`,
                `success`
            )
        }).catch((err) => {
            console.log(err.data)
            Swal.fire(
                `No se ha podido eliminar`,
                `${err}!`,
                `error`
            )
        });
    }

    const CREARHABITACION_URL = `http://34.125.201.105:4000/v1/fullTrip/CreateHabitacion`
    const CREARHABITACION_URL1 = `http://localhost:4000/v1/fullTrip/CreateHabitacion`

    async function Agregar() {
        // console.log(precioState)
        // console.log(fechaFinState)
        // console.log(capacidadState)
        console.log(base64code)
        console.log(selectedFile.name)
        // console.log(id_usuario)
        axios.post(CREARHABITACION_URL1, {
            Precio: precioState,
            Estado: "disponible",
            FechaDisponible: fechaFinState,
            CantPersonas: capacidadState,
            Imagen64: base64code,
            Imagen: selectedFile.name,
            IdServicio: id_usuario
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then((res) => {
            console.log(res.data)
            handleClose()
            Swal.fire(
                `Creacion Correcta!`,
                `${res.data.data.msg}!`,
                `success`
            )
        }).catch((err) => {
            console.log(err.data)
            Swal.fire(
                `No se ha podido eliminar`,
                `${err}!`,
                `error`
            )
        });
    }

    useEffect(() => {
        LlenarTabla()
        NombreServicio()
    }, []);

    return (
        <>
            <NavBar />
            <Box textAlign='center' style={{ position: 'absolute', top: '10%', left: '40%' }}>
                <h1>Mis Servicios Hotel   {nombreServicioState}</h1>

            </Box>

            <Box style={{ position: 'absolute', top: '15%', left: '35%' }}>
                <Button class="btn-primario" variant="contained" onClick={handleOpen}>
                    <AddCircleIcon /> HABITACION
                </Button>
                <Modal
                    hideBackdrop
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <Box sx={{ ...style, width: 400 }}>
                        <br />

                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '35ch', marginY: 1 },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <TextField
                                id="input-with-icon-textfield"
                                name='TFNombre'
                                label="Ingrese Precio de Reservacion de la Habitacion:"
                                placeholder="Q 0.00"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            {/* <AccountBoxIcon /> */}
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                onChange={event => setPrecioState(event.target.value)}
                            // ref={inputNombre}
                            />
                        </Box>
                        <br />
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '35ch', marginY: 1 },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <TextField
                                // label="Ingrese Fecha:"
                                type="datetime-local" id="meeting-time"
                                name="meeting-time"
                                // value="2018-06-12T19:30"
                                // min="2018-06-07T00:00" max="2018-06-14T00:00"
                                onChange={event => setFechaFinState(event.target.value)}
                            />
                        </Box>
                        <br />
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '35ch', marginY: 1 },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <TextField
                                id="input-with-icon-textfield"
                                name='TFNombre'
                                label="Ingrese Capacidad de la Habitacion:"
                                placeholder="1"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            {/* <AccountBoxIcon /> */}
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                onChange={event => setCapacidadState(event.target.value)}
                            // ref={inputNombre}
                            />
                        </Box>
                        <br />
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '35ch', marginY: 1 },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="file" name="file" onChange={changeHandler} />
                            {isFilePicked ? (
                                <div>
                                    <p>Nombre Archivo: {selectedFile.name}</p>
                                    <p>Tipo Archivo: {selectedFile.type}</p>
                                    <p>Tamano en bytes: {selectedFile.size}</p>
                                    <p>
                                        Ultima modificacion:{' '}
                                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                                    </p>
                                </div>
                            ) : (
                                <p>Seleccione un archivo para ver sus detalles</p>
                            )}
                        </Box>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="outlined" color="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="outlined" color="secondary" onClick={Agregar}>
                            Guardar
                        </Button>
                    </Box>
                </Modal>
            </Box>

            <Box style={{ position: 'absolute', top: '25%', left: '15%', width: "1250px", height: "1000px" }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table" responsive>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">
                                    <Typography gutterBottom variant="h5" component="div">
                                        Imagen
                                    </Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <Typography gutterBottom variant="h5" component="div">
                                        Precio (Q.)
                                    </Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <Typography gutterBottom variant="h5" component="div">
                                        Estado
                                    </Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <Typography gutterBottom variant="h5" component="div">
                                        Fecha
                                    </Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <Typography gutterBottom variant="h5" component="div">
                                        Capacidad
                                    </Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <Typography gutterBottom variant="h5" component="div">
                                        Acciones
                                    </Typography>
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filasTablaState.map((row, numero) => {
                               
                                return (
                                    <StyledTableRow key={row.Id_Habitacion} >
                                        <StyledTableCell component="th" scope="row" align="center" >

                                            <img src={row.img} alt="" width="100px" height="100px"/>

                                        </StyledTableCell>
                                        <StyledTableCell component="th" scope="row" align="center" >
                                            {row.Precio}
                                        </StyledTableCell>
                                        <StyledTableCell component="th" scope="row" align="center" >
                                            {row.Estado}
                                        </StyledTableCell>
                                        <StyledTableCell component="th" scope="row" align="center" >
                                            {row.FechaDisponibilidad}
                                        </StyledTableCell>
                                        <StyledTableCell component="th" scope="row" align="center" >
                                            {row.CantPersonas}
                                        </StyledTableCell>
                                        <StyledTableCell component="th" scope="row" align="center" >
                                            <Button variant="outlined" color="secondary" onClick={() => Editar(row.Id_Habitacion, numero)}>
                                                <EditIcon />EDITAR
                                            </Button> &nbsp;
                                            <Button variant="outlined" color="secondary" onClick={() => Eliminar(row.Id_Habitacion)}>
                                                <DeleteForeverIcon />ELIMINAR
                                            </Button> &nbsp;

                                        </StyledTableCell>
                                    </StyledTableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Modal
                    hideBackdrop
                    open={open1}
                    onClose={handleClose1}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <Box sx={{ ...style, width: 400 }}>
                        <h2 id="child-modal-title">EDITAR HABITACION </h2>
                        <br />

                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '35ch', marginY: 1 },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <TextField
                                id="input-with-icon-textfield"
                                name='TFNombre'
                                label="Ingrese Precio de Reservacion de la Habitacion:"
                                placeholder="Q 0.00"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            {/* <AccountBoxIcon /> */}
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                defaultValue={precioEditarState}
                                onChange={event => setPrecioEditarState(event.target.value)}
                            // ref={inputNombre}
                            />
                        </Box>
                        <br />
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '35ch', marginY: 1 },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <TextField
                                //label="Ingrese Fecha:"
                                type="datetime-local" id="meeting-time"
                                name="meeting-time"
                                value={fechaEditarState}
                                // value="2018-06-12T19:30"
                                // min="2018-06-07T00:00" max="2018-06-14T00:00"
                                onChange={event => setFechaEditarState(event.target.value)}
                            />
                        </Box>
                        <br />
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '35ch', marginY: 1 },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <TextField
                                id="input-with-icon-textfield"
                                name='TFNombre'
                                label="Ingrese Capacidad de la Habitacion:"
                                placeholder="1"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            {/* <AccountBoxIcon /> */}
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                defaultValue={capacidadEditarState}
                                onChange={event => setCapacidadEditarState(event.target.value)}
                            // ref={inputNombre}
                            />
                        </Box>
                        <br/>

                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '35ch', marginY: 1 },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Selecciona Estado Habitacion:</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={estadoEditarState}
                                    label="Selecciona Estado Habitacion:"
                                    onChange={handleEstadoChange}
                                >
                                    <MenuItem value={1}>Disponible</MenuItem>
                                    <MenuItem value={2}>Ocupada</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <br />                       
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="outlined" color="secondary" onClick={handleClose1}>
                            Cerrar
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="outlined" color="secondary" onClick={GuardarEditar}>
                            Guardar
                        </Button>
                    </Box>
                </Modal>
            </Box>
        </>
    );
}
