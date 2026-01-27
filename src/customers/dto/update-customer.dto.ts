import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerDto } from './create-customer.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
  @ApiPropertyOptional({
    example: 'Acme Corporation Ltd.',
    description: 'Updated customer name',
  })
  name?: string;

  @ApiPropertyOptional({
    example: 'newmail@acme.com',
    description: 'Updated email address',
  })
  email?: string;

  @ApiPropertyOptional({
    example: '9988776655',
    description: 'Updated phone number',
  })
  phone?: string;
}
