import { Controller, Post, Get, Patch, Param, Body, Req } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Roles } from 'src/common/decorators/roles.decorators';
import { Role } from 'src/common/enums/role.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('Tasks')
@ApiBearerAuth()
@Controller('tasks')
export class TasksController {
  constructor(private service: TasksService) {}

  @Post()
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Create task and assign to employee (ADMIN only)' })
  @ApiBody({ type: CreateTaskDto })
  @ApiResponse({ status: 201, description: 'Task created successfully' })
  @ApiResponse({ status: 404, description: 'Employee or customer not found' })
  @ApiResponse({ status: 403, description: 'Admin access required' })
  create(@Body() dto: CreateTaskDto) {
    return this.service.create(dto);
  }

  @Get()
  @Roles(Role.ADMIN, Role.EMPLOYEE)
  @ApiOperation({ summary: 'Get tasks (ADMIN sees all, EMPLOYEE sees own)' })
  @ApiResponse({ status: 200, description: 'Tasks list returned' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  findAll(@Req() req) {
    return this.service.findAll(req.user);
  }

  @Patch(':id/status')
  @Roles(Role.ADMIN, Role.EMPLOYEE)
  @ApiOperation({ summary: 'Update task status' })
  @ApiParam({ name: 'id', example: 1 })
  @ApiBody({ type: UpdateStatusDto })
  @ApiResponse({ status: 200, description: 'Task status protectd' })
  @ApiResponse({ status: 404, description: 'Task not found' })
  @ApiResponse({ status: 403, description: 'Not authorized to update this task' })
  updateStatus(@Param('id') id: string, @Body() dto: UpdateStatusDto, @Req() req) {
    return this.service.updateStatus(Number(id), dto, req.user);
  }
}

