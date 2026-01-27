import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/common/enums/role.enum';

export class AuthResponseDto {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  accessToken: string;

  @ApiProperty({
    example: {
      id: 1,
      name: 'John Doe',
      email: 'john@mail.com',
      role: 'ADMIN',
    },
  })
  user: {
    id: number;
    name: string;
    email: string;
    role: Role;
  };
}
