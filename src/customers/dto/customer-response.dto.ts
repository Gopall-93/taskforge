import { ApiProperty } from '@nestjs/swagger';

export class CustomerResponseDto {
  @ApiProperty({
    example: 1,
    description: 'Unique identifier of the customer',
  })
  id: number;

  @ApiProperty({
    example: 'Acme Corp',
    description: 'Customer or company name',
  })
  name: string;

  @ApiProperty({
    example: 'client@acme.com',
    description: 'Customer email address',
  })
  email: string;

  @ApiProperty({
    example: '9876543210',
    description: 'Customer contact phone number',
  })
  phone: string;

  @ApiProperty({
    example: '2026-01-28T10:30:00.000Z',
    description: 'Date when customer was created',
  })
  createdAt: Date;
}
