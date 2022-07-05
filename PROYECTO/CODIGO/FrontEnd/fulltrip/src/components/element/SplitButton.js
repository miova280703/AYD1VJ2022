import * as React from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import MenuList from '@mui/material/MenuList';
import Swal from 'sweetalert2'
import Cookies from "js-cookie";
import Modal from '@mui/material/Modal';
import AuthContext from "../../context/AuthProvider";
const options = ['Iniciar Sesion', 'Registrarse'];
const optionLoggedUser = ['Cerrar Sesion', 'Ver Perfil'];
const optionLoggedAdmin = ['Cerrar Sesion', 'Control Servicios', 'Solicitud Servicios']
const optionLoggedHotel = ['Cerrar Sesion', 'Mis Servicios Hotel']
const optionLoggedAgencia = ['Cerrar Sesion', 'Mis Servicios Agencia']
const optionLoggedAerolinea = ['Cerrar Sesion', 'Mis Servicios Aerolinea']
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const LOGIN_URL = `http://34.125.201.105:4000/v1/fullTrip/Authentication`
const LOGIN_URL1 = `http://localhost:4000/v1/fullTrip/Authentication`

export default function SplitButton() {
  const { setAuth } = React.useContext(AuthContext);

  const [user, setUser] = React.useState('');
  const [psw, setPsw] = React.useState('');

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [isLogged, setIsLogged] = React.useState(options);

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  let navigate = useNavigate();

  const closeSession = () => {
    Cookies.remove('fullTrip_id');
    Cookies.remove('fullTrip_rol');

  }

  const handleClick = () => {
    if (isLogged[selectedIndex] === 'Iniciar Sesion') {
      handleOpenModal();
    }
    if (isLogged[selectedIndex] === 'Registrarse') {
      let path = `/registroTurista`;
      navigate(path);

    }
    if (isLogged[selectedIndex] === 'Cerrar Sesion') {
      closeSession();
      let path = `/`;
      navigate(path);

    }
    if (isLogged[selectedIndex] === 'Ver Perfil') {
      let path = `/ModuloTurista`;
      navigate(path);

    }
    if (isLogged[selectedIndex] === 'Control Servicios') {
      let path = `/controlServicio`;
      navigate(path);
    }
    if (isLogged[selectedIndex] === 'Solicitud Servicios') {
      let path = `/solicitudServicio`;
      navigate(path);
    }
    if (isLogged[selectedIndex] === 'Mis Servicios Hotel') {
      let path = `/misServiciosHotel`;
      navigate(path);
    }
    if (isLogged[selectedIndex] === 'Mis Servicios Agencia') {
      let path = `/misServiciosAgencia`;
      navigate(path);
    }
    if (isLogged[selectedIndex] === 'Mis Servicios Aerolinea') {
      let path = `/misServiciosAerolinea`;
      navigate(path);
    }

    console.info(`You clicked ${isLogged[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function getMenu() {
    let rol = Cookies.get("fullTrip_rol");
    if (rol) {
      console.log("estoy aqui")
      if (rol == 1) {
        console.log("soy turista");
        setIsLogged(optionLoggedUser);
      } else if (rol == 2) {
        console.log("soy admin");
        setIsLogged(optionLoggedAdmin);
      } else if (rol == 3) {
        console.log("soy hotel");
        setIsLogged(optionLoggedHotel);
      } else if (rol == 4) {
        console.log("soy agencia");
        setIsLogged(optionLoggedAgencia);
      } else if (rol == 5) {
        console.log("soy aerolinea");
        setIsLogged(optionLoggedAerolinea);
      }
    } else {
      setIsLogged(options);
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SOY EL LOGIN")
    axios.post(LOGIN_URL1, {
      Email: user,
      Password: psw,
    }).then((response) => {

      handleCloseModal();
      console.log(JSON.stringify(response?.data.data.User));
      const servicio = response?.data.data.User.TipoServicio;
      Cookies.set("fullTrip_id", response?.data.data.User.Id_user);
      if (servicio === 1) {
        Cookies.set("fullTrip_rol", 3);
      } else if (servicio === 2) {
        console.log("estoy aqui")
        Cookies.set("fullTrip_rol", 4);
      } else if (servicio === 3) {
        Cookies.set("fullTrip_rol", 5);
      } else {
        console.log(response?.data.data.User.Tipo_user)
        Cookies.set("fullTrip_rol", response?.data.data.User.Tipo_user);
      }

      const accessToken = response?.data?.accessToken;
      const role = response?.data?.roles;
      getMenu();
      setAuth({ user, psw, role, accessToken })
      Swal.fire(
        `Autenticacion Correcta!`,
        `Bienvenido ${user}!`,
        `success`
      )
    }).catch((err) => {
      handleCloseModal();
      let error = ``;
      if (!err?.response) {
        error = 'No Server Response';
      } else if (err.response?.status === 400) {
        error = 'Missing username or password';
      } else if (err.response?.status === 401) {
        error = 'Unauthorized';
      } else {
        error = 'Login failed';
      }
      Swal.fire(
        `Inicio de Sesion Incorrecto!`,
        `${error}!`,
        `error`
      )

    });
  }

  React.useEffect(() => {
    getMenu();
  }, [isLogged])

  return (
    <React.Fragment>
      <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
        <Button sx={{ bgcolor: '#5A29E7' }} onClick={handleClick}>{isLogged[selectedIndex]}</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
          sx={{ bgcolor: '#5A29E7' }}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {isLogged.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <form className="form-login" onSubmit={handleSubmit}>
            <h3 className='form-login-p'>Te damos la bienvenida a FullTrip</h3>
            <div className="input-container">
              <input placeholder='usuario' type="text" name="uname" onChange={(e) => setUser(e.target.value)} required />
            </div>
            <div className="input-container">
              <input placeholder='password' type="password" name="pass" onChange={(e) => setPsw(e.target.value)} required />
            </div>
            <div className="button-container">
              <button className="button-login" type="submit">Ingresar</button>
            </div>
          </form>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
