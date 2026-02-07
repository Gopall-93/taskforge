import request from 'supertest';
import { createTestApp } from './setup';
import { randomUUID } from 'crypto';

describe('Auth Routes', () => {
  let app;
  const email = `admin-${randomUUID()}@test.com`;

  beforeAll(async () => {
    app = await createTestApp();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should register user', async () => {
    const res = await request(app.getHttpServer()).post('/auth/register').send({
      name: 'Admin',
      email,
      password: 'password123',
      role: 'ADMIN',
    });

    expect(res.status).toBe(201);
    expect(res.body.email).toBe(email);
  });

  it('should login user', async () => {
    const res = await request(app.getHttpServer()).post('/auth/login').send({
      email,
      password: 'password123',
    });

    expect(res.status).toBe(201);
    expect(res.body.accessToken).toBeDefined();
  });
});
