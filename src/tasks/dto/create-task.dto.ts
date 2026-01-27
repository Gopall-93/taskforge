import { IsEnum, IsInt, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TaskStatus } from 'src/common/enums/task-status.enum';

export class CreateTaskDto {
  @ApiProperty({
    example: 'Follow up with client',
    description: 'Short task title',
  })
  @IsString()
  @MinLength(3)
  title: string;

  @ApiPropertyOptional({
    example: 'Call customer about pricing discussion',
    description: 'Detailed task description',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: 2,
    description: 'Employee ID to whom the task is assigned',
  })
  @IsInt()
  assignedTo: number;

  @ApiProperty({
    example: 5,
    description: 'Customer ID related to this task',
  })
  @IsInt()
  customerId: number;

  @ApiPropertyOptional({
    enum: TaskStatus,
    example: TaskStatus.PENDING,
    description: 'Initial task status',
  })
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}
