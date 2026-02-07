import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Role } from 'src/common/enums/role.enum';
import { TaskStatus } from 'src/common/enums/task-status.enum';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateTaskDto) {
    const [user, customer] = await Promise.all([
      this.prisma.user.findUnique({ where: { id: dto.assignedTo } }),
      this.prisma.customer.findUnique({ where: { id: dto.customerId } }),
    ]);

    if (!user || user.role !== Role.EMPLOYEE) {
      throw new NotFoundException('Employee not found');
    }

    if (!customer) {
      throw new NotFoundException('Customer not found');
    }

    return this.prisma.task.create({
      data: {
        title: dto.title,
        description: dto.description,
        status: dto.status ?? TaskStatus.PENDING,
        assignedToId: dto.assignedTo,
        customerId: dto.customerId,
      },
      include: {
        assignedTo: { select: { id: true, name: true, email: true } },
        customer: {
          select: { id: true, name: true, email: true, phone: true },
        },
      },
    });
  }

  async findAll(user: any) {
    if (!user) {
      throw new UnauthorizedException();
    }

    const include = {
      assignedTo: { select: { id: true, name: true, email: true } },
      customer: { select: { id: true, name: true, email: true, phone: true } },
    };

    if (user.role === Role.ADMIN) {
      return this.prisma.task.findMany({ include });
    }

    return this.prisma.task.findMany({
      where: { assignedToId: user.userId },
      include,
    });
  }

  async updateStatus(id: number, dto: UpdateStatusDto, user: any) {
    if (!user) {
      throw new UnauthorizedException();
    }

    const task = await this.prisma.task.findUnique({ where: { id } });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    if (user.role !== Role.ADMIN && task.assignedToId !== user.userId) {
      throw new ForbiddenException('Not your task');
    }

    return this.prisma.task.update({
      where: { id },
      data: { status: dto.status },
      include: {
        assignedTo: { select: { id: true, name: true, email: true } },
        customer: {
          select: { id: true, name: true, email: true, phone: true },
        },
      },
    });
  }
}
