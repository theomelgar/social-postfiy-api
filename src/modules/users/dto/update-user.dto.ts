import {
  IsEmail,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class UpdateUserDTO {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @Length(6,20, { message: 'Password must be between 6 and 20 characters' })
  @IsOptional()
  password: string;

  @IsString()
  @IsOptional()
  avatar:string;
}