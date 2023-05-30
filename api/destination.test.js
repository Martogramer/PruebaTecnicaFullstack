const request = require('supertest');
const app = require('./app');

describe('GET /destinations', () => {
  test('debería devolver los destinos existentes', async () => {
    const response = await request(app).get('/destinations');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
  }, 20000);
});
