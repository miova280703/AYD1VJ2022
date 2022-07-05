const request = require('supertest');
const app = require('../server');

const rutaget = '/v1/fullTrip/NombreServicio';

const Servicio = {
	'IdServicio': 1
};

describe('POST / Ver nombre Servicio', () => {
	test('debería de responder un status 200, Servicio encontrado', async () => {
		const response = await request(app).post(rutaget).send({ ...Servicio });
		expect(response.statusCode).toBe(200);
	});

	test('debería de responder un status 404, Servicio No encontrado', async () => {
		const response = await request(app).post(rutaget).send({
			...Servicio, IdServicio: 5000
		});
		expect(response.statusCode).toBe(404);
	});
});
