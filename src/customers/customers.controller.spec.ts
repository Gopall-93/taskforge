import { CustomersService } from './customers.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('CustomersService', () => {
  let service: CustomersService;
  let prisma: PrismaService;

  beforeEach(() => {
    prisma = {
      customer: {
        findUnique: jest.fn(),
        create: jest.fn(),
      },
    } as any;

    service = new CustomersService(prisma);
  });

  it('should create new customer if email not exists', async () => {
    prisma.customer.findUnique.mockResolvedValue(null);
    prisma.customer.create.mockResolvedValue({ id: 1 });

    const res = await service.create({
      name: 'Test',
      email: 'test@mail.com',
      phone: '9876543210',
    });

    expect(res.id).toBe(1);
  });
});
