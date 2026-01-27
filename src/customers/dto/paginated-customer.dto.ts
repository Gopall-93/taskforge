import { ApiProperty } from '@nestjs/swagger';
import { CustomerResponseDto } from './customer-response.dto';

export class PaginatedCustomersDto {
  @ApiProperty({ example: 1 })
  page: number;

  @ApiProperty({ example: 10 })
  limit: number;

  @ApiProperty({ example: 50 })
  totalRecords: number;

  @ApiProperty({ example: 5 })
  totalPages: number;

  @ApiProperty({ type: [CustomerResponseDto] })
  data: CustomerResponseDto[];
}
