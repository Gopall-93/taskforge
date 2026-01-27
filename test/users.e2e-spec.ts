import request from 'supertest';

import { createTestApp } from './setup';
import { randomUUID } from 'crypto';

describe('Users Routes', () => {
  let app;
  let token;
  const email = `admin${randomUUID()}@test.com`;

  beforeAll(async () => {
    app = await createTestApp();

    await request(app.getHttpServer()).post('/auth/register').send({
      name: 'Admin',
      email,
      password: 'password123',
      role: 'ADMIN',
    });

    const res = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email, password: 'password123' });

    token = res.body.accessToken;
  });

  afterAll(async () => {
    await app.close();
  });

  it('ADMIN should get users list', async () => {
    const res = await request(app.getHttpServer())
      .get('/users')
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
