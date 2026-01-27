import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from 'src/common/enums/task-status.enum';

export class TaskResponseDto {
  @ApiProperty({
    example: 1,
    description: 'Unique task identifier',
  })
  id: number;

  @ApiProperty({
    example: 'Follow up with client',
    description: 'Task title',
  })
  title: string;

  @ApiProperty({
    example: 'Call customer about proposal',
    description: 'Detailed task description',
    nullable: true,
  })
  description: string | null;

  @ApiProperty({
    enum: TaskStatus,
    example: TaskStatus.PENDING,
    description: 'Current task status',
  })
  status: TaskStatus;

  @ApiProperty({
    example: 2,
    description: 'Employee ID assigned to this task',
  })
  assignedToId: number;

  @ApiProperty({
    example: 5,
    description: 'Customer ID linked to this task',
  })
  customerId: number;

  @ApiProperty({
    example: '2026-01-28T12:00:00.000Z',
    description: 'Task creation timestamp',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2026-01-29T10:15:00.000Z',
    description: 'Last update timestamp',
  })
  updatedAt: Date;
}
