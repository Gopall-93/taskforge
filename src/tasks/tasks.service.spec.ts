import { Test } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { PrismaService } from '../prisma/prisma.service';

describe('TasksService', () => {
  let service: TasksService;
  let prisma: any;

  beforeEach(async () => {
    prisma = {
      user: { findUnique: jest.fn() },
      customer: { findUnique: jest.fn() },
      task: {
        create: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
      },
    };

    const module = await Test.createTestingModule({
      providers: [
        TasksService,
        { provide: PrismaService, useValue: prisma },
      ],
    }).compile();

    service = module.get(TasksService);
  });

  it('should create task', async () => {
    prisma.user.findUnique.mockResolvedValue({ role: 'EMPLOYEE' });
    prisma.customer.findUnique.mockResolvedValue({ id: 1 });
    prisma.task.create.mockResolvedValue({ id: 1 });

    const res = await service.create({
      title: 'Task',
      assignedTo: 2,
      customerId: 1,
    } as any);

    expect(res.id).toBe(1);
  });
});
