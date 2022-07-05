const connection = require('../config/connectDb2');
const {
	RNombreServicio
} = require('./funtionsDb');

exports.ReadNombreServicio = async (req, res) => {
	const {
		IdServicio
	} = req.body;
	const Servicio = await RNombreServicio(connection, IdServicio);
	if (Servicio.length === 0) {
		return res.status(404).send({ msg: 'No existen Servicio' });
	}
	const data = [];
	// eslint-disable-next-line no-plusplus
	for (let index = 0; index < Servicio.length; index++) {
		data[index] = Servicio[index];
	}
	return res.status(200).send({ data });
};
