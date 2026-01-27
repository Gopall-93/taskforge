import { IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from 'src/common/enums/task-status.enum';

export class UpdateStatusDto {
  @ApiProperty({
    enum: TaskStatus,
    example: TaskStatus.IN_PROGRESS,
    description: 'New status of the task',
  })
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
