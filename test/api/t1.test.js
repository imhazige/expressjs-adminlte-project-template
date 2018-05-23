import apitest from './apitest';
import request from 'supertest';

describe('Test /t1', () => {
  apitest(app => {
    test('e1 GET', done => {
      request(app)
        .get('/t1/e1')
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
      done();
    });

    test('e2 POST', done => {
      request(app)
        .post('/t1/e2')
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
      done();
    });
  });
});
