import request from 'supertest';
import app from './app';

describe('GET /', () => {
    it('should return 200 OK', async (done) => {
        const res = await request(app).get('/');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('health', 'ok');
        expect(res.body).toHaveProperty('info');
        expect(res.body.info).toContain('uptime');
        done();
    });
});

describe('Unit test', () => {
    it('should be true', () => {
        expect(true).toBe(true);
    });
});
