import request from 'supertest';

import { createTestApp } from './setup';

describe('Tasks Routes', () => {
  let app;
  let token;

  beforeAll(async () => {
    app = await createTestApp();

    await request(app.getHttpServer()).post('/auth/register').send({
      name: 'Admin',
      email: 'admin4@test.com',
      password: 'password123',
      role: 'ADMIN',
    });

    const res = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'admin4@test.com', password: 'password123' });

    token = res.body.accessToken;
  });
  afterAll(async () => {
    await app.close();
  });

  it('ADMIN should get tasks list', async () => {
    const res = await request(app.getHttpServer())
      .get('/tasks')
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(200);
  });
});
