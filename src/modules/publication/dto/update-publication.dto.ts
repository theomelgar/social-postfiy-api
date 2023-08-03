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

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @IsDateString()
  dateToPublish: string;

  @IsBoolean()
  @IsOptional()
  published: boolean;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  socialMedia: string;
}
