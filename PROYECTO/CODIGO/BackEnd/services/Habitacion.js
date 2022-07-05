/* eslint-disable prefer-template */
// const config = require('config');
// const AWS = require('aws-sdk');
const s3 = require('../config/connectS3');
const connection = require('../config/connectDb2');
const {
	CHabitacion,
	RHabitacion,
	UHabitacion,
	DHabitacion,
	searchHabitacion,
	RHabitacionesXservicio,
	RHabitacionXId
} = require('./funtionsDb');

function reverse(s) {
	return s.split('/').reverse().join('/');
}

function bucketS3(foto) {
	const date = new Date();
	const output = `${date.getFullYear()}${date.getMonth() + 1}${date.getDay()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
	const nameImage = `${output}`;
	const nombrei = `${s3.carpeta}/${nameImage}.png`; // fotos -> se llama la carpeta
	const nombreCompleto = `https://ayd1-g10-full-trip.s3.amazonaws.com/${nombrei}`;
	s3.uploadFile(nombrei, foto);
	return nombreCompleto;
}

exports.createHabitacion = async (req, res) => {
	const {
		Precio,
		Estado,
		FechaDisponible,
		CantPersonas,
		Imagen64,
		Imagen,
		IdServicio
	} = req.body;

	if (IdServicio === '') {
		return res.status(400).json('Es necesario seleccionar el Proveedor del servicio');
	}
	if (Precio === '') {
		return res.status(400).json('Es necesario Indicar el precio del servicio');
	}
	if (Estado === '') {
		return res.status(400).json('Es necesario Indicar el estado del servicio');
	}
	if (FechaDisponible === '') {
		return res.status(400).json('Es necesario Indicar la fecha disponible para el servicio');
	}
	if (CantPersonas === '') {
		return res.status(400).json('Es necesario indicar cantidad de personas');
	}
	if (Imagen === '') {
		return res.status(400).json('Es necesario seleccionar imagen para el servicio');
	}
	const date = reverse(FechaDisponible);
	const imagenS3 = bucketS3(Imagen64);
	// eslint-disable-next-line max-len
	const result = await CHabitacion(connection, Precio, Estado, date, CantPersonas, imagenS3, IdServicio);

	return res.status(200).json({ data: { msg: 'Registro de habitación exitoso', resultado: result } });
};

exports.ReadHabitacion = async (req, res) => {
	const Habitaciones = await RHabitacion(connection);
	const data = [];
	// eslint-disable-next-line no-plusplus
	for (let index = 0; index < Habitaciones.length; index++) {
		data[index] = Habitaciones[index];
	}
	return res.status(200).send({ data });
};

exports.UpdateHabitacion = async (req, res) => {
	const {
		IdHabitacion,
		Precio,
		Estado,
		FechaDisponible,
		CantPersonas,
		Imagen
	} = req.body;
	const Habitacion = await searchHabitacion(connection, IdHabitacion);
	if (Habitacion.length === 0) {
		return res.status(404).json('Habitacion no encontrada');
	}
	// const imagenS3 = bucketS3(Imagen);
	const date = reverse(FechaDisponible);
	// eslint-disable-next-line max-len
	const result = await UHabitacion(connection, IdHabitacion, Precio, Estado, date, CantPersonas, Imagen);

	return res.status(200).send({ result });
};

exports.DeleteHabitacion = async (req, res) => {
	const {
		IdHabitacion
	} = req.body;
	const Habitacion = await searchHabitacion(connection, IdHabitacion);
	if (Habitacion.length === 0) {
		return res.status(404).json('Habitacion no encontrada');
	}
	// eslint-disable-next-line max-len
	const result = await DHabitacion(connection, IdHabitacion);

	return res.status(200).send({ result });
};

exports.ReadHabitacionesXservicio = async (req, res) => {
	const {
		IdServicio
	} = req.body;
	const Habitaciones = await RHabitacionesXservicio(connection, IdServicio);
	if (Habitaciones.length === 0) {
		return res.status(404).send({ msg: 'No existen habitaciones registradas para este servicio' });
	}
	const data = [];
	// eslint-disable-next-line no-plusplus
	for (let index = 0; index < Habitaciones.length; index++) {
		data[index] = Habitaciones[index];
	}
	return res.status(200).send({ data });
};

exports.ReadHabitacionXIdentificador = async (req, res) => {
	const {
		IdHabitacion
	} = req.params;
	const Habitacion = await RHabitacionXId(connection, IdHabitacion);
	if (Habitacion.length === 0) {
		return res.status(404).send({ msg: 'No existe Habitacion' });
	}
	const data = [];
	// eslint-disable-next-line no-plusplus
	for (let index = 0; index < Habitacion.length; index++) {
		data[index] = Habitacion[index];
	}
	return res.status(200).json(data);
};
