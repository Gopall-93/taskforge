import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length, Matches } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({
    example: 'Acme Corp',
    description: 'Customer or company name',
  })
  @IsString()
  @Length(2, 100)
  name: string;

  @ApiProperty({
    example: 'client@acme.com',
    description: 'Customer email address',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '9876543210',
    description: 'Customer contact phone number',
  })
  @IsString()
  @Matches(/^[0-9]{10,15}$/, {
    message: 'Phone number must contain only digits (10–15)',
  })
  phone: string;
}
