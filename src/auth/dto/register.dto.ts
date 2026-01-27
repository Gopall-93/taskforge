import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/common/enums/role.enum';

export class RegisterDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'Full name of the user',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'john@mail.com',
    description: 'Unique email address used for login',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'password123',
    description: 'Account password (minimum 6 characters)',
    minLength: 6,
  })
  @MinLength(6)
  password: string;

  @ApiProperty({
    enum: Role,
    example: Role.EMPLOYEE,
    description: 'User role in the system',
  })
  @IsEnum(Role)
  role: Role;
}
