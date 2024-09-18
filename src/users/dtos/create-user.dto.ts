import { IsEnum, IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsNotEmpty()
  @IsDateString()
  dateOfBirth: string;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsEnum(['CMS', 'CLIENT'])
  type: 'CMS' | 'CLIENT';

  @IsEnum([0, 1])
  status: 0 | 1;
}
