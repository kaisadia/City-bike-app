const server = require('./index.js');
const supertest = require('supertest');
const api = supertest(server);


describe('Test stations endpoint', () => {
  test('GET /stations should return an array of stations', async () => {
    const res = await api.get('/stations');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test('station contains id', async () => {
    const response = await api.get('/stations')
    const id = response.body.map(r => r.id)
    expect(id).toBeDefined()
})
})

describe('Test trips endpoint', () => {
    test('GET /trips should return an array of trips', async () => {
      const res = await api.get('/trips');
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBeGreaterThan(0);
    });
  
    test('trips contains id', async () => {
      const response = await api.get('/trips')
      const id = response.body.map(r => r.id)
      expect(id).toBeDefined()
  })
  })
  
  
  

