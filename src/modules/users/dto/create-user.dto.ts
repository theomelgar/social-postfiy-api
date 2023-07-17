import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail({}, { message: 'A valid email is required' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6,20, { message: 'Password must be between 6 and 20 characters' })
  password: string;

  @IsString()
  @IsNotEmpty()
  avatar: string;
}