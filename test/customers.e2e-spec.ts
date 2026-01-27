import request from 'supertest';
import { createTestApp } from './setup';
import { randomUUID } from 'crypto';

describe('Customers Routes', () => {
  let app;
  let token;

  const adminEmail = `admin${randomUUID()}@test.com`;
  const customerEmail = `client${randomUUID()}@test.com`;
  const phone = Math.floor(1000000000 + Math.random() * 9000000000).toString();

  beforeAll(async () => {
    app = await createTestApp();

    await request(app.getHttpServer()).post('/auth/register').send({
      name: 'Admin',
      email: adminEmail,
      password: 'password123',
      role: 'ADMIN',
    });

    const res = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: adminEmail, password: 'password123' });

    token = res.body.accessToken;
  });

  afterAll(async () => {
    await app.close();
  });

  it('ADMIN can create customer', async () => {
    const res = await request(app.getHttpServer())
      .post('/customers')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Client A',
        email: customerEmail,
        phone,
      });

    expect(res.status).toBe(201);
  });
});
