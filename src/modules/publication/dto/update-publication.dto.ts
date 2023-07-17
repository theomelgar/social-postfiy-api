import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdatePublicationDto {
  @IsOptional()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  text: string;

  @IsNotEmpty()
  @IsString()
  @IsDateString()
  dateToPublish: string;

  @IsBoolean()
  @IsOptional()
  published: boolean;

  @IsNotEmpty()
  @IsString()
  socialMedia: string;
}
