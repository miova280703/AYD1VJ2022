// const config = require('config');
const s3 = require('../config/connectS3');
const connection = require('../config/connectDb2');
const {
	CAutomovil,
	RAutomovil,
	UAutomovil,
	DAutomovil,
	searchAutomovil,
	RAutosXservicio,
	RAutoXId
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

exports.createAutomovil = async (req, res) => {
	const {
		Marca,
		Placa,
		Modelo,
		Precio,
		FechaDisponible,
		IdServicio,
		Imagen
	} = req.body;
	if (Marca === '') {
		return res.status(400).json('Es necesario seleccionar la marca del auto');
	}
	if (Placa === '') {
		return res.status(400).json('Es necesario Indicar la placa del auto');
	}
	if (Modelo === '') {
		return res.status(400).json('Es necesario Indicar el Modelo del auto');
	}
	if (Precio === '') {
		return res.status(400).json('Es necesario Indicar el precio del auto');
	}
	if (FechaDisponible === '') {
		return res.status(400).json('Es necesario indicar la fecha disponible del auto');
	}
	if (IdServicio === '') {
		return res.status(400).json('Es necesario indicar el servicio que provee el auto');
	}
	if (Imagen === '') {
		return res.status(400).json('Es necesario seleccionar imagen para el servicio');
	}
	const date = reverse(FechaDisponible);
	// eslint-disable-next-line max-len
	const imagenS3 = bucketS3(Imagen);
	// eslint-disable-next-line max-len
	const result = await CAutomovil(connection, Marca, Placa, Modelo, Precio, date, IdServicio, imagenS3);

	return res.status(200).json({ data: { msg: 'Registro de Automovil exitoso', resultado: result } });
};

exports.ReadAutomovil = async (req, res) => {
	const Automoviles = await RAutomovil(connection);
	const data = [];
	// eslint-disable-next-line no-plusplus
	for (let index = 0; index < Automoviles.length; index++) {
		data[index] = Automoviles[index];
	}

	return res.status(200).send({ data });
};

exports.UpdateAutomovil = async (req, res) => {
	const {
		IdAutomovil,
		Marca,
		Placa,
		Modelo,
		Precio,
		FechaDisponible,
		Imagen,
		Estado,
		Activo
	} = req.body;
	const Automovil = await searchAutomovil(connection, IdAutomovil);
	if (Automovil.length === 0) {
		return res.status(404).json('Automovil no encontrado');
	}
	// const imagenS3 = bucketS3(Imagen);
	const date = reverse(FechaDisponible);
	// eslint-disable-next-line max-len
	const result = await UAutomovil(connection, IdAutomovil, Marca, Placa, Modelo, Precio, date, Imagen, Estado, Activo);

	return res.status(200).send({ data: { msg: 'Actualización de automovil correcto', Resultado: result } });
};

exports.DeleteAutomovil = async (req, res) => {
	const {
		IdAutomovil
	} = req.body;
	const Automovil = await searchAutomovil(connection, IdAutomovil);
	if (Automovil.length === 0) {
		return res.status(404).json('Automovil no encontrada');
	}
	// eslint-disable-next-line max-len
	const result = await DAutomovil(connection, IdAutomovil);

	return res.status(200).send({ data: { msg: 'Automovil Eliminado correctamente', Resultado: result } });
};

exports.ReadAutosXservicio = async (req, res) => {
	const {
		IdServicio
	} = req.body;
	const Autos = await RAutosXservicio(connection, IdServicio);
	if (Autos.length === 0) {
		return res.status(404).send({ msg: 'No existen Autos registradas para este servicio' });
	}
	const data = [];
	// eslint-disable-next-line no-plusplus
	for (let index = 0; index < Autos.length; index++) {
		data[index] = Autos[index];
	}
	return res.status(200).send({ data });
};

exports.ReadAutosXIdentificador = async (req, res) => {
	const {
		IdAutomovil
	} = req.params;
	const Auto = await RAutoXId(connection, IdAutomovil);
	if (Auto.length === 0) {
		return res.status(404).send({ msg: 'No existe el auto buscado' });
	}
	const data = [];
	// eslint-disable-next-line no-plusplus
	for (let index = 0; index < Auto.length; index++) {
		data[index] = Auto[index];
	}
	return res.status(200).json(data);
};
