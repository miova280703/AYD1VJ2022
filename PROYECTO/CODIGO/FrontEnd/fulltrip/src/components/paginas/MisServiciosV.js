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
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
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


export default function MisServiciosAerolinea() {
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);

    const [precioState, setPrecioState] = useState("")
    const [capacidadState, setCapacidadState] = useState("")
    const [fechaFinState, setFechaFinState] = useState("")

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const [filasTablaState, setFilasTablaState] = useState([]);
    const [ciudadesState, setCiudadesState] = useState([])
    const [ciudads, setciudad] = useState("")
    const [nombreServicioState, setNombreServicioState] = useState("");

    const [precioEditarState, setPrecioEditarState] = useState("");
    const [fechaEditarState, setFechaEditarState] = useState("");
    const [capacidadEditarState, setCapacidadEditarState] = useState("");
    const [ciudadEditarState, setCiudadEditarState] = useState("");
    const [ciudadEditarState1, setCiudadEditarState1] = useState("");
    const [idEditarState, setIdEditarState] = useState(0);
    const [imagenEditarState, setImagenEditarState] = useState("");
    // const handleEstadoChange = (event) => {
    //     setEstadoEditarState(event.target.value);
    // };


    const formData = new FormData();

    formData.append('File', selectedFile);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
        const files = event.target.files;
        const file = files[0];
        getBase64(file);
    };

    const handleChangeCiudad = (event) => {
        setciudad(event.target.value);
    };

    const handleChangeCiudad1 = (event) => {
        setCiudadEditarState(event.target.value);
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

    const RECIBIR_URL = `http://34.125.201.105:4000/v1/fullTrip/VuelosXservicio`
    const RECIBIR_URL1 = `http://localhost:4000/v1/fullTrip/VuelosXservicio`

    async function LlenarTabla() {
        console.log("vuelo servicio id: " + id_usuario)
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
            console.log(err)
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
    const EDITAR_URL = `http://34.125.201.105:4000/v1/fullTrip/UpdateVuelo`
    const EDITAR_URL1 = `http://localhost:4000/v1/fullTrip/UpdateVuelo`
    async function Editar(n, m) {
        console.log(filasTablaState[m].img);
        handleOpen1()
        setIdEditarState(n);
        console.log("habitacion a editar: " + n + " " + m);
        setPrecioEditarState(filasTablaState[m].Precio);
        const fecha = filasTablaState[m].FechaVuelo.split(":")
        const fecha1 = fecha[0] + ":" + fecha[1]
        setFechaEditarState(fecha1)
        setCapacidadEditarState(filasTablaState[m].AsientosDisponibles)
        setCiudadEditarState(filasTablaState[m].Ciudad_Id_Ciudad);
        setImagenEditarState(filasTablaState[m].img)
    }

    async function GuardarEditar() {
        console.log(idEditarState);
        console.log(precioEditarState);
        console.log(fechaEditarState);
        console.log(capacidadEditarState);
        if (ciudadEditarState !=="") {
            setCiudadEditarState1(ciudadEditarState)
        }
        console.log(imagenEditarState);


        axios.put(EDITAR_URL1, {
            IdVuelo: idEditarState,
            FechaVuelo: fechaEditarState,
            AsientosDisponibles: capacidadEditarState,
            Precio: precioEditarState,
            IdCiudad: ciudadEditarState1,
            Imagen: imagenEditarState,
            Activo: 1
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then((res) => {
            console.log(res.data.data.msg)
            handleClose1()
            Swal.fire(
                `Modificacion con Exito!`,
                `${res.data.data.msg}!`,
                `success`
            )
        }).catch((err) => {
            console.log(err)
        });
    }

    const ELIMINAR_URL = `http://34.125.201.105:4000/v1/fullTrip/DeleteVuelo`
    const ELIMINAR_URL1 = `http://localhost:4000/v1/fullTrip/DeleteVuelo`

    async function Eliminar(n) {
        console.log("vuelo a eliminar: " + n);
        axios.put(ELIMINAR_URL1, {
            IdVuelo: n
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
            console.log(err)
            Swal.fire(
                `No se ha podido eliminar`,
                `${err}!`,
                `error`
            )
        });
    }

    const CREARVUELO_URL = `http://34.125.201.105:4000/v1/fullTrip/CreateVuelo`
    const CREARVUELO_URL1 = `http://localhost:4000/v1/fullTrip/CreateVuelo`


    async function Agregar() {
        // console.log(precioState)
        // console.log(fechaFinState)
        // console.log(capacidadState)
        console.log(base64code)
        console.log(selectedFile.name)
        // console.log(id_usuario)
        axios.post(CREARVUELO_URL1, {
            FechaVuelo: fechaFinState,
            AsientosDisponibles: capacidadState,
            Precio: precioState,
            IdServicio: id_usuario,
            IdCiudad: ciudads,
            Estado: "disponible",
            Imagen: base64code,
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
                `Bienvenido ${res.data.msg}!`,
                `success`
            )
        }).catch((err) => {
            console.log(err.data)
        });
    }

    const CIUDADES_URL = `http://34.125.201.105:4000/v1/fullTrip/ViewCity`
    const CIUDADES_URL1 = `http://localhost:4000/v1/fullTrip/ViewCity`
    async function obtenerCiudades() {
        let result = await axios.get(CIUDADES_URL1, {}, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then((res) => {
            console.log(res.data.Ciudades)

            setCiudadesState(res.data.Ciudades)
            // data=res.data.datas
            // return res.data.data
        }).catch((err) => {
            setCiudadesState([])
            // console.log(err.data)
        });
    }

    useEffect(() => {
        LlenarTabla()
        NombreServicio()
        obtenerCiudades()
    }, []);

    return (
        <>
            <NavBar />
            <Box textAlign='center' style={{ position: 'absolute', top: '10%', left: '40%' }}>
                <h1>Mis Servicios Aerolinea   {nombreServicioState}</h1>

            </Box>

            <Box style={{ position: 'absolute', top: '15%', left: '35%' }}>
                <Button class="btn-primario" variant="contained" onClick={handleOpen}>
                    <AddCircleIcon /> VUELO
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
                                label="Ingrese Precio de Reservacion del Vuelo:"
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
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Selecciona tu ciudad:</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={ciudads}
                                    label="Selecciona tu tipo ciudad:"
                                    onChange={handleChangeCiudad}
                                >
                                    {
                                        ciudadesState.map((city) => {
                                            return (
                                                <MenuItem value={city.IdCiudad}>{city.Ciudad}, {city.Pais} </MenuItem>
                                            )
                                        })
                                    }
                                </Select>
                            </FormControl>
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
                                label="Ingrese Capacidad del Vuelo:"
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

            <Box style={{ position: 'absolute', top: '25%', left: '25%' }}>
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
                                    <StyledTableRow key={row.Id_Vuelo} >
                                        <StyledTableCell component="th" scope="row" align="center" >

                                            <img src={row.img} alt="" width="100px" height="100px" />

                                        </StyledTableCell>
                                        <StyledTableCell component="th" scope="row" align="center" >
                                            {row.Precio}
                                        </StyledTableCell>
                                        <StyledTableCell component="th" scope="row" align="center" >
                                            {row.FechaVuelo}
                                        </StyledTableCell>
                                        <StyledTableCell component="th" scope="row" align="center" >
                                            {row.AsientosDisponibles}
                                        </StyledTableCell>
                                        <StyledTableCell component="th" scope="row" align="center" >
                                            <Button variant="outlined" color="secondary" onClick={() => Editar(row.Id_Vuelo, numero)}>
                                                <EditIcon />EDITAR
                                            </Button> &nbsp;
                                            <Button variant="outlined" color="secondary" onClick={() => Eliminar(row.Id_Vuelo)}>
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
                        <h2 id="child-modal-title">EDITAR VUELO </h2>
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
                                label="Ingrese Precio de Reservacion del Vuelo:"
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
                                // label="Ingrese Fecha:"
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
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Selecciona tu ciudad:</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={ciudadEditarState}
                                    label="Selecciona tu tipo ciudad:"
                                    onChange={handleChangeCiudad1}
                                >
                                    {
                                        ciudadesState.map((city) => {
                                            return (
                                                <MenuItem value={city.IdCiudad}>{city.Ciudad}, {city.Pais} </MenuItem>
                                            )
                                        })
                                    }
                                </Select>
                            </FormControl>
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
                                label="Ingrese Capacidad del Vuelo:"
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
