import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    type: 'string',
    name: 'name',
    description: 'Name of the user',
  })
  name: string;
  @ApiProperty({
    type: 'number',
    name: 'age',
    description: 'Age of the user',
  })
  age: number;
  @ApiProperty({
    type: 'string',
    name: 'email',
    description: 'Email of the user',
  })
  email: string;
  @ApiProperty({
    type: 'string',
    name: 'password',
    description: 'Password of the user',
  })
  password: string;
  @ApiProperty({
    type: 'string',
    name: 'address',
    description: 'Address of the user',
  })
  address: string;
}
