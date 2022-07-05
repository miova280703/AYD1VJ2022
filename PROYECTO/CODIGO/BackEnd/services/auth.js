// agregar el compare en el const de acá abajo
const validation = require('validator');
const connection = require('../config/connectDb2');
const { searchUser } = require('./funtionsDb');
const { compare } = require('../utils/handlePassword');
const { tokenSign } = require('../utils/handleJwt');

/* exports.authCTRL = async (req, res) => {
	const info = req.body;
	const password = await encrypt(info.password);
	const body = { ...info, password };
	const data = {
		token: await tokenSign(body),
		user: body
	};
	return res.status(200).json({ data });
}; */

exports.LoginCTRL = async (req, res) => {
	const {
		Email, Password
	} = req.body;
	const User = await searchUser(connection, Email);
	if (!validation.isEmail(Email)) {
		return res.status(400).json('Email is not valid');
	}
	if (User.length === 0) {
		return res.status(404).json('Usuario no encontrado');
	}
	const passEncriptada = User[0].Pass;
	const check = await compare(Password, passEncriptada);
	if (!check) {
		return res.status(402).json('La contraseña no es correcta');
	}

	const data = {
		token: await tokenSign(User[0]),
		User: {
			Id_user: User[0].Id_Usuario,
			Name: User[0].Nombre,
			Nacimiento: User[0].FechaNacimiento,
			Correo: User[0].Correo,
			Tipo_user: User[0].TipoUsuario_Id_Tipo,
			TipoServicio: User[0].TipoServicio
		}
	};

	return res.status(200).send({ data });
};
